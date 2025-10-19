"use client";

import { useState } from "react";
import { StoryUploader } from "../story-uploader";
import { StoryViewer } from "../story-viewer";
import { StoryItem } from "./story-item";
import { useStories } from "./use-stories";

export function StoryList() {
  const { stories, refreshStories } = useStories();
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleStoryClick = (storyId: string) => {
    setSelectedStoryId(storyId);
    setIsViewerOpen(true);
  };

  const handleViewerClose = () => {
    setIsViewerOpen(false);
    setSelectedStoryId(null);
  };

  const handleUpload = () => {
    refreshStories();
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 overflow-x-auto pb-4 story-scroll">
        {/* Upload button */}
        <StoryUploader onUpload={handleUpload} className="flex-shrink-0" />

        {/* Story avatars */}
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} onClick={handleStoryClick} />
        ))}
      </div>

      {/* Story viewer */}
      {selectedStoryId && (
        <StoryViewer
          stories={stories}
          initialStoryId={selectedStoryId}
          isOpen={isViewerOpen}
          onClose={handleViewerClose}
        />
      )}
    </div>
  );
}

export default StoryList;
