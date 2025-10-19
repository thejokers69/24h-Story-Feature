"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { Story } from "@/lib/storage";
import { StoryProgress } from "./story-progress";
import { StoryNavigation } from "./story-navigation";
import { useSwipe } from "./use-swipe";

interface StoryViewerProps {
  stories: Story[];
  initialStoryId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function StoryViewer({
  stories,
  initialStoryId,
  isOpen,
  onClose,
}: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  const { swipeState } = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
    threshold: 50,
  });

  useEffect(() => {
    if (stories.length > 0) {
      const index = stories.findIndex((story) => story.id === initialStoryId);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [stories, initialStoryId]);

  const currentStory = stories[currentIndex];

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;

    if (clickX < width / 3) {
      handlePrevious();
    } else if (clickX > (2 * width) / 3) {
      handleNext();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-full w-full h-full max-h-full p-0 border-0 bg-black"
        onClick={handleClick}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <DialogTitle className="sr-only">Story Viewer</DialogTitle>
          <StoryProgress
            currentIndex={currentIndex}
            totalStories={stories.length}
          />

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={onClose}
          >
            ×
          </Button>

          {/* Story image */}
          {/* Using <img> instead of Next.js <Image> because we're loading base64 images from localStorage */}
          {currentStory && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={currentStory.image}
              alt="Story"
              className="max-w-full max-h-full object-contain story-fade-in transition-transform duration-150 ease-out"
              style={{
                transform: `translateX(${swipeState.swipeOffset}px)`,
                opacity: Math.max(
                  0.7,
                  1 -
                    (Math.abs(swipeState.swipeOffset) / window.innerWidth) * 0.3
                ),
              }}
            />
          )}

          <StoryNavigation onPrevious={handlePrevious} onNext={handleNext} />

          {/* Story counter */}
          {stories.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {stories.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default StoryViewer;
