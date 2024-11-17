<?php
require_once 'config.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $stmt = $pdo->prepare('UPDATE blog_posts SET title = ?, excerpt = ?, content = ?, category = ?, imageUrl = ?, readTime = ? WHERE id = ?');
    
    $stmt->execute([
        $data['title'],
        $data['excerpt'],
        $data['content'],
        $data['category'],
        $data['imageUrl'],
        $data['readTime'],
        $data['id']
    ]);
    
    $stmt = $pdo->prepare('SELECT * FROM blog_posts WHERE id = ?');
    $stmt->execute([$data['id']]);
    
    echo json_encode($stmt->fetch());
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>