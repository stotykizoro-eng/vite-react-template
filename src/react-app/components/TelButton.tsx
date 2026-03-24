import { TEL, TEL_DISPLAY } from '../constants';

export default function TelButton() {
  return (
    <a href={`tel:${TEL}`} className="page-tel-btn">
      <span style={{ fontSize: '28px' }}>📞</span>
      <div>
        {TEL_DISPLAY}
        <small>今すぐ電話（無料相談・見積無料）</small>
      </div>
    </a>
  );
}
