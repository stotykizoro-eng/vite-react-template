import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Amido() {
  return (
    <PageLayout>
      <MetaTags
        title="網戸の張り替え｜宮口板硝子 川口市 1枚から対応"
        description="川口市の網戸張替専門。1枚から対応。猫の爪傷・穴・花粉対策ネットへの交換もおまかせ。見積無料。☎090-8563-7982"
        path="/amido"
      />
      <BackHome />

      <PageHero
        icon="🪟"
        title="網戸の張り替え"
        sub="1枚から対応。猫の爪傷・穴・たるみ・<br>花粉対策ネットへの交換もおまかせ"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">🐱</span><span>猫が引っかいて穴が空いた</span></div>
          <div className="scene-item"><span className="s-icon">🕳️</span><span>穴が空いて虫が入ってくる</span></div>
          <div className="scene-item"><span className="s-icon">💨</span><span>たるんでピンと張れない・閉まらない</span></div>
          <div className="scene-item"><span className="s-icon">🌸</span><span>花粉症対策・防虫ネットに交換したい</span></div>
          <div className="scene-item"><span className="s-icon">🌀</span><span>ロール網戸が壊れた</span></div>
          <div className="scene-item"><span className="s-icon">🏠</span><span>引っ越し前後にまとめて張り替えたい</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 網戸張り替えの料金目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🪟 一般網（標準ネット）</div>
        <table className="price-table">
          <tbody>
            <tr><td>小サイズ（〜90×90cm）</td><td className="price">¥3,500〜</td></tr>
            <tr><td>中サイズ（〜90×180cm）</td><td className="price">¥4,500〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥6,500〜</td></tr>
            <tr className="note"><td colSpan={2}>※フレーム変形の場合は別途費用あり</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🌸 花粉対策・防虫ネット</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ</td><td className="price">¥5,500〜</td></tr>
            <tr><td>大サイズ（掃き出し）</td><td className="price">¥9,500〜</td></tr>
            <tr className="note"><td colSpan={2}>※メッシュが細かく花粉・虫をしっかりブロック</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🌀 ロール網戸の張り替え</div>
        <table className="price-table">
          <tbody>
            <tr><td>ロール網戸（1枚）</td><td className="price">¥8,000〜</td></tr>
          </tbody>
        </table>
      </div>

      <KomikomiBadge note="枚数が多いほどお得になります。まとめてご依頼の場合はぜひご相談ください。" />

      <div className="sec-title-sm">
        <span className="en">FAQ</span>
        <h2>よくあるご質問</h2>
      </div>
      <div className="faq-section">
        <details className="faq-item">
          <summary>1枚だけでも来てもらえますか？</summary>
          <p>もちろんです。網戸1枚・ガラス1枚からお伺いしています。「こんな小さなことで…」という遠慮は不要です。50年間ずっと地域に寄り添ってきました。</p>
        </details>
        <details className="faq-item">
          <summary>当日対応できますか？</summary>
          <p>基本的に当日対応しております。ただし部材在庫や混み具合により翌日以降になる場合もございます。まずはお電話でご確認ください。</p>
        </details>
        <details className="faq-item">
          <summary>花粉対策ネットとは何ですか？</summary>
          <p>通常より目の細かいメッシュで、花粉・虫・ほこりの侵入を大幅に減らすネットです。春の花粉シーズン前にご注文いただくお客様が多いです。</p>
        </details>
      </div>

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
