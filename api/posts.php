<?php
require_once 'config.php';

try {
    $stmt = $pdo->query('SELECT * FROM blog_posts ORDER BY date DESC');
    echo json_encode($stmt->fetchAll());
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>