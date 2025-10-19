import { useSwipe } from "./use-swipe";

interface StoryNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function StoryNavigation({ onPrevious, onNext }: StoryNavigationProps) {
  const { handlers } = useSwipe({
    onSwipeLeft: onNext,
    onSwipeRight: onPrevious,
    threshold: 50,
  });

  return (
    <div className="absolute inset-0 flex" {...handlers}>
      <div className="w-1/3 cursor-pointer" onClick={onPrevious} />
      <div className="w-1/3" />
      <div className="w-1/3 cursor-pointer" onClick={onNext} />
    </div>
  );
}
