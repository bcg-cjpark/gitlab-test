import usePosts from './hooks/usePosts'
import PostList from './components/PostList'

export default function App() {
  const { posts } = usePosts()

  return (
    <div className="app">
      <header className="app-header">
        <h1>간단 게시판</h1>
        <p className="desc">새로고침하면 데이터가 사라지는 메모리 전용 게시판입니다.</p>
      </header>
      <main className="app-body">
        <PostList posts={posts} onSelect={() => {}} onWrite={() => {}} />
      </main>
    </div>
  )
}
