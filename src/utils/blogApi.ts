import { BlogPost } from '../types/blog';

// URL de l'API PHP
const API_URL = '/api';

export const blogApi = {
  getPosts: async (): Promise<BlogPost[]> => {
    try {
      const response = await fetch(`${API_URL}/posts.php`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  addPost: async (post: Omit<BlogPost, 'id' | 'date'>): Promise<BlogPost> => {
    try {
      const response = await fetch(`${API_URL}/create_post.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  updatePost: async (post: BlogPost): Promise<BlogPost> => {
    try {
      const response = await fetch(`${API_URL}/update_post.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  deletePost: async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}/delete_post.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
};