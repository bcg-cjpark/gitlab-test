import { useState } from 'react'
import usePosts from './hooks/usePosts'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostForm from './components/PostForm'
import { VIEWS } from './constants'

export default function App() {
  const { posts, addPost, updatePost, removePost, getPost } = usePosts()
  const [view, setView] = useState(VIEWS.LIST)
  const [selectedId, setSelectedId] = useState(null)

  const selectedPost = getPost(selectedId)

  const goList = () => {
    setView(VIEWS.LIST)
    setSelectedId(null)
  }

  const goDetail = (id) => {
    setSelectedId(id)
    setView(VIEWS.DETAIL)
  }

  const handleCreate = (values) => {
    const created = addPost(values)
    goDetail(created.id)
  }

  const handleUpdate = (values) => {
    updatePost(selectedId, values)
    setView(VIEWS.DETAIL)
  }

  const handleRemove = (id) => {
    removePost(id)
    goList()
  }

  const renderView = () => {
    switch (view) {
      case VIEWS.WRITE:
        return <PostForm onSubmit={handleCreate} onCancel={goList} />
      case VIEWS.EDIT:
        // 수정 중 글이 사라진 경우엔 상세(없음 안내)로 떨어뜨린다.
        return selectedPost ? (
          <PostForm
            post={selectedPost}
            onSubmit={handleUpdate}
            onCancel={() => setView(VIEWS.DETAIL)}
          />
        ) : (
          <PostDetail post={undefined} onBack={goList} onEdit={() => {}} onRemove={handleRemove} />
        )
      case VIEWS.DETAIL:
        return (
          <PostDetail
            post={selectedPost}
            onBack={goList}
            onEdit={() => setView(VIEWS.EDIT)}
            onRemove={handleRemove}
          />
        )
      case VIEWS.LIST:
      default:
        return <PostList posts={posts} onSelect={goDetail} onWrite={() => setView(VIEWS.WRITE)} />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>간단 게시판</h1>
        <p className="desc">새로고침하면 데이터가 사라지는 메모리 전용 게시판입니다.</p>
      </header>
      <main className="app-body">{renderView()}</main>
    </div>
  )
}
