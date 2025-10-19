"use client";

import { useRef } from "react";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useFileUpload } from "./use-file-upload";

interface StoryUploaderProps {
  onUpload: () => void;
  className?: string;
}

export function StoryUploader({ onUpload, className }: StoryUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isUploading, handleFileUpload } = useFileUpload(onUpload);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    const success = await handleFileUpload(file || null);

    // Reset file input
    if (success && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={isUploading}
      />
      <Button
        onClick={handleClick}
        disabled={isUploading}
        className="w-16 h-16 rounded-full text-2xl font-bold"
        size="icon"
      >
        {isUploading ? "..." : "+"}
      </Button>
    </div>
  );
}

export default StoryUploader;
