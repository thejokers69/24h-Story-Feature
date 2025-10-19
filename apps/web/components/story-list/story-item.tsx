import { Avatar, AvatarImage } from "@workspace/ui/components/avatar";
import { Story } from "@/lib/storage";

interface StoryItemProps {
  story: Story;
  onClick: (storyId: string) => void;
}

export function StoryItem({ story, onClick }: StoryItemProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer"
      onClick={() => onClick(story.id)}
    >
      <div className="relative story-ring">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={story.image}
            alt="Story thumbnail"
            className="object-cover"
          />
        </Avatar>
      </div>
    </div>
  );
}
