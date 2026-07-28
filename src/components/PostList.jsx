export default function PostList({ posts, onSelect, onWrite }) {
  return (
    <div>
      <div className="list-top">
        <span className="count">전체 {posts.length}건</span>
        <button className="btn primary" onClick={onWrite}>
          글쓰기
        </button>
      </div>

      {posts.length === 0 ? (
        <p className="empty">등록된 게시글이 없습니다.</p>
      ) : (
        <table className="post-table">
          <thead>
            <tr>
              <th className="col-no">번호</th>
              <th>제목</th>
              <th className="col-author">작성자</th>
              <th className="col-date">작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="col-no">{post.id}</td>
                <td>
                  <button className="link" onClick={() => onSelect(post.id)}>
                    {post.title}
                  </button>
                </td>
                <td className="col-author">{post.author}</td>
                <td className="col-date">{post.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
