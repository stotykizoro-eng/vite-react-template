import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Price() {
  return (
    <PageLayout>
      <MetaTags
        title="料金一覧｜川口市ガラス修理・網戸張替の込々価格｜宮口板硝子"
        description="宮口板硝子の料金一覧。ガラス修理・網戸張替・サッシ調整・鍵交換・障子・浴室ドアすべて出張費・作業費込みの込々価格です。見積無料。☎090-8563-7982"
        path="/price"
      />
      <BackHome />

      <PageHero
        icon="💴"
        title="料金一覧"
        sub="すべて出張費・作業費・消費税込みの<br>込々価格でご提示します"
      />

      <KomikomiBadge />

      {/* アンカーナビ */}
      <nav className="price-service-nav">
        <a href="#glass" className="price-nav-item">🔧 ガラス修理</a>
        <a href="#amido" className="price-nav-item">🪟 網戸張替</a>
        <a href="#sash" className="price-nav-item">🔩 サッシ調整</a>
        <a href="#kagi" className="price-nav-item">🔑 鍵交換</a>
        <a href="#shoji" className="price-nav-item">🏯 障子・襖</a>
        <a href="#yushitsu" className="price-nav-item">🚿 浴室ドア</a>
        <a href="#bohan" className="price-nav-item">🛡️ 防犯・内窓</a>
      </nav>

      {/* ガラス修理・交換 */}
      <span id="glass" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Glass Repair</span>
        <h2>🔧 ガラス修理・交換</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">透明ガラス（フロートガラス）</div>
        <table className="price-table">
          <tbody>
            <tr><td>小サイズ（〜90×90cm）</td><td className="price">¥8,000〜</td></tr>
            <tr><td>中サイズ（〜90×180cm）</td><td className="price">¥12,000〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥21,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※小さなひびや欠け補修は別途ご相談</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">すりガラス・型ガラス</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ（〜90×180cm）</td><td className="price">¥14,000〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥20,000〜</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">網入りガラス</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ（〜90×180cm）</td><td className="price">¥22,000〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥32,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※防火地域・準防火地域での交換にも対応</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">ペアガラス（複層ガラス）</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ（〜90×180cm）</td><td className="price">¥35,000〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥55,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※結露・断熱対策に最適。補助金対象になる場合あり</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">防犯ガラス</div>
        <table className="price-table">
          <tbody>
            <tr><td>小〜中サイズ</td><td className="price">¥35,000〜</td></tr>
            <tr><td>大サイズ・掃き出し</td><td className="price">¥55,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※セキュリティ対策として国土交通省推奨品も取扱</td></tr>
          </tbody>
        </table>
      </div>

      {/* 網戸張替 */}
      <span id="amido" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Screen Door</span>
        <h2>🪟 網戸張替え</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">一般網（標準ネット）</div>
        <table className="price-table">
          <tbody>
            <tr><td>小サイズ（〜90×90cm）</td><td className="price">¥3,500〜</td></tr>
            <tr><td>中サイズ（〜90×180cm）</td><td className="price">¥4,500〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥6,500〜</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">機能性ネット</div>
        <table className="price-table">
          <tbody>
            <tr><td>花粉対策ネット（中）</td><td className="price">¥5,500〜</td></tr>
            <tr><td>花粉対策ネット（大）</td><td className="price">¥7,500〜</td></tr>
            <tr><td>ロール網戸（張替え）</td><td className="price">¥15,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※猫対策ネット・防虫ネット・UVカットネットも対応</td></tr>
          </tbody>
        </table>
      </div>

      {/* サッシ調整 */}
      <span id="sash" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Sash Repair</span>
        <h2>🔩 サッシ調整・修理</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">サッシ・窓の修理</div>
        <table className="price-table">
          <tbody>
            <tr><td>建付け調整（窓の開閉改善）</td><td className="price">¥3,000〜</td></tr>
            <tr><td>戸車交換（1か所）</td><td className="price">¥6,000〜</td></tr>
            <tr><td>クレセント錠交換</td><td className="price">¥5,000〜</td></tr>
            <tr><td>ゴムパッキン交換（1面）</td><td className="price">¥8,000〜</td></tr>
            <tr><td>アルミサッシ交換（カバー工法）</td><td className="price">¥60,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※状況により現地確認が必要な場合があります</td></tr>
          </tbody>
        </table>
      </div>

      {/* 鍵交換 */}
      <span id="kagi" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Lock Exchange</span>
        <h2>🔑 鍵交換・修理</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">鍵交換・修理</div>
        <table className="price-table">
          <tbody>
            <tr><td>鍵修理・調整</td><td className="price">¥8,000〜</td></tr>
            <tr><td>鍵交換（一般錠）</td><td className="price">¥15,000〜</td></tr>
            <tr><td>鍵交換（ディンプルキー）</td><td className="price">¥25,000〜</td></tr>
            <tr><td>補助錠取り付け</td><td className="price">¥12,000〜</td></tr>
            <tr><td>窓・サッシの鍵交換</td><td className="price">¥5,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※メーカー取り寄せが必要な場合、別途お時間をいただきます</td></tr>
          </tbody>
        </table>
      </div>

      {/* 障子・襖 */}
      <span id="shoji" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Shoji / Fusuma</span>
        <h2>🏯 障子・襖の張替え</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">障子・襖の張替え</div>
        <table className="price-table">
          <tbody>
            <tr><td>障子（1枚）</td><td className="price">¥4,900〜</td></tr>
            <tr><td>障子（2枚以上）</td><td className="price">¥4,200〜/枚</td></tr>
            <tr><td>雪見障子（1枚）</td><td className="price">¥6,500〜</td></tr>
            <tr><td>襖（1枚）</td><td className="price">¥7,500〜</td></tr>
            <tr><td>襖（2枚以上）</td><td className="price">¥6,800〜/枚</td></tr>
            <tr className="note"><td colSpan={2}>※和紙・デザイン紙など素材により変動します。まとめ依頼で割引あり</td></tr>
          </tbody>
        </table>
      </div>

      {/* 浴室ドア */}
      <span id="yushitsu" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Bathroom Door</span>
        <h2>🚿 浴室ドア交換</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">浴室ドア・折り戸交換</div>
        <table className="price-table">
          <tbody>
            <tr><td>折り戸交換（カバー工法）</td><td className="price">¥30,000〜</td></tr>
            <tr><td>引き戸交換（カバー工法）</td><td className="price">¥35,000〜</td></tr>
            <tr><td>ガラスパネル交換</td><td className="price">¥15,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※カバー工法のためタイル・壁の工事不要。1日で完工</td></tr>
          </tbody>
        </table>
      </div>

      {/* 防犯・内窓 */}
      <span id="bohan" className="price-section-anchor" />
      <div className="sec-title-sm">
        <span className="en">Security / Inner Window</span>
        <h2>🛡️ 防犯対策・内窓設置</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">防犯・内窓・フィルム</div>
        <table className="price-table">
          <tbody>
            <tr><td>内窓設置（小窓・〜90×90cm）</td><td className="price">¥40,000〜</td></tr>
            <tr><td>内窓設置（腰高・〜90×120cm）</td><td className="price">¥55,000〜</td></tr>
            <tr><td>内窓設置（掃き出し窓）</td><td className="price">¥75,000〜</td></tr>
            <tr><td>防犯フィルム貼り（1面）</td><td className="price">¥12,000〜</td></tr>
            <tr><td>面格子取り付け（1か所）</td><td className="price">¥18,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※内窓設置は省エネ補助金（最大20万円）の対象になる場合があります</td></tr>
          </tbody>
        </table>
      </div>

      <div className="warn-box" style={{ margin: '0 14px 20px' }}>
        ※上記はすべて出張費・作業費・材料費・消費税を含む込み込み価格の目安です。<br />
        現場の状況・ガラスのサイズ・素材により変動することがあります。<br />
        <strong>無料見積もり後に金額をご確認いただいてからの施工です。</strong>
      </div>

      <ContactForm introText="メールで無料見積もりを依頼する" />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
