import { useState } from 'react'
import { INITIAL_POSTS } from '../data/initialPosts'
import { formatDateTime } from '../utils/date'

// 서버 없이 브라우저 메모리(React state)에만 보관한다.
let nextId = 3

export default function usePosts() {
  const [posts, setPosts] = useState(INITIAL_POSTS)

  const addPost = ({ title, author, content }) => {
    const post = {
      id: nextId++,
      title,
      author,
      content,
      createdAt: formatDateTime(),
      updatedAt: null,
    }
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
