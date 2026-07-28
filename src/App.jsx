import { useState } from 'react'
import usePosts from './hooks/usePosts'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

export default function App() {
  const { posts, removePost, getPost } = usePosts()
  // 'list' | 'detail'
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
          <PostList posts={posts} onSelect={goDetail} onWrite={() => {}} />
        )}
        {view === 'detail' && (
          <PostDetail
            post={getPost(selectedId)}
            onBack={goList}
            onEdit={() => {}}
            onRemove={handleRemove}
          />
        )}
      </main>
    </div>
  )
}
