export default function PostDetail({ post, onBack, onEdit, onRemove }) {
  if (!post) {
    return (
      <div>
        <p className="empty">삭제되었거나 존재하지 않는 게시글입니다.</p>
        <button type="button" className="btn" onClick={onBack}>
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
    <article>
      <h2 className="detail-title">{post.title}</h2>
      <div className="detail-meta">
        <span>{post.author}</span>
        <span>{post.createdAt}</span>
        {post.updatedAt && <span>({post.updatedAt} 수정됨)</span>}
      </div>
      <div className="detail-content">
        {post.content.trim() ? post.content : <span className="muted">내용이 없습니다.</span>}
      </div>
      <div className="actions">
        <button type="button" className="btn" onClick={onBack}>
          목록
        </button>
        <div className="actions-right">
          <button type="button" className="btn" onClick={() => onEdit(post.id)}>
            수정
          </button>
          <button type="button" className="btn danger" onClick={handleRemove}>
            삭제
          </button>
        </div>
      </div>
    </article>
  )
}
