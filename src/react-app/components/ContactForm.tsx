import { useState } from 'react';
import { CONTACT_EMAIL } from '../constants';

interface Props {
  introText?: string;
}

export default function ContactForm({ introText = 'メールでのお問い合わせ・無料見積もり依頼' }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('お名前・メールアドレス・お問い合わせ内容は必須です');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`宮口板硝子へのお問い合わせ（${name}様）`);
    const body = encodeURIComponent(
      `お名前：${name}\n電話番号：${phone || '未入力'}\nメールアドレス：${email}\n\nお問い合わせ内容：\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-title">✉️ {introText}</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="cf-field">
          <label className="cf-label">
            お名前<span className="cf-required">※必須</span>
          </label>
          <input
            type="text"
            className="cf-input"
            placeholder="例：山田 太郎"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">電話番号（任意）</label>
          <input
            type="tel"
            className="cf-input"
            placeholder="例：090-1234-5678"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">
            メールアドレス<span className="cf-required">※必須</span>
          </label>
          <input
            type="email"
            className="cf-input"
            placeholder="例：example@mail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="cf-field">
          <label className="cf-label">
            お問い合わせ内容<span className="cf-required">※必須</span>
          </label>
          <textarea
            className="cf-textarea"
            placeholder="例：リビングの窓ガラスが割れてしまいました。サイズは…"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        {error && <div className="cf-error">⚠️ {error}</div>}
        <button type="submit" className="cf-submit">
          メールで送信する →
        </button>
        <p className="cf-note">
          ※送信ボタンを押すとメールアプリが開きます。<br />
          メールアプリが設定されていない場合は、お電話（090-8563-7982）へお気軽にどうぞ。
        </p>
      </form>
    </div>
  );
}
