export default function PostList({ posts, onSelect, onWrite }) {
  return (
    <section aria-labelledby="list-heading">
      <div className="list-top">
        <h2 className="sr-only" id="list-heading">
          게시글 목록
        </h2>
        <span className="count">전체 {posts.length}건</span>
        <button type="button" className="btn primary" onClick={onWrite}>
          글쓰기
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="empty">
          <p>등록된 게시글이 없습니다.</p>
          <button type="button" className="btn" onClick={onWrite}>
            첫 글 작성하기
          </button>
        </div>
      ) : (
        <table className="post-table">
          <caption className="sr-only">번호, 제목, 작성자, 작성일로 구성된 게시글 목록</caption>
          <thead>
            <tr>
              <th scope="col" className="col-no">
                번호
              </th>
              <th scope="col">제목</th>
              <th scope="col" className="col-author">
                작성자
              </th>
              <th scope="col" className="col-date">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="col-no">{post.id}</td>
                <td>
                  <button type="button" className="link" onClick={() => onSelect(post.id)}>
                    {post.title}
                  </button>
                  {post.updatedAt && <span className="badge">수정됨</span>}
                </td>
                <td className="col-author">{post.author}</td>
                <td className="col-date">{post.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
