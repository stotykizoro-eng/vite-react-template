import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Bohan() {
  return (
    <PageLayout>
      <MetaTags
        title="防犯・二重窓（内窓）｜宮口板硝子 川口市"
        description="川口市の防犯・断熱リフォーム専門。防犯ガラス交換・内窓（二重窓）設置・防犯フィルム施工。補助金対応。見積無料。☎090-8563-7982"
        path="/bohan"
      />
      <BackHome />

      <PageHero
        icon="🛡️"
        title="防犯・二重窓（内窓）"
        sub="空き巣対策・断熱・結露防止に<br>防犯ガラス・内窓設置・フィルム施工"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">🏠</span><span>空き巣・不審者が心配</span></div>
          <div className="scene-item"><span className="s-icon">❄️</span><span>冬が寒い・結露がひどい</span></div>
          <div className="scene-item"><span className="s-icon">🔊</span><span>外の騒音・道路の音が気になる</span></div>
          <div className="scene-item"><span className="s-icon">💰</span><span>冷暖房代を節約したい</span></div>
          <div className="scene-item"><span className="s-icon">🪟</span><span>窓を壊さず防犯性を上げたい</span></div>
          <div className="scene-item"><span className="s-icon">💡</span><span>補助金・助成金を使って工事したい</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 料金の目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🛡️ 防犯・断熱リフォーム</div>
        <table className="price-table">
          <tbody>
            <tr><td>防犯ガラスへの交換</td><td className="price">¥55,000〜</td></tr>
            <tr><td>内窓（二重窓）設置（小窓1箇所）</td><td className="price">¥40,000〜</td></tr>
            <tr><td>内窓（二重窓）設置（掃き出し）</td><td className="price">¥75,000〜</td></tr>
            <tr><td>防犯フィルム施工（1枚）</td><td className="price">¥12,000〜</td></tr>
            <tr><td>面格子取り付け（1箇所）</td><td className="price">¥18,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※補助金が使える場合があります。ご相談ください</td></tr>
          </tbody>
        </table>
      </div>

      <KomikomiBadge />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
