import { useState, useEffect } from "react";
import { StorageService, Story } from "@/lib/storage";

export function useStories() {
  const [stories, setStories] = useState<Story[]>([]);

  const loadStories = () => {
    const validStories = StorageService.getValidStories();
    setStories(validStories);
  };

  useEffect(() => {
    // Load stories on mount
    loadStories();

    // Set up interval to check for expired stories every minute
    const interval = setInterval(() => {
      loadStories();
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    stories,
    refreshStories: loadStories,
  };
}
