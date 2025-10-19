import { useState, useCallback, useRef } from "react";

interface SwipeConfig {
  threshold?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

interface SwipeState {
  isDragging: boolean;
  swipeOffset: number;
  startX: number;
  startY: number;
}

export function useSwipe({
  threshold = 50,
  onSwipeLeft,
  onSwipeRight,
}: SwipeConfig) {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isDragging: false,
    swipeOffset: 0,
    startX: 0,
    startY: 0,
  });

  const animationFrameRef = useRef<number | undefined>(undefined);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    
    setSwipeState({
      isDragging: true,
      swipeOffset: 0,
      startX: touch.clientX,
      startY: touch.clientY,
    });
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!swipeState.isDragging) return;

      const touch = e.touches[0];
      if (!touch) return;
      
      const deltaX = touch.clientX - swipeState.startX;
      const deltaY = touch.clientY - swipeState.startY;

      // Prevent vertical scrolling if horizontal swipe is detected
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }

      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Update swipe offset with animation frame for smooth updates
      animationFrameRef.current = requestAnimationFrame(() => {
        setSwipeState((prev) => ({
          ...prev,
          swipeOffset: deltaX,
        }));
      });
    },
    [swipeState.isDragging, swipeState.startX, swipeState.startY]
  );

  const handleTouchEnd = useCallback(() => {
    if (!swipeState.isDragging) return;

    const { swipeOffset } = swipeState;
    const absOffset = Math.abs(swipeOffset);

    // Reset dragging state
    setSwipeState((prev) => ({
      ...prev,
      isDragging: false,
    }));

    // Check if swipe meets threshold
    if (absOffset > threshold) {
      if (swipeOffset < 0) {
        // Swipe left - go to next story
        onSwipeLeft?.();
      } else {
        // Swipe right - go to previous story
        onSwipeRight?.();
      }
    }

    // Reset swipe offset after a short delay for smooth animation
    setTimeout(() => {
      setSwipeState((prev) => ({
        ...prev,
        swipeOffset: 0,
      }));
    }, 150);
  }, [swipeState, threshold, onSwipeLeft, onSwipeRight]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Only handle mouse events if no touch support
    if ("ontouchstart" in window) return;

    setSwipeState({
      isDragging: true,
      swipeOffset: 0,
      startX: e.clientX,
      startY: e.clientY,
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!swipeState.isDragging || "ontouchstart" in window) return;

      const deltaX = e.clientX - swipeState.startX;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setSwipeState((prev) => ({
          ...prev,
          swipeOffset: deltaX,
        }));
      });
    },
    [swipeState.isDragging, swipeState.startX]
  );

  const handleMouseUp = useCallback(() => {
    if (!swipeState.isDragging || "ontouchstart" in window) return;

    const { swipeOffset } = swipeState;
    const absOffset = Math.abs(swipeOffset);

    setSwipeState((prev) => ({
      ...prev,
      isDragging: false,
    }));

    if (absOffset > threshold) {
      if (swipeOffset < 0) {
        onSwipeLeft?.();
      } else {
        onSwipeRight?.();
      }
    }

    setTimeout(() => {
      setSwipeState((prev) => ({
        ...prev,
        swipeOffset: 0,
      }));
    }, 150);
  }, [swipeState, threshold, onSwipeLeft, onSwipeRight]);

  return {
    swipeState,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
    },
  };
}
