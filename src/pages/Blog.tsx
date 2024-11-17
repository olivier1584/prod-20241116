import { useState, useEffect } from 'react';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import BlogPost from '../components/BlogPost';
import { blogApi } from '../utils/blogApi';
import type { BlogPost as BlogPostType } from '../types/blog';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await blogApi.getPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Erreur lors du chargement des articles');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlogPost post={selectedPost} onClose={() => setSelectedPost(null)} />
      </div>
    );
  }

  return (
    <div>
      <ServiceHero
        title="Blog"
        description="Actualités, guides et conseils pour votre transformation digitale"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {post.date}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Lire la suite
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 py-12">
              Aucun article disponible pour le moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}