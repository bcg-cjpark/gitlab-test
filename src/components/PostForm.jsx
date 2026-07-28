import { useState } from 'react'

export default function PostForm({ post, onSubmit, onCancel }) {
  const isEdit = Boolean(post)
  const [title, setTitle] = useState(post?.title ?? '')
  const [author, setAuthor] = useState(post?.author ?? '')
  const [content, setContent] = useState(post?.content ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) {
      window.alert('제목과 작성자를 입력해 주세요.')
      return
    }
    onSubmit({ title: title.trim(), author: author.trim(), content })
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{isEdit ? '글 수정' : '글쓰기'}</h2>

      <label className="field">
        <span>제목</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={100} />
      </label>

      <label className="field">
        <span>작성자</span>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} maxLength={20} />
      </label>

      <label className="field">
        <span>내용</span>
        <textarea rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
      </label>

      <div className="actions">
        <button type="button" className="btn" onClick={onCancel}>
          취소
        </button>
        <button type="submit" className="btn primary">
          {isEdit ? '수정' : '등록'}
        </button>
      </div>
    </form>
  )
}
