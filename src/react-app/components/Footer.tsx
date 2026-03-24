import { COMPANY_NAME, ADDRESS, HOURS } from '../constants';

interface Props {
  compact?: boolean;
  showAreaTags?: boolean;
}

export default function Footer({ compact = false, showAreaTags = false }: Props) {
  if (compact) {
    return (
      <footer className="footer-sm">
        <div className="footer-name">{COMPANY_NAME}</div>
        <address>{ADDRESS} ｜ {HOURS}</address>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-name">{COMPANY_NAME}</div>
      <address>
        {ADDRESS}<br />
        TEL: 090-8563-7982<br />
        営業時間：{HOURS}
      </address>
      {showAreaTags && (
        <div className="area-tags">
          <span className="tag-r">川口市木曽呂</span>
          <span className="tag-r">川口市赤山</span>
          <span className="tag-r">川口市安行</span>
          <span className="tag-r">川口市新郷</span>
          <span className="tag-r">東川口</span>
          <span className="tag-r">さいたま市</span>
          <span className="tag-r">蕨市</span>
          <span className="tag-r">越谷市</span>
          <span className="tag-y">東京都内（北・足立・板橋）</span>
        </div>
      )}
      <div className="footer-hours">ガラス割れの緊急対応もお気軽に。見積もり・ご相談は完全無料です。</div>
    </footer>
  );
}
