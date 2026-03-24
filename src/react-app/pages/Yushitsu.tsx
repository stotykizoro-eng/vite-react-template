import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Yushitsu() {
  return (
    <PageLayout>
      <BackHome />

      <PageHero
        icon="🚿"
        title="浴室ドア交換"
        sub="簡易カバー工法で工期最短1日！<br>大がかりな工事不要で新品に"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">💪</span><span>ドアが固くて開け閉めがしづらい</span></div>
          <div className="scene-item"><span className="s-icon">💨</span><span>すき間があいて冷気が入ってくる</span></div>
          <div className="scene-item"><span className="s-icon">🍄</span><span>カビがひどくてどうにもならない</span></div>
          <div className="scene-item"><span className="s-icon">💧</span><span>ドアのパッキンが劣化して水漏れ</span></div>
          <div className="scene-item"><span className="s-icon">🔧</span><span>ドアのパネルが割れた・破損した</span></div>
          <div className="scene-item"><span className="s-icon">✨</span><span>古いドアをすっきり新品にしたい</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 料金の目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🚿 浴室ドア交換（簡易カバー工法）</div>
        <table className="price-table">
          <tbody>
            <tr><td>浴室ドア交換（サイズ・種類により）</td><td className="price">¥30,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※現地確認後に正確な見積もりをご提示。見積無料</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box">
        💡 <strong>簡易カバー工法とは？</strong><br />
        既存の枠をそのまま活かして新しいドアを取り付ける方法です。<br />
        大がかりな解体工事不要・工期最短1日・費用も抑えられます。
      </div>

      <KomikomiBadge />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
