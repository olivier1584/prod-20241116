import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import { dbConfig } from './src/config/database.js';

const app = express();
const port = process.env.PORT || 3000;

// Configuration CORS plus permissive pour le développement
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Création du pool de connexions MySQL avec gestion des erreurs SSL
const pool = mysql.createPool({
  ...dbConfig,
  ssl: {
    rejectUnauthorized: false
  }
});

// Middleware de logging détaillé
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Request body:', req.body);
  
  // Intercepter la réponse pour logger
  const oldSend = res.send;
  res.send = function(data) {
    console.log(`Response (${Date.now() - start}ms):`, data);
    return oldSend.apply(res, arguments);
  };
  
  next();
});

// Test de la connexion à la base de données
app.get('/api/health', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    connection.release();
    res.json({ status: 'healthy', message: 'Database connection successful' });
  } catch (error) {
    console.error('Database health check failed:', error);
    res.status(500).json({ status: 'unhealthy', error: error.message });
  }
});

// Routes API
app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching posts from database...');
    const [rows] = await pool.query('SELECT * FROM blog_posts ORDER BY date DESC');
    console.log(`Retrieved ${rows.length} posts:`, rows);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    console.log('Creating new post:', req.body);
    const { title, excerpt, content, category, imageUrl, readTime } = req.body;
    
    const [result] = await pool.query(
      'INSERT INTO blog_posts (title, excerpt, content, category, imageUrl, readTime, date) VALUES (?, ?, ?, ?, ?, ?, NOW())',
      [title, excerpt, content, category, imageUrl, readTime]
    );
    
    console.log('Post created with ID:', result.insertId);
    
    const [[newPost]] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [result.insertId]);
    console.log('New post details:', newPost);
    res.json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post', details: error.message });
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    console.log('Updating post:', req.params.id, req.body);
    const { title, excerpt, content, category, imageUrl, readTime } = req.body;
    
    await pool.query(
      'UPDATE blog_posts SET title = ?, excerpt = ?, content = ?, category = ?, imageUrl = ?, readTime = ? WHERE id = ?',
      [title, excerpt, content, category, imageUrl, readTime, req.params.id]
    );
    
    const [[updatedPost]] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
    console.log('Updated post:', updatedPost);
    res.json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post', details: error.message });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    console.log('Deleting post:', req.params.id);
    await pool.query('DELETE FROM blog_posts WHERE id = ?', [req.params.id]);
    console.log('Post deleted successfully');
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post', details: error.message });
  }
});

// Test de connexion à la base de données au démarrage
pool.getConnection()
  .then(connection => {
    console.log('Successfully connected to MySQL database');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});