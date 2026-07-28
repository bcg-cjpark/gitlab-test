import { useCallback, useMemo, useRef, useState } from 'react'
import { INITIAL_POSTS } from '../data/initialPosts'
import { formatDateTime } from '../utils/date'

// 서버 없이 브라우저 메모리(React state)에만 보관한다.
export default function usePosts() {
  const [posts, setPosts] = useState(INITIAL_POSTS)
  // 모듈 전역 변수 대신 훅 인스턴스별로 다음 id를 들고 있는다.
  const nextIdRef = useRef(Math.max(0, ...INITIAL_POSTS.map((post) => post.id)) + 1)

  const addPost = useCallback(({ title, author, content }) => {
    const post = {
      id: nextIdRef.current++,
      title,
      author,
      content,
      createdAt: formatDateTime(),
      updatedAt: null,
    }
    setPosts((prev) => [post, ...prev])
    return post
  }, [])

  const updatePost = useCallback((id, { title, author, content }) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, title, author, content, updatedAt: formatDateTime() }
          : post,
      ),
    )
  }, [])

  const removePost = useCallback((id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }, [])

  // 상세/수정 화면에서 매번 배열을 훑지 않도록 id 기준 맵을 만들어 둔다.
  const postsById = useMemo(() => new Map(posts.map((post) => [post.id, post])), [posts])
  const getPost = useCallback(
    (id) => (id == null ? undefined : postsById.get(id)),
    [postsById],
  )

  return { posts, addPost, updatePost, removePost, getPost }
}
