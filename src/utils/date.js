const pad = (n) => String(n).padStart(2, '0')

/** Date 객체를 'YYYY-MM-DD HH:mm' 문자열로 변환한다. */
export function formatDateTime(date = new Date()) {
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    ` ${pad(date.getHours())}:${pad(date.getMinutes())}`
  )
}
