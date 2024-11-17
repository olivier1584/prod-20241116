import { useState, useEffect } from 'react';
import { PlusCircle, Edit2, Trash2, LogOut } from 'lucide-react';
import { blogApi } from '../utils/blogApi';
import { BlogPost } from '../types/blog';
import BlogEditor from '../components/BlogEditor';
import ServiceHero from '../components/ServiceHero';
import LoginForm from '../components/LoginForm';
import { auth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState(auth.checkAuth());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndFetchPosts = async () => {
      const isAuth = auth.checkAuth();
      setIsAuthenticated(isAuth);
      
      if (isAuth) {
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
      } else {
        setLoading(false);
      }
    };

    checkAuthAndFetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        await blogApi.deletePost(id);
        const fetchedPosts = await blogApi.getPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error deleting post:', err);
        alert('Erreur lors de la suppression de l\'article');
      }
    }
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const fetchedPosts = await blogApi.getPosts();
      setPosts(fetchedPosts);
      setIsEditing(false);
      setSelectedPost(undefined);
    } catch (err) {
      console.error('Error refreshing posts:', err);
      alert('Erreur lors du rafraîchissement des articles');
    }
  };

  const handleLogout = () => {
    auth.logout();
    setIsAuthenticated(false);
    navigate('/blog');
  };

  if (!isAuthenticated) {
    return (
      <div>
        <ServiceHero
          title="Administration du Blog"
          description="Accès sécurisé"
        />
        <LoginForm onSuccess={() => setIsAuthenticated(true)} />
      </div>
    );
  }

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

  if (isEditing) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">
          {selectedPost ? 'Modifier l\'article' : 'Nouvel article'}
        </h2>
        <BlogEditor
          post={selectedPost}
          onSave={handleSave}
          onCancel={() => {
            setIsEditing(false);
            setSelectedPost(undefined);
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <ServiceHero
        title="Administration du Blog"
        description="Gérez vos articles et leur contenu"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Déconnexion
          </button>

          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Nouvel article
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.id}>
                <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
            {posts.length === 0 && (
              <li className="px-4 py-8 text-center text-gray-500">
                Aucun article pour le moment. Commencez par en créer un !
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}