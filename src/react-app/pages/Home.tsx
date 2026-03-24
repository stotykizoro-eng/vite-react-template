import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { TEL, TEL_DISPLAY } from '../constants';

export default function Home() {
  const [reviewsOpen, setReviewsOpen] = useState(false);

  return (
    <PageLayout>
      <div className="top-bar">📍 川口市木曽呂発・さいたま市・東京都内 対応中 ｜ 見積もり完全無料</div>

      <header className="header">
        <div className="header-logo">有限会社</div>
        <div className="header-name">宮口板硝子</div>
        <div className="header-tagline">創業50年 ｜ 地元密着 ｜ 問屋直結スピード対応</div>
      </header>

      <section className="hero">
        <div className="sp-badge">ガラス修理・網戸張替 専門店</div>
        <h1 className="hero-main">窓・玄関のトラブル、<br /><em>基本的に当日完了！</em></h1>
        <div className="hero-sub">ガラス1枚・網戸1枚・窓の動きまで直します</div>
        <div className="hero-free">見積もりは【完全無料】です</div>
        <a href={`tel:${TEL}`} className="tel-btn">
          <span style={{ fontSize: '30px' }}>📞</span>
          <div>
            {TEL_DISPLAY}
            <small>今すぐ電話する（無料相談）</small>
          </div>
        </a>
      </section>

      <div className="emergency">
        <div className="emer-title">🚨 ガラスが割れた・今すぐ直したい方</div>
        <a href={`tel:${TEL}`} className="emer-btn"><span>📞</span> 今すぐ電話する</a>
        <div className="emer-sub">川口市・さいたま市・東京都内 ｜ 基本当日対応 ｜ 7:30〜20:00</div>
      </div>

      <div className="stats-bar">
        <div className="stat-item"><span className="stat-num">50年</span><span className="stat-label">創業の歴史</span></div>
        <div className="stat-item"><span className="stat-num">当日</span><span className="stat-label">基本当日対応</span></div>
        <div className="stat-item"><span className="stat-num">無料</span><span className="stat-label">見積もり無料</span></div>
        <div className="stat-item"><span className="stat-num">7:30〜</span><span className="stat-label">早朝から対応</span></div>
      </div>

      <div className="sec-title">
        <span className="en">Main Services</span>
        <h2>🏠 メインのサービス</h2>
      </div>

      <div className="main-services">
        <Link to="/glass" className="svc-btn featured">
          <div className="svc-icon">🔧</div>
          <div className="svc-name">ガラス修理・交換</div>
          <div className="svc-price">¥8,000〜</div>
          <div className="svc-badge-red">⚡ 基本当日対応</div>
        </Link>
        <Link to="/amido" className="svc-btn featured">
          <div className="svc-icon">🪟</div>
          <div className="svc-name">網戸の張り替え</div>
          <div className="svc-price">¥3,500〜</div>
          <div className="svc-badge-red">⚡ 基本当日対応</div>
        </Link>
        <Link to="/sash" className="svc-btn">
          <div className="svc-icon">⚙️</div>
          <div className="svc-name">窓の動き修理</div>
          <div className="svc-price">調整のみ無料〜</div>
          <div className="svc-badge-red">⚡ 基本当日対応</div>
        </Link>
        <Link to="/yushitsu" className="svc-btn">
          <div className="svc-icon">🚿</div>
          <div className="svc-name">浴室ドア交換</div>
          <div className="svc-price">工期最短1日</div>
        </Link>
      </div>

      <div className="other-title">▼ その他のサービスはこちら</div>
      <div className="other-services">
        <Link to="/kagi" className="other-btn">
          <div className="oth-icon">🔐</div>
          <div>
            <div className="oth-name">鍵の取替・修理</div>
            <div className="oth-sub">玄関鍵・防犯錠・補助錠など ¥8,000〜</div>
          </div>
          <div className="oth-arrow">›</div>
        </Link>
        <Link to="/shoji" className="other-btn">
          <div className="oth-icon">🏯</div>
          <div>
            <div className="oth-name">障子・襖の張替</div>
            <div className="oth-sub">障子¥4,500〜 / 襖¥6,000〜 まとめ割あり</div>
          </div>
          <div className="oth-arrow">›</div>
        </Link>
        <Link to="/bohan" className="other-btn">
          <div className="oth-icon">🛡️</div>
          <div>
            <div className="oth-name">防犯・二重窓（内窓）</div>
            <div className="oth-sub">防犯ガラス・内窓設置・防犯フィルム</div>
          </div>
          <div className="oth-arrow">›</div>
        </Link>
      </div>

      <div className="sec-title">
        <span className="en">Why Choose Us</span>
        <h2>選ばれる3つの理由</h2>
      </div>
      <div className="strengths">
        <div className="str-item">
          <div className="str-icon">⚡</div>
          <div>
            <h4>問屋直結・スピード対応</h4>
            <p>ガラスや部材を問屋から直接仕入れ。在庫豊富で基本当日完了が可能です。</p>
          </div>
        </div>
        <div className="str-item">
          <div className="str-icon">🏠</div>
          <div>
            <h4>創業50年・地元川口の信頼</h4>
            <p>川口市で50年。地元の皆さまに育てていただいた実績と信頼。リピーター・ご紹介多数。</p>
          </div>
        </div>
        <div className="str-item">
          <div className="str-icon">💬</div>
          <div>
            <h4>何でも相談OK・見積無料</h4>
            <p>「ガラス1枚だけ…」でも大歓迎。小さな修理も大きな工事も、まずはお気軽にどうぞ。</p>
          </div>
        </div>
      </div>

      <section className="reviews-bg">
        <div className="sec-title" style={{ paddingTop: '10px' }}>
          <span className="en">Customer Voice</span>
          <h2>お客様の声（全37件）</h2>
        </div>
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <div className="review-text">窓ガラスが割れて困っていたら、電話してすぐ来てくれて当日中に直してくれました。料金も明確で安心。さすが地元の老舗です！</div>
          <div className="review-from">川口市 / 50代女性</div>
        </div>
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <div className="review-text">網戸1枚だけお願いしましたが、嫌な顔ひとつせず丁寧に対応してくださいました。窓のガタつきまで一緒に見てくれて感激です。</div>
          <div className="review-from">さいたま市 / 60代男性</div>
        </div>
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <div className="review-text">内窓を設置してもらいました。冬の結露がなくなり、暖房効率も上がって大満足。価格もリーズナブルでした。</div>
          <div className="review-from">足立区 / 40代女性</div>
        </div>
        <div className={`reviews-hidden${reviewsOpen ? ' open' : ''}`}>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">急に鍵が壊れて困っていたところ、当日夕方に来ていただいて助かりました。丁寧な説明で安心してお任せできました。</div>
            <div className="review-from">川口市 / 30代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <div className="review-text">障子の張り替えをお願いしました。手際よく、仕上がりもとてもきれいで和室が明るくなりました。</div>
            <div className="review-from">さいたま市 / 70代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">台風でガラスが割れた翌日に来てもらえました。迅速な対応に本当に助かりました。ありがとうございます。</div>
            <div className="review-from">川口市 / 60代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">見積もりが明確で、追加料金もなし。こういう昔ながらの誠実な職人さんが近くにいてよかったです。</div>
            <div className="review-from">さいたま市 / 40代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">以前ネットの格安業者に頼んだら後で高額請求されました。宮口さんは見積もりがきちんとしていて安心でした。</div>
            <div className="review-from">板橋区 / 40代女性</div>
          </div>
        </div>
        <button
          className="show-more-btn"
          onClick={() => setReviewsOpen((prev) => !prev)}
        >
          {reviewsOpen ? '▲ 閉じる' : '▼ 残りの口コミを見る（34件）'}
        </button>
      </section>

      <Footer showAreaTags />
    </PageLayout>
  );
}
