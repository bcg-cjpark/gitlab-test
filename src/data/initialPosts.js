// 서버가 없으므로 앱이 처음 뜰 때 보여줄 예시 데이터.
// 새로고침하면 항상 이 상태로 돌아간다.
export const INITIAL_POSTS = [
  {
    id: 1,
    title: '첫 번째 글입니다',
    author: '홍길동',
    content: '메모리에만 저장되는 게시판이에요.\n새로고침하면 이 상태로 돌아갑니다.',
    createdAt: '2026-07-28 09:00',
    updatedAt: null,
  },
  {
    id: 2,
    title: '두 번째 글입니다',
    author: '김철수',
    content: '글쓰기, 수정, 삭제를 자유롭게 해보세요.',
    createdAt: '2026-07-28 10:30',
    updatedAt: null,
  },
]
