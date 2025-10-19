interface StoryProgressProps {
  currentIndex: number;
  totalStories: number;
}

export function StoryProgress({
  currentIndex,
  totalStories,
}: StoryProgressProps) {
  const progress =
    totalStories > 0 ? ((currentIndex + 1) / totalStories) * 100 : 0;

  return (
    <div className="absolute top-4 left-4 right-4 z-10">
      <div className="w-full bg-gray-600 rounded-full h-1">
        <div
          className="bg-white h-1 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
