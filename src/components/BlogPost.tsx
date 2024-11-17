import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/blog';

interface BlogPostProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogPost({ post, onClose }: BlogPostProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <button
        onClick={onClose}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux articles
      </button>

      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-8"
      />

      <div className="flex items-center text-sm text-gray-500 mb-4">
        <CalendarDays className="h-4 w-4 mr-2" />
        {post.date}
        <Clock className="h-4 w-4 ml-4 mr-2" />
        {post.readTime}
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      
      <div className="prose prose-blue max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}