import { useState } from 'react';
import { BlogPost, BlogCategory } from '../types/blog';
import { blogApi } from '../utils/blogApi';

interface BlogEditorProps {
  post?: BlogPost;
  onSave: () => void;
  onCancel: () => void;
}

export default function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    category: post?.category || '',
    imageUrl: post?.imageUrl || '',
    readTime: post?.readTime || '5 min'
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories: BlogCategory[] = ['Dématérialisation', 'Excel', 'IA'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (post) {
        await blogApi.updatePost({ ...post, ...formData });
      } else {
        await blogApi.addPost(formData);
      }
      onSave();
    } catch (err) {
      console.error('Error saving post:', err);
      setError('Erreur lors de l\'enregistrement de l\'article');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Titre</label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Extrait</label>
        <textarea
          required
          value={formData.excerpt}
          onChange={e => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contenu</label>
        <textarea
          required
          value={formData.content}
          onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
          rows={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Catégorie</label>
        <select
          required
          value={formData.category}
          onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Sélectionner une catégorie</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL de l'image</label>
        <input
          type="url"
          required
          value={formData.imageUrl}
          onChange={e => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Temps de lecture</label>
        <input
          type="text"
          required
          value={formData.readTime}
          onChange={e => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={saving}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Enregistrement...' : (post ? 'Mettre à jour' : 'Publier')}
        </button>
      </div>
    </form>
  );
}