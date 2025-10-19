import { z } from 'zod';

export const StorySchema = z.object({
  id: z.string().min(1),
  image: z.string().min(1, 'Image is required'),
  timestamp: z.number().positive('Timestamp must be positive'),
});

export const ImageUploadSchema = z.object({
  file: z.instanceof(File, { message: 'Please select a valid image file' }),
});

export const MAX_IMAGE_WIDTH = 1080;
export const MAX_IMAGE_HEIGHT = 1920;

export interface ImageDimensions {
  width: number;
  height: number;
}

export function validateImageDimensions(file: File): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      if (img.width > MAX_IMAGE_WIDTH || img.height > MAX_IMAGE_HEIGHT) {
        reject(new Error(
          `Image dimensions (${img.width}x${img.height}) exceed maximum allowed (${MAX_IMAGE_WIDTH}x${MAX_IMAGE_HEIGHT})`
        ));
      } else {
        resolve({ width: img.width, height: img.height });
      }
    };
    
    img.onerror = () => {
      reject(new Error('Invalid image file'));
    };
    
    img.src = URL.createObjectURL(file);
  });
}

export function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    
    reader.readAsDataURL(file);
  });
}
