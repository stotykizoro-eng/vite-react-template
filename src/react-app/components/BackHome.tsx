import { Link } from 'react-router-dom';

export default function BackHome() {
  return (
    <Link to="/" className="back-home">
      <span>◀</span> トップページへ戻る
    </Link>
  );
}
