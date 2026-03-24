import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
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
        <div className="header-logo">有限会社</div>
        <div className="header-name">宮口板硝子</div>
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
        <Link to="/glass" className="svc-btn featured">
          <img src="/images/glass.png" alt="ガラス修理・交換" className="svc-img" />
          <div className="svc-body">
            <div className="svc-name">ガラス修理・交換</div>
            <div className="svc-price">¥8,000〜</div>
            <div className="svc-badge-red">⚡ 基本当日対応</div>
          </div>
        </Link>
        <Link to="/amido" className="svc-btn featured">
          <img src="/images/amido.png" alt="網戸の張り替え" className="svc-img" />
          <div className="svc-body">
            <div className="svc-name">網戸の張り替え</div>
            <div className="svc-price">¥3,500〜</div>
            <div className="svc-badge-red">⚡ 基本当日対応</div>
          </div>
        </Link>
        <Link to="/sash" className="svc-btn">
          <img src="/images/sash.png" alt="窓の動き修理" className="svc-img" />
          <div className="svc-body">
            <div className="svc-name">窓の動き修理</div>
            <div className="svc-price">調整のみ無料〜</div>
            <div className="svc-badge-red">⚡ 基本当日対応</div>
          </div>
        </Link>
        <Link to="/kagi" className="svc-btn">
          <img src="/images/kagi.png" alt="鍵の取替・修理" className="svc-img" />
          <div className="svc-body">
            <div className="svc-name">鍵の取替・修理</div>
            <div className="svc-price">¥8,000〜</div>
            <div className="svc-badge-red">⚡ 基本当日対応</div>
          </div>
        </Link>
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
            <div className="oth-sub">簡易カバー工法・工期最短1日</div>
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

      {/* 悪徳業者比較 */}
      <div className="compare-bad">
        <h2>🚨 悪徳・格安業者にご注意ください</h2>
        <div className="compare-scroll">
          <table className="ctable">
            <thead>
              <tr>
                <th>チェックポイント</th>
                <th className="col-us-head">宮口板硝子</th>
                <th>ネット格安業者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>見積もり</td><td className="col-us"><span className="cg">◎</span><br /><small>完全無料</small></td><td><span className="cm">要注意</span><br /><small>後から追加料金</small></td></tr>
              <tr><td>料金の透明性</td><td className="col-us"><span className="cg">◎</span><br /><small>作業前に明示</small></td><td><span className="cb">✕</span><br /><small>作業後に高額請求</small></td></tr>
              <tr><td>部材の品質</td><td className="col-us"><span className="cg">◎</span><br /><small>問屋直結・正規品</small></td><td><span className="cm">△</span><br /><small>粗悪品の場合あり</small></td></tr>
              <tr><td>アフターケア</td><td className="col-us"><span className="cg">◎</span><br /><small>地元なのでいつでも</small></td><td><span className="cb">✕</span><br /><small>連絡が取れなくなる</small></td></tr>
              <tr><td>対応の速さ</td><td className="col-us"><span className="cg">◎</span><br /><small>基本当日対応</small></td><td><span className="cm">△</span><br /><small>実際は数日かかる</small></td></tr>
              <tr><td>小さな修理</td><td className="col-us"><span className="cg">◎</span><br /><small>1枚からOK</small></td><td><span className="cb">✕</span><br /><small>断られることも</small></td></tr>
            </tbody>
          </table>
        </div>
        <div className="cnote">⚠️ <strong>こんな業者にご注意を！</strong><br />「0円・格安」と宣伝しながら作業後に高額な部材費・出張費を請求するトラブルが増えています。創業50年の専門店なら、<strong>見積もりから作業完了まで安心・明朗会計</strong>でご対応します。</div>
      </div>

      {/* 3社比較 */}
      <div className="sec-title">
        <span className="en">vs Other Services</span>
        <h2>🏆 他サービスとの比較</h2>
      </div>
      <div className="compare3">
        <p>「どこに頼めばいいか」迷ったら、この表をご確認ください。</p>
        <div className="c3wrap">
          <table className="c3table">
            <thead>
              <tr>
                <th className="c3item">確認ポイント</th>
                <th className="c3us">宮口板硝子<small>創業50年</small></th>
                <th>くらしの<br />マーケット</th>
                <th>ホームセンター<br />修理チェーン</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>対応の速さ</td><td className="c3us"><span className="c3g">◎</span><span className="c3n">基本当日</span></td><td><span className="c3m">△</span><span className="c3n">数日〜1週間</span></td><td><span className="c3m">△</span><span className="c3n">予約制</span></td></tr>
              <tr><td>1枚から対応</td><td className="c3us"><span className="c3g">◎</span><span className="c3n">1枚からOK</span></td><td><span className="c3m">△</span><span className="c3n">業者による</span></td><td><span className="c3b">✕</span><span className="c3n">最低料金高め</span></td></tr>
              <tr><td>料金の明確さ</td><td className="c3us"><span className="c3g">◎</span><span className="c3n">明朗会計</span></td><td><span className="c3m">△</span><span className="c3n">業者差大きい</span></td><td><span className="c3g">○</span><span className="c3n">定価あり</span></td></tr>
              <tr><td>アフターケア</td><td className="c3us"><span className="c3g">◎</span><span className="c3n">地元・すぐ来れる</span></td><td><span className="c3b">✕</span><span className="c3n">連絡取れないことも</span></td><td><span className="c3m">△</span><span className="c3n">店舗経由で遅い</span></td></tr>
              <tr><td>土日祝・夜間</td><td className="c3us"><span className="c3g">◎</span><span className="c3n">臨機応変対応</span></td><td><span className="c3m">△</span><span className="c3n">業者による</span></td><td><span className="c3b">✕</span><span className="c3n">基本平日のみ</span></td></tr>
            </tbody>
          </table>
        </div>
        <div className="c3note">💡 <strong>地元専門店だからこそできること</strong>がある。50年の信頼と問屋直結の価格で、どこよりも素早く・丁寧に対応します。</div>
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

      {/* 施工事例 */}
      <section className="case-section">
        <div className="sec-title" style={{ paddingTop: '6px' }}>
          <span className="en">Case Studies</span>
          <h2>施工事例・よくあるご相談</h2>
        </div>
        <p className="case-intro">川口市・さいたま市・東京都内での実際の施工事例をご紹介します</p>
        <div className="case-list">
          <div className="case-card case-red">
            <h3>🔧 川口市木曽呂・赤山エリア｜ガラス修理の施工事例</h3>
            <p><strong>【ご相談内容】</strong>強風で窓ガラスにひびが入り、子どもがいるので早く直したい。<br /><strong>【施工内容】</strong>現地確認後、同日中に普通ガラスから飛散防止フィルム入りガラスへ交換。<br /><strong>【お客様の声】</strong>「電話してから2時間で来てくれた。料金も明確で安心した」</p>
          </div>
          <div className="case-card case-blue">
            <h3>🚿 川口市安行・新郷エリア｜浴室ドア交換の施工事例</h3>
            <p><strong>【ご相談内容】</strong>浴室のドアが固くて動かない、すき間から冷気が入ってくる。カビも気になっていた。<br /><strong>【施工内容】</strong>既存枠をそのまま活かした簡易カバー工法でドアを交換。工期1日・約4時間で完了。<br /><strong>【お客様の声】</strong>「こんなに早く終わると思わなかった。新品同様でうれしい」</p>
          </div>
          <div className="case-card case-yellow">
            <h3>🪟 さいたま市・草加市・越谷市エリア｜網戸・ペアガラス交換</h3>
            <p><strong>【ご相談内容】</strong>網戸が破れて虫が入る・結露がひどいのでペアガラスに変えたい。<br /><strong>【施工内容】</strong>網戸の張替（4枚）と、リビング窓をペアガラスへ交換。断熱効果で冬の光熱費削減にもつながるとご好評。<br /><strong>【お客様の声】</strong>「さいたま市からでも来てくれて助かった。まとめてやってもらえて効率的」</p>
          </div>
          <div className="case-card case-green">
            <h3>🏠 東京都（北区・足立区・板橋区）｜賃貸物件のガラス修理</h3>
            <p><strong>【ご相談内容】</strong>賃貸アパートの管理会社から連絡。入居者退去後にガラスにひびが発見された。<br /><strong>【施工内容】</strong>管理会社宛に見積書を発行し、オーナー確認後に修理。都内賃貸物件からのご依頼も多数対応実績あり。<br /><strong>【お客様の声】</strong>「見積書をすぐ出してもらえたので管理会社にすぐ提出できた」</p>
          </div>
        </div>
      </section>

      {/* エリア別SEOセクション */}
      <section className="area-seo-section">
        <div className="sec-title" style={{ paddingTop: '6px' }}>
          <span className="en">Local SEO</span>
          <h2>川口市・近隣エリアのガラス修理・各種サービス</h2>
        </div>
        <div className="area-seo-grid">
          <div className="area-seo-card">
            <h3>川口市 ガラス修理・交換</h3>
            <p>木曽呂・赤山・安行・新郷・芝・戸塚・南平・青木・飯塚・東川口ほか川口市全域対応</p>
          </div>
          <div className="area-seo-card">
            <h3>川口市 網戸張替</h3>
            <p>1枚から対応。採寸・張替・取付まで一括。川口市全域・出張費込み</p>
          </div>
          <div className="area-seo-card">
            <h3>川口市 浴室ドア交換</h3>
            <p>簡易カバー工法で工期最短1日。固い・すき間・カビなどお困りの方へ</p>
          </div>
          <div className="area-seo-card">
            <h3>川口市 ペアガラス交換</h3>
            <p>複層ガラス・断熱ガラスへの交換。結露・防音・省エネ対策に</p>
          </div>
          <div className="area-seo-card">
            <h3>さいたま市・草加市・越谷市 ガラス修理</h3>
            <p>川口市周辺エリアへも出張対応。まずはお電話ください</p>
          </div>
          <div className="area-seo-card">
            <h3>北区・足立区・板橋区 ガラス修理</h3>
            <p>東京都内も対応。賃貸物件・管理会社からのご依頼も歓迎</p>
          </div>
        </div>
      </section>

      {/* 対応エリア詳細 */}
      <section className="service-area-section">
        <div className="sec-title" style={{ paddingTop: '6px' }}>
          <span className="en">Service Area</span>
          <h2>対応エリア詳細</h2>
        </div>
        <p className="area-intro">川口市木曽呂を拠点に、<strong>埼玉県・東京都内</strong>へ出張対応しています。<br />下記エリア以外もお気軽にご相談ください。</p>
        <div className="area-grid">
          <div className="area-card area-navy">
            <div className="area-card-title">📍 川口市内（全域）</div>
            <p>木曽呂・赤山・安行・新郷・芝・戸塚・東川口・南平・並木・青木・本町・飯塚・差間・中青木・舞台・里・仁志出・小谷場・辻・幸町 ほか全域</p>
          </div>
          <div className="area-card area-red">
            <div className="area-card-title">📍 川口市周辺</div>
            <p>さいたま市（浦和・大宮・見沼・岩槻区 等）・<strong>蕨市・越谷市・草加市</strong>・三郷市・八潮市・戸田市・鳩ヶ谷 ほか</p>
          </div>
          <div className="area-card area-blue area-full">
            <div className="area-card-title">📍 東京都内</div>
            <p>北区（赤羽・王子・田端 等）・足立区（西新井・綾瀬・竹ノ塚 等）・<strong>板橋区</strong>・荒川区・豊島区・文京区 ほか都内全般</p>
          </div>
        </div>
        <div className="area-note">
          上記以外のエリアもまずはお電話でご相談ください。<br />
          <strong>出張費込みの見積もりを無料でご提示します。</strong>
        </div>
      </section>

      {/* 口コミ */}
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
          <div className="review-text">内窓（二重窓）を設置してもらいました。冬の結露がなくなり、暖房効率も上がって大満足。価格もリーズナブルでした。</div>
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
            <div className="review-text">網戸2枚を張り替えていただきました。以前より張りがあってパリッとしています。気持ちいいです！</div>
            <div className="review-from">蕨市 / 40代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">他の業者に断られたサイズのガラスも対応してくれました。こんなにすぐ直るとは思いませんでした。</div>
            <div className="review-from">草加市 / 50代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">玄関ドアの鍵が固くなっていたのを修理してもらいました。スムーズになって毎日快適です。</div>
            <div className="review-from">北区 / 60代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <div className="review-text">防犯ガラスへの交換を検討していて相談したところ、親身になって提案してくれました。仕上がりも満足です。</div>
            <div className="review-from">足立区 / 40代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">朝早くから来てくれて、思っていたより短時間で終わりました。価格も相場より安く感じました。</div>
            <div className="review-from">板橋区 / 50代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">引き違い窓が重くなっていて困っていました。戸車の交換で見違えるように軽くなりました！</div>
            <div className="review-from">越谷市 / 30代男性</div>
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
            <div className="review-stars">★★★★☆</div>
            <div className="review-text">ふすまの張り替えをお任せしました。選べる柄も多く、和室の雰囲気がガラッと変わりました。</div>
            <div className="review-from">川口市 / 70代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">網戸を1枚だけ頼むのは気が引けていましたが、快く来てくれました。次回もお願いしたいです。</div>
            <div className="review-from">蕨市 / 50代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">内窓の設置をお願いしました。冬の冷気がほとんど入ってこなくなり、暖房代も節約できています。</div>
            <div className="review-from">北区 / 40代夫婦</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">電話してから1時間以内に来てくれました。ガラス交換も丁寧で、散らかったガラス片も全部片付けてくれました。</div>
            <div className="review-from">足立区 / 30代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">窓が閉まりきらなくなっていて、防犯が心配でした。すぐ修理してくれて安心して眠れるようになりました。</div>
            <div className="review-from">川口市 / 40代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">子どもがガラスを割ってしまって焦りましたが、落ち着いて対応してくれました。安心感が違います。</div>
            <div className="review-from">さいたま市 / 30代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <div className="review-text">玄関周りの鍵を防犯性の高いものに交換しました。説明が丁寧でわかりやすく安心してお任せできました。</div>
            <div className="review-from">越谷市 / 50代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">夜間に連絡したのに翌朝一番で来てくれました。仕事も速くて丁寧。本当に助かりました。</div>
            <div className="review-from">板橋区 / 40代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">何度もリピートしています。いつも感じよく対応してくれて、価格も良心的。信頼できる地元の職人さんです。</div>
            <div className="review-from">川口市 / 60代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">障子と網戸の両方をまとめてやってもらいました。家全体がきれいになった気分です。</div>
            <div className="review-from">草加市 / 50代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">土曜日に急に依頼したのに快く来てくれました。休日でも嫌な顔ひとつせず助かりました。</div>
            <div className="review-from">さいたま市 / 50代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">引き戸の戸車が壊れて動かなくなっていました。部品も持ってきてくれてその場で解決。プロです！</div>
            <div className="review-from">川口市 / 40代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <div className="review-text">インターネットで安い業者を探していたのですが、地元のお店に頼んで正解でした。アフターも安心です。</div>
            <div className="review-from">北区 / 30代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">ガラスが結露でカビだらけになっていたので内窓を勧めてもらいました。設置後は結露ゼロ。感動しました。</div>
            <div className="review-from">蕨市 / 40代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">お父様の代からお世話になっています。息子さんも同じく誠実で技術も確か。これからも頼ります。</div>
            <div className="review-from">川口市 / 70代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">ガラスのひびが気になっていたのを放置していましたが、相談したらすぐ来てくれました。早めに頼んでよかったです。</div>
            <div className="review-from">足立区 / 50代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">網戸の穴をふさいでもらいました。新品のように張り替えていただいて虫も入らなくなりました！</div>
            <div className="review-from">越谷市 / 30代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">玄関ドアの鍵が壊れて帰宅できなくなるところでした。夜遅くに連絡しても対応してくれて本当に助かりました。</div>
            <div className="review-from">川口市 / 30代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <div className="review-text">窓の開閉が重くなっていて相談しました。戸車交換で劇的に改善。さすがプロです。</div>
            <div className="review-from">さいたま市 / 50代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">以前ネットの格安業者に頼んだら後で高額請求されました。宮口さんは見積もりがきちんとしていて安心でした。</div>
            <div className="review-from">板橋区 / 40代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">近所に住んでいるので何かあれば宮口さんと決めています。どんな小さなことでも相談できるのが一番です。</div>
            <div className="review-from">川口市 / 60代女性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">祝日に急なガラス割れが起きてしまいましたが、電話したらすぐ対応してもらえました。頼れる存在です。</div>
            <div className="review-from">草加市 / 40代男性</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">内窓の施工をしてもらいましたが、音もかなり静かになりました。道路沿いで悩んでいたのが解決しました！</div>
            <div className="review-from">足立区 / 30代夫婦</div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-text">初めてお願いしたのですが、職人さんが丁寧で信頼できる方でした。また何かあればお願いしたいです。</div>
            <div className="review-from">蕨市 / 60代男性</div>
          </div>
        </div>
        <button
          className="show-more-btn"
          onClick={() => setReviewsOpen((prev) => !prev)}
        >
          {reviewsOpen ? '▲ 閉じる' : '▼ 残りの口コミを全部見る（34件）'}
        </button>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f0f4ff', padding: '16px 10px 20px', borderTop: '3px solid #3a5bd9' }}>
        <div className="sec-title" style={{ paddingTop: '6px' }}>
          <span className="en">FAQ</span>
          <h2>よくあるご質問</h2>
        </div>
        <div className="faq-section">
          <details className="faq-item">
            <summary>❓ 川口市でガラスが割れた。当日来てもらえますか？</summary>
            <p>はい、基本的に<strong>当日対応</strong>しております。川口市木曽呂を拠点に、川口市全域・さいたま市・蕨市・東京都内へ迅速に駆けつけます。まずはお電話ください。</p>
          </details>
          <details className="faq-item">
            <summary>❓ ガラス修理の費用の目安は？</summary>
            <p>一般的な窓ガラス1枚の交換は<strong>¥8,000〜</strong>が目安です。出張費・作業料・処分費・消費税をすべて含んだ<strong>込み込み価格</strong>でご提示します。まずは無料見積もりをどうぞ。</p>
          </details>
          <details className="faq-item">
            <summary>❓ 網戸1枚だけでも来てもらえますか？</summary>
            <p>もちろんです。<strong>網戸1枚・ガラス1枚から</strong>お伺いしています。小さなご依頼でも50年間変わらず地域に寄り添ってきました。</p>
          </details>
          <details className="faq-item">
            <summary>❓ 木曽呂・安行・赤山など川口市内なら来てもらえますか？</summary>
            <p>はい、<strong>川口市全域</strong>に対応しています。木曽呂・赤山・安行・新郷・芝・戸塚・東川口・南平・並木・青木・本町・飯塚など、川口市内はどこでもお伺い可能です。</p>
          </details>
          <details className="faq-item">
            <summary>❓ 見積もりは無料？あとで追加料金はかかりませんか？</summary>
            <p><strong>見積もりは完全無料</strong>です。追加料金が発生する場合は<strong>必ず作業前にご説明・ご了承</strong>をいただきます。後から上乗せは一切しません。</p>
          </details>
          <details className="faq-item">
            <summary>❓ 浴室ドア交換（簡易カバー工法）の費用はいくらですか？</summary>
            <p>既存の枠をそのまま活かして新しいドアを取り付ける工法です。大がかりな工事不要・工期最短1日で対応できます。費用はサイズ・種類により異なりますので、まずは<strong>無料見積もり</strong>をご利用ください。</p>
          </details>
          <details className="faq-item">
            <summary>❓ 賃貸物件でもガラス修理や窓の修理を依頼できますか？</summary>
            <p>はい、賃貸物件でも対応可能です。費用の負担が管理会社・オーナー側になる場合もありますので、事前に管理会社へご確認されることをおすすめします。<strong>見積書の発行も無料</strong>で行います。</p>
          </details>
          <details className="faq-item">
            <summary>❓ 夜間や早朝でも対応してもらえますか？</summary>
            <p>営業時間は<strong>7:30〜20:00（年中無休）</strong>です。ガラスが割れた・鍵がかからないなど緊急のお困りごとは、まずお電話でご相談ください。状況によって可能な限り対応いたします。</p>
          </details>
          <details className="faq-item">
            <summary>❓ ペアガラス（複層ガラス）の交換もできますか？</summary>
            <p>はい、対応可能です。断熱・防音・結露対策に効果的で、既存の窓枠をそのまま活かして交換できる場合も多く、まずは現地にて<strong>無料見積もり</strong>をいたします。</p>
          </details>
          <details className="faq-item">
            <summary>❓ さいたま市・草加市・越谷市・東京都内からも依頼できますか？</summary>
            <p>はい、お伺いしています。川口市を拠点に埼玉県全域・東京都内へ出張対応しております。まずはお電話でご相談ください。出張費込みの見積もりを無料でお出しします。</p>
          </details>
        </div>
      </section>

      {/* Googleマップ誘導 */}
      <div className="google-map-promo">
        <div className="gmap-sub">Googleマップでも検索できます</div>
        <div className="gmap-title">🗺️「宮口板硝子」で検索！</div>
        <p>口コミ・営業時間・地図は<br />Googleマップでも確認できます。<br />ぜひ口コミも投稿していただけると嬉しいです！</p>
      </div>

      {/* 協力業者 */}
      <div className="partner-section">
        <h3>🏠 住まいのご相談、何でもどうぞ！</h3>
        <p>地元密着の<span className="partner-red">協力業者</span>をご紹介可能です。<br />窓以外のことも、まずは宮口へ！</p>
        <div className="partner-tags">
          <span className="ptag">大工</span>
          <span className="ptag">水道・水漏れ</span>
          <span className="ptag">外壁塗装</span>
          <span className="ptag">屋根工事</span>
          <span className="ptag">クロス張替</span>
        </div>
      </div>

      <Footer showAreaTags />
    </PageLayout>
  );
}
