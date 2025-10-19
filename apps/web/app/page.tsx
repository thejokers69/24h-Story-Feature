import { StoryList } from "@/components/story-list";

export default function Page() {
  return (
    <div className="container mx-auto p-4 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto pt-8">
        <StoryList />
      </div>
    </div>
  );
}
