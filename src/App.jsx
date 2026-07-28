import { useState } from 'react'
import usePosts from './hooks/usePosts'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostForm from './components/PostForm'

export default function App() {
  const { posts, addPost, updatePost, removePost, getPost } = usePosts()
  // 'list' | 'detail' | 'write' | 'edit'
  const [view, setView] = useState('list')
  const [selectedId, setSelectedId] = useState(null)

  const goList = () => {
    setView('list')
    setSelectedId(null)
  }

  const goDetail = (id) => {
    setSelectedId(id)
    setView('detail')
  }

  const handleCreate = (values) => {
    const created = addPost(values)
    goDetail(created.id)
  }

  const handleUpdate = (values) => {
    updatePost(selectedId, values)
    setView('detail')
  }

  const handleRemove = (id) => {
    removePost(id)
    goList()
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>간단 게시판</h1>
        <p className="desc">새로고침하면 데이터가 사라지는 메모리 전용 게시판입니다.</p>
      </header>
      <main className="app-body">
        {view === 'list' && (
          <PostList posts={posts} onSelect={goDetail} onWrite={() => setView('write')} />
        )}
        {view === 'detail' && (
          <PostDetail
            post={getPost(selectedId)}
            onBack={goList}
            onEdit={() => setView('edit')}
            onRemove={handleRemove}
          />
        )}
        {view === 'write' && <PostForm onSubmit={handleCreate} onCancel={goList} />}
        {view === 'edit' && (
          <PostForm
            post={getPost(selectedId)}
            onSubmit={handleUpdate}
            onCancel={() => setView('detail')}
          />
        )}
      </main>
    </div>
  )
}
