export default function PostDetail({ post, onBack, onEdit, onRemove }) {
  if (!post) {
    return (
      <div>
        <p className="empty">삭제되었거나 존재하지 않는 게시글입니다.</p>
        <button className="btn" onClick={onBack}>
          목록
        </button>
      </div>
    )
  }

  const handleRemove = () => {
    if (window.confirm('이 게시글을 삭제할까요?')) {
      onRemove(post.id)
    }
  }

  return (
    <div>
      <h2 className="detail-title">{post.title}</h2>
      <div className="detail-meta">
        <span>{post.author}</span>
        <span>{post.createdAt}</span>
      </div>
      <div className="detail-content">{post.content}</div>
      <div className="actions">
        <button className="btn" onClick={onBack}>
          목록
        </button>
        <div className="actions-right">
          <button className="btn" onClick={() => onEdit(post.id)}>
            수정
          </button>
          <button className="btn danger" onClick={handleRemove}>
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}
