# 간단 게시판 (Vite + React)

서버 없이 브라우저 메모리(React state)만 사용하는 게시판 CRUD 예제입니다.
새로고침하면 데이터는 초기 상태로 돌아갑니다. (localStorage 등 영속 저장소를 쓰지 않습니다.)

## 실행

```bash
npm install
npm run dev     # 개발 서버
npm run build   # 프로덕션 빌드
npm run preview # 빌드 결과 확인
```

## 기능

- 목록 보기 (Read)
- 글쓰기 (Create)
- 상세 보기 (Read)
- 수정 (Update) — 수정 시각을 기록하고 목록/상세에 "수정됨" 표시
- 삭제 (Delete) — 확인 후 삭제

## 구조

```
src/
├─ App.jsx              화면 전환(목록/상세/글쓰기/수정) 담당
├─ constants.js         뷰 식별자, 입력 길이 제한
├─ index.css            CSS 변수 기반 전역 스타일
├─ components/
│  ├─ PostList.jsx      목록 테이블
│  ├─ PostDetail.jsx    상세 + 수정/삭제
│  └─ PostForm.jsx      작성/수정 공용 폼 (인라인 검증)
├─ data/initialPosts.js 초기 예시 데이터
├─ hooks/usePosts.js    인메모리 CRUD 상태 관리
└─ utils/date.js        날짜 포맷 유틸
```

라우터를 쓰지 않고 `App`의 `view` 상태로 화면을 전환합니다.
