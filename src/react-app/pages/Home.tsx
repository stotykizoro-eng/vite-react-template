import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import ServiceCard from '../components/ServiceCard';
import { TEL, TEL_DISPLAY } from '../constants';

export default function Home() {
  const [reviewsOpen, setReviewsOpen] = useState(false);

  return (
    <PageLayout>
      <MetaTags
        title="川口市木曽呂のガラス修理・網戸張替なら宮口板硝子｜創業50年・当日対応・見積無料"
        description="川口市木曽呂・赤山・安行・新郷・芝・戸塚・東川口、さいたま市・蕨市・越谷市・東京北区・足立区のガラス修理・網戸張替専門店。創業50年の老舗。ガラス1枚から当日対応。見積無料。☎090-8563-7982"
        path="/"
      />
      <LocalBusinessSchema />

      {/* トップバー */}
      <div className="top-bar">📍 川口市木曽呂発・さいたま市・東京都内 対応中 ｜ 見積もり完全無料</div>

      {/* ヘッダー */}
      <header className="header">
        <div className="header-left">
          <div className="header-logo">有限会社</div>
          <div className="header-name">宮口板硝子</div>
        </div>
        <div className="header-tagline">創業50年 ｜ 地元密着 ｜ 問屋直結スピード対応</div>
      </header>

      {/* ヒーロー */}
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

      {/* 緊急バー */}
      <div className="emergency">
        <div className="emer-title">🚨 ガラスが割れた・今すぐ直したい方</div>
        <a href={`tel:${TEL}`} className="emer-btn"><span>📞</span> 今すぐ電話する</a>
        <div className="emer-sub">川口市・さいたま市・東京都内 ｜ 基本当日対応 ｜ 7:30〜20:00</div>
      </div>

      {/* 統計バー */}
      <div className="stats-bar">
        <div className="stat-item"><span className="stat-num">50年</span><span className="stat-label">創業の歴史</span></div>
        <div className="stat-item"><span className="stat-num">当日</span><span className="stat-label">基本当日対応</span></div>
        <div className="stat-item"><span className="stat-num">無料</span><span className="stat-label">見積もり無料</span></div>
        <div className="stat-item"><span className="stat-num">7:30〜</span><span className="stat-label">早朝から対応</span></div>
      </div>

      {/* メインサービス */}
      <div className="sec-title">
        <span className="en">Main Services</span>
        <h2>🏠 メインのサービス</h2>
      </div>

      <div className="main-services">
        <ServiceCard
          to="/glass"
          image="/images/glass.png"
          alt="ガラス修理・交換"
          icon="🔧"
          title="ガラス修理・交換"
          bullets={[
            '子どもがぶつかって割れた',
            '台風・強風でひびが入った',
            '防犯ガラスに交換したい',
            '賃貸の原状回復でガラス交換が必要',
          ]}
          cta="現場でサイズを測って即日手配！"
          prices={[
            { label: '小サイズ（〜60×60cm）', price: '¥8,000〜' },
            { label: '中サイズ（〜90×90cm）', price: '¥12,000〜' },
            { label: '大サイズ（掃き出し窓）', price: '¥21,000〜' },
            { label: '防犯ガラス', price: '¥55,000〜' },
          ]}
          badge="基本当日対応"
          featured
        />
        <ServiceCard
          to="/amido"
          image="/images/amido.png"
          alt="網戸の張り替え"
          icon="🪟"
          title="網戸の張り替え"
          bullets={[
            '猫が引っかいて穴が空いた',
            'たるんでピンと張れない',
            '花粉・防虫ネットに交換したい',
            'ロール網戸が壊れた',
          ]}
          cta="1枚から！採寸・張替・取付まで一括対応"
          prices={[
            { label: '小サイズ（〜90×90cm）', price: '¥3,500〜' },
            { label: '中サイズ（〜90×180cm）', price: '¥4,500〜' },
            { label: '大サイズ（掃き出し窓）', price: '¥6,500〜' },
            { label: '花粉対策ネット', price: '¥5,500〜' },
          ]}
          badge="基本当日対応"
          featured
        />
        <ServiceCard
          to="/sash"
          image="/images/sash.png"
          alt="窓の動き修理"
          icon="⚙️"
          title="窓の動き修理・サッシ調整"
          bullets={[
            '窓が重くてスムーズに開かない',
            '窓が閉まりきらない・すき間がある',
            'クレセント錠（窓の鍵）が壊れた',
            '戸車（ローラー）が壊れた',
          ]}
          cta="調整のみで直ることも多く！まず相談を"
          prices={[
            { label: '建付け調整・動き改善', price: '無料〜', free: true },
            { label: '戸車（ローラー）交換', price: '¥6,000〜' },
            { label: 'クレセント錠交換', price: '¥5,000〜' },
            { label: 'ゴムパッキン交換', price: '¥8,000〜' },
          ]}
          badge="基本当日対応"
        />
        <ServiceCard
          to="/kagi"
          image="/images/kagi.png"
          alt="鍵の取替・修理"
          icon="🔐"
          title="鍵の取替・修理"
          bullets={[
            '玄関の鍵が固くなった・回りにくい',
            'もっと防犯性の高い鍵に交換したい',
            '補助錠を追加して防犯強化したい',
            '窓・サッシの鍵が壊れた',
          ]}
          cta="家族を守る、防犯錠への交換もお任せ"
          prices={[
            { label: '玄関鍵の修理・調整', price: '¥8,000〜' },
            { label: '玄関鍵交換（一般錠）', price: '¥15,000〜' },
            { label: '玄関鍵交換（ディンプル錠）', price: '¥25,000〜' },
            { label: '補助錠の取り付け', price: '¥12,000〜' },
          ]}
          badge="基本当日対応"
        />
      </div>

      {/* その他サービス */}
      <div className="other-title">▼ その他のサービスはこちら</div>
      <div className="other-services">
        <Link to="/shoji" className="other-btn">
          <img src="/images/shoji.png" alt="障子・襖の張替" className="other-img" />
          <div>
            <div className="oth-name">障子・襖の張替</div>
            <div className="oth-sub">障子¥4,900〜 ／ 襖¥7,500〜 まとめ割あり</div>
          </div>
          <div className="oth-arrow">›</div>
        </Link>
        <Link to="/yushitsu" className="other-btn">
          <div className="oth-icon">🚿</div>
          <div>
            <div className="oth-name">浴室ドア交換</div>
            <div className="oth-sub">簡易カバー工法・工期最短1日 ¥30,000〜</div>
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

      {/* ナビリンクバー */}
      <nav className="nav-links-bar">
        <Link to="/price" className="nav-link-item">💴 料金一覧</Link>
        <Link to="/area" className="nav-link-item">🗺️ エリア</Link>
        <Link to="/faq" className="nav-link-item">❓ よくある質問</Link>
        <Link to="/works" className="nav-link-item">🏗️ 施工実績</Link>
        <Link to="/compare" className="nav-link-item">⚖️ 業者比較</Link>
      </nav>

      {/* 悪徳業者注意（コンパクト版） */}
      <div className="warn-note">
        <div className="warn-note-title">⚠️ 格安業者にご注意ください</div>
        <p>「0円・格安」と宣伝しながら、作業後に高額な部材費・出張費を請求するトラブルが増えています。当店は<strong>見積もり完全無料・込み込み価格</strong>で追加料金は一切発生しません。50年の信頼と明朗会計でご安心ください。</p>
      </div>

      {/* 選ばれる理由 */}
      <div className="sec-title">
        <span className="en">Why Choose Us</span>
        <h2>選ばれる3つの理由</h2>
      </div>
      <div className="strengths">
        <div className="str-item">
          <div className="str-icon">⚡</div>
          <div>
            <h4>問屋直結・スピード対応</h4>
            <p>ガラスや部材を問屋から直接仕入れるため中間コストなし。在庫豊富で基本当日完了が可能です。</p>
          </div>
        </div>
        <div className="str-item">
          <div className="str-icon">🏠</div>
          <div>
            <h4>創業50年・地元川口の信頼</h4>
            <p>川口市で50年。地元の皆さまに育てていただいた実績と信頼が誇り。リピーター・ご紹介多数。</p>
          </div>
        </div>
        <div className="str-item">
          <div className="str-icon">💬</div>
          <div>
            <h4>何でも相談OK・見積無料</h4>
            <p>「ガラス1枚だけ…」でも大歓迎。小さな修理から大きな工事まで、まずはお気軽にどうぞ。</p>
          </div>
        </div>
      </div>

      {/* 口コミ */}
      <section className="reviews-bg">
        <div className="sec-title" style={{ paddingTop: '10px' }}>
          <span className="en">Customer Voice</span>
          <h2>お客様の声（全37件）</h2>
        </div>
        <div className="reviews-visible">
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
            <div className="review-text">内窓（二重窓）を設置してもらいました。冬の結露がなくなり、暖房効率も上がって大満足。価格もリーズナブルでした。</div>
            <div className="review-from">足立区 / 40代女性</div>
          </div>
        </div>
        <div className={`reviews-hidden${reviewsOpen ? ' open' : ''}`}>
          {[
            { s: '★★★★★', t: '急に鍵が壊れて困っていたところ、当日夕方に来ていただいて助かりました。丁寧な説明で安心してお任せできました。', f: '川口市 / 30代女性' },
            { s: '★★★★☆', t: '障子の張り替えをお願いしました。手際よく、仕上がりもとてもきれいで和室が明るくなりました。', f: 'さいたま市 / 70代男性' },
            { s: '★★★★★', t: '網戸2枚を張り替えていただきました。以前より張りがあってパリッとしています。気持ちいいです！', f: '蕨市 / 40代女性' },
            { s: '★★★★★', t: '他の業者に断られたサイズのガラスも対応してくれました。こんなにすぐ直るとは思いませんでした。', f: '草加市 / 50代男性' },
            { s: '★★★★★', t: '玄関ドアの鍵が固くなっていたのを修理してもらいました。スムーズになって毎日快適です。', f: '北区 / 60代女性' },
            { s: '★★★★☆', t: '防犯ガラスへの交換を検討していて相談したところ、親身になって提案してくれました。仕上がりも満足です。', f: '足立区 / 40代男性' },
            { s: '★★★★★', t: '朝早くから来てくれて、思っていたより短時間で終わりました。価格も相場より安く感じました。', f: '板橋区 / 50代女性' },
            { s: '★★★★★', t: '引き違い窓が重くなっていて困っていました。戸車の交換で見違えるように軽くなりました！', f: '越谷市 / 30代男性' },
            { s: '★★★★★', t: '台風でガラスが割れた翌日に来てもらえました。迅速な対応に本当に助かりました。ありがとうございます。', f: '川口市 / 60代女性' },
            { s: '★★★★★', t: '見積もりが明確で、追加料金もなし。こういう昔ながらの誠実な職人さんが近くにいてよかったです。', f: 'さいたま市 / 40代女性' },
            { s: '★★★★☆', t: 'ふすまの張り替えをお任せしました。選べる柄も多く、和室の雰囲気がガラッと変わりました。', f: '川口市 / 70代女性' },
            { s: '★★★★★', t: '網戸を1枚だけ頼むのは気が引けていましたが、快く来てくれました。次回もお願いしたいです。', f: '蕨市 / 50代男性' },
            { s: '★★★★★', t: '内窓の設置をお願いしました。冬の冷気がほとんど入ってこなくなり、暖房代も節約できています。', f: '北区 / 40代夫婦' },
            { s: '★★★★★', t: '電話してから1時間以内に来てくれました。ガラス交換も丁寧で、散らかったガラス片も全部片付けてくれました。', f: '足立区 / 30代女性' },
            { s: '★★★★★', t: '窓が閉まりきらなくなっていて、防犯が心配でした。すぐ修理してくれて安心して眠れるようになりました。', f: '川口市 / 40代男性' },
            { s: '★★★★★', t: '子どもがガラスを割ってしまって焦りましたが、落ち着いて対応してくれました。安心感が違います。', f: 'さいたま市 / 30代女性' },
            { s: '★★★★☆', t: '玄関周りの鍵を防犯性の高いものに交換しました。説明が丁寧でわかりやすく安心してお任せできました。', f: '越谷市 / 50代女性' },
            { s: '★★★★★', t: '夜間に連絡したのに翌朝一番で来てくれました。仕事も速くて丁寧。本当に助かりました。', f: '板橋区 / 40代男性' },
            { s: '★★★★★', t: '何度もリピートしています。いつも感じよく対応してくれて、価格も良心的。信頼できる地元の職人さんです。', f: '川口市 / 60代男性' },
            { s: '★★★★★', t: '障子と網戸の両方をまとめてやってもらいました。家全体がきれいになった気分です。', f: '草加市 / 50代女性' },
            { s: '★★★★★', t: '土曜日に急に依頼したのに快く来てくれました。休日でも嫌な顔ひとつせず助かりました。', f: 'さいたま市 / 50代男性' },
            { s: '★★★★★', t: '引き戸の戸車が壊れて動かなくなっていました。部品も持ってきてくれてその場で解決。プロです！', f: '川口市 / 40代女性' },
            { s: '★★★★☆', t: 'インターネットで安い業者を探していたのですが、地元のお店に頼んで正解でした。アフターも安心です。', f: '北区 / 30代男性' },
            { s: '★★★★★', t: 'ガラスが結露でカビだらけになっていたので内窓を勧めてもらいました。設置後は結露ゼロ。感動しました。', f: '蕨市 / 40代女性' },
            { s: '★★★★★', t: 'お父様の代からお世話になっています。息子さんも同じく誠実で技術も確か。これからも頼ります。', f: '川口市 / 70代女性' },
            { s: '★★★★★', t: 'ガラスのひびが気になっていたのを放置していましたが、相談したらすぐ来てくれました。早めに頼んでよかったです。', f: '足立区 / 50代男性' },
            { s: '★★★★★', t: '網戸の穴をふさいでもらいました。新品のように張り替えていただいて虫も入らなくなりました！', f: '越谷市 / 30代女性' },
            { s: '★★★★★', t: '玄関ドアの鍵が壊れて帰宅できなくなるところでした。夜遅くに連絡しても対応してくれて本当に助かりました。', f: '川口市 / 30代男性' },
            { s: '★★★★☆', t: '窓の開閉が重くなっていて相談しました。戸車交換で劇的に改善。さすがプロです。', f: 'さいたま市 / 50代女性' },
            { s: '★★★★★', t: '以前ネットの格安業者に頼んだら後で高額請求されました。宮口さんは見積もりがきちんとしていて安心でした。', f: '板橋区 / 40代女性' },
            { s: '★★★★★', t: '近所に住んでいるので何かあれば宮口さんと決めています。どんな小さなことでも相談できるのが一番です。', f: '川口市 / 60代女性' },
            { s: '★★★★★', t: '祝日に急なガラス割れが起きてしまいましたが、電話したらすぐ対応してもらえました。頼れる存在です。', f: '草加市 / 40代男性' },
            { s: '★★★★★', t: '内窓の施工をしてもらいましたが、音もかなり静かになりました。道路沿いで悩んでいたのが解決しました！', f: '足立区 / 30代夫婦' },
            { s: '★★★★★', t: '初めてお願いしたのですが、職人さんが丁寧で信頼できる方でした。また何かあればお願いしたいです。', f: '蕨市 / 60代男性' },
          ].map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">{r.s}</div>
              <div className="review-text">{r.t}</div>
              <div className="review-from">{r.f}</div>
            </div>
          ))}
        </div>
        <button className="show-more-btn" onClick={() => setReviewsOpen(p => !p)}>
          {reviewsOpen ? '▲ 閉じる' : '▼ 残りの口コミを全部見る（34件）'}
        </button>
      </section>

      {/* FAQ */}
      <section className="home-faq-section">
        <div className="home-preview-header">
          <div className="sec-title" style={{ paddingTop: '6px', marginBottom: 0 }}>
            <span className="en">FAQ</span>
            <h2>よくあるご質問</h2>
          </div>
          <Link to="/faq" className="home-preview-link">すべて見る →</Link>
        </div>
        <div className="home-faq-list">
          <details className="home-faq-item">
            <summary>❓ 川口市でガラスが割れた。当日来てもらえますか？</summary>
            <p>はい、基本的に<strong>当日対応</strong>しております。川口市木曽呂を拠点に、川口市全域・さいたま市・蕨市・東京都内へ迅速に駆けつけます。まずはお電話ください。</p>
          </details>
          <details className="home-faq-item">
            <summary>❓ 見積もりは無料？追加料金は？</summary>
            <p><strong>見積もりは完全無料</strong>です。追加料金が発生する場合は<strong>必ず作業前にご説明・ご了承</strong>をいただきます。後から上乗せは一切しません。</p>
          </details>
          <details className="home-faq-item">
            <summary>❓ 網戸1枚・ガラス1枚だけでも来てもらえますか？</summary>
            <p>もちろんです。<strong>1枚から</strong>お伺いしています。「こんな小さなことで…」という遠慮は不要です。50年間ずっと地域に寄り添ってきました。</p>
          </details>
        </div>
        <Link to="/faq" className="show-more-btn" style={{ display: 'block', textDecoration: 'none', textAlign: 'center' }}>
          ❓ よくある質問をもっと見る（全20問）
        </Link>
      </section>

      {/* 施工実績プレビュー */}
      <section className="home-preview-section">
        <div className="home-preview-header">
          <div className="sec-title" style={{ marginBottom: 0 }}>
            <span className="en">Works</span>
            <h2>🏗️ 施工実績</h2>
          </div>
          <Link to="/works" className="home-preview-link">一覧を見る →</Link>
        </div>
        <div className="works-preview-cards">
          <div className="works-preview-card">
            <span className="works-tag">ガラス修理</span>
            <p>川口市 ／ 子どもが割った透明ガラスを電話から1時間で当日交換<span className="works-result-note">¥12,000（込み込み）</span></p>
          </div>
          <div className="works-preview-card">
            <span className="works-tag">網戸張替</span>
            <p>さいたま市 ／ 猫が穴を開けた3枚を花粉対策ネットに張替え<span className="works-result-note">¥16,500（3枚・込み込み）</span></p>
          </div>
          <div className="works-preview-card">
            <span className="works-tag">内窓設置</span>
            <p>足立区 ／ 道路沿いの騒音・結露が内窓設置で解決。補助金も活用<span className="works-result-note">工期1日</span></p>
          </div>
        </div>
        <Link to="/works" className="show-more-btn" style={{ display: 'block', textDecoration: 'none', textAlign: 'center' }}>
          🏗️ 施工実績をもっと見る
        </Link>
      </section>

      {/* Googleマップ誘導 + 協力業者（コンパクト） */}
      <div className="bottom-info">
        <div className="gmap-block">
          <div className="gmap-title">🗺️「宮口板硝子」で検索！</div>
          <p>Googleマップでも口コミ・営業時間・地図を確認できます。</p>
        </div>
        <div className="partner-block">
          <div className="partner-block-title">🏠 住まいのご相談、何でもどうぞ</div>
          <p>地元の<span className="partner-red">協力業者</span>をご紹介可能です。窓以外のことも宮口へ！</p>
          <div className="partner-tags">
            <span className="ptag">大工</span>
            <span className="ptag">水道・水漏れ</span>
            <span className="ptag">外壁塗装</span>
            <span className="ptag">屋根工事</span>
            <span className="ptag">クロス張替</span>
          </div>
        </div>
      </div>

      <Footer showAreaTags />
    </PageLayout>
  );
}
