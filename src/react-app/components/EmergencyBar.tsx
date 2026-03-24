import { TEL } from '../constants';

interface Props {
  title?: string;
  sub?: string;
}

export default function EmergencyBar({
  title = '🚨 ガラスが割れた・今すぐ直したい方',
  sub = '川口市・さいたま市・東京都内 ｜ 基本当日対応 ｜ 7:30〜20:00',
}: Props) {
  return (
    <div className="emergency compact">
      <div className="emer-title">{title}</div>
      <a href={`tel:${TEL}`} className="emer-btn">
        <span>📞</span> 今すぐ電話する
      </a>
      <div className="emer-sub">{sub}</div>
    </div>
  );
}
