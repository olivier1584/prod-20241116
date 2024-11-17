import { BlogPost } from '../types/blog';

export const blogStorage = {
  getPosts: (): BlogPost[] => {
    return [];
  },

  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => {
    throw new Error('Local storage is disabled. Please use the API.');
  },

  updatePost: (post: BlogPost) => {
    throw new Error('Local storage is disabled. Please use the API.');
  },

  deletePost: (id: number) => {
    throw new Error('Local storage is disabled. Please use the API.');
  }
};