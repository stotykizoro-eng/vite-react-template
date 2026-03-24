import { TEL, TEL_DISPLAY } from '../constants';

export default function PhoneFixBar() {
  return (
    <a href={`tel:${TEL}`} className="phone-fix">
      <span style={{ fontSize: '26px' }}>📞</span>
      <div className="ph-inner">
        {TEL_DISPLAY}
        <small>タップで今すぐ電話 ｜ 見積無料</small>
      </div>
    </a>
  );
}
