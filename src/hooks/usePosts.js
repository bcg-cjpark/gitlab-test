import { useState } from 'react'

// 서버 없이 브라우저 메모리(React state)에만 보관한다.
// 새로고침하면 초기 데이터로 돌아간다.
const INITIAL_POSTS = [
  {
    id: 1,
    title: '첫 번째 글입니다',
    author: '홍길동',
    content: '메모리에만 저장되는 게시판이에요.\n새로고침하면 이 상태로 돌아갑니다.',
    createdAt: '2026-07-28 09:00',
  },
  {
    id: 2,
    title: '두 번째 글입니다',
    author: '김철수',
    content: '글쓰기, 수정, 삭제를 자유롭게 해보세요.',
    createdAt: '2026-07-28 10:30',
  },
]

let nextId = 3

function now() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export default function usePosts() {
  const [posts, setPosts] = useState(INITIAL_POSTS)

  const addPost = ({ title, author, content }) => {
    const post = { id: nextId++, title, author, content, createdAt: now() }
    setPosts((prev) => [post, ...prev])
    return post
  }

  const updatePost = (id, { title, author, content }) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, title, author, content } : post)),
    )
  }

  const removePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  const getPost = (id) => posts.find((post) => post.id === id)

  return { posts, addPost, updatePost, removePost, getPost }
}
