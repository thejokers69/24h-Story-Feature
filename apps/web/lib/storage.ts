export interface Story {
  id: string;
  image: string; // base64 string
  timestamp: number;
}

export class StorageService {
  private static STORAGE_KEY = 'stories';
  private static STORY_LIFETIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  static getStories(): Story[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stories = localStorage.getItem(this.STORAGE_KEY);
      return stories ? JSON.parse(stories) : [];
    } catch (error) {
      console.error('Error loading stories from localStorage:', error);
      return [];
    }
  }

  static saveStory(story: Story): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stories = this.getStories();
      stories.push(story);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stories));
    } catch (error) {
      console.error('Error saving story to localStorage:', error);
    }
  }

  static deleteStory(storyId: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stories = this.getStories();
      const filteredStories = stories.filter(story => story.id !== storyId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredStories));
    } catch (error) {
      console.error('Error deleting story from localStorage:', error);
    }
  }

  static clearExpiredStories(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stories = this.getStories();
      const now = Date.now();
      const validStories = stories.filter(
        story => now - story.timestamp < this.STORY_LIFETIME
      );
      
      if (validStories.length !== stories.length) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(validStories));
      }
    } catch (error) {
      console.error('Error clearing expired stories:', error);
    }
  }

  static getValidStories(): Story[] {
    this.clearExpiredStories();
    return this.getStories();
  }
}
