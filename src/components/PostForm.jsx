import { useState } from 'react'
import { LIMITS } from '../constants'

const EMPTY_ERRORS = { title: '', author: '' }

export default function PostForm({ post, onSubmit, onCancel }) {
  const isEdit = Boolean(post)
  const [title, setTitle] = useState(post?.title ?? '')
  const [author, setAuthor] = useState(post?.author ?? '')
  const [content, setContent] = useState(post?.content ?? '')
  const [errors, setErrors] = useState(EMPTY_ERRORS)

  const handleSubmit = (e) => {
    e.preventDefault()

    // alert 대신 필드 아래에 인라인으로 안내한다.
    const nextErrors = {
      title: title.trim() ? '' : '제목을 입력해 주세요.',
      author: author.trim() ? '' : '작성자를 입력해 주세요.',
    }
    setErrors(nextErrors)
    if (nextErrors.title || nextErrors.author) return

    onSubmit({ title: title.trim(), author: author.trim(), content })
  }

  const clearError = (field) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: '' } : prev))

  return (
    <form className="post-form" onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">{isEdit ? '글 수정' : '글쓰기'}</h2>

      <div className="field">
        <label htmlFor="post-title">제목</label>
        <input
          id="post-title"
          value={title}
          maxLength={LIMITS.TITLE}
          autoFocus
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'post-title-error' : undefined}
          onChange={(e) => {
            setTitle(e.target.value)
            clearError('title')
          }}
        />
        {errors.title && (
          <p className="field-error" id="post-title-error" role="alert">
            {errors.title}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="post-author">작성자</label>
        <input
          id="post-author"
          value={author}
          maxLength={LIMITS.AUTHOR}
          aria-invalid={Boolean(errors.author)}
          aria-describedby={errors.author ? 'post-author-error' : undefined}
          onChange={(e) => {
            setAuthor(e.target.value)
            clearError('author')
          }}
        />
        {errors.author && (
          <p className="field-error" id="post-author-error" role="alert">
            {errors.author}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="post-content">내용</label>
        <textarea
          id="post-content"
          rows={10}
          value={content}
          maxLength={LIMITS.CONTENT}
          onChange={(e) => setContent(e.target.value)}
        />
        <p className="field-count">
          {content.length} / {LIMITS.CONTENT}
        </p>
      </div>

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
