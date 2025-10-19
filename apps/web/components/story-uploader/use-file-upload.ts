import { useState } from "react";
import { StorageService, Story } from "@/lib/storage";
import {
  validateImageDimensions,
  convertFileToBase64,
} from "@/lib/validations";

export function useFileUpload(onUpload: () => void) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (file: File | null) => {
    if (!file) return;

    setIsUploading(true);

    try {
      // Validate image dimensions
      await validateImageDimensions(file);

      // Convert to base64
      const base64Image = await convertFileToBase64(file);

      // Create story object
      const story: Story = {
        id: crypto.randomUUID(),
        image: base64Image,
        timestamp: Date.now(),
      };

      // Save to localStorage
      StorageService.saveStory(story);

      // Notify parent component
      onUpload();

      return true;
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to upload image");
      return false;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    handleFileUpload,
  };
}
