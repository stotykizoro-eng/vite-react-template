import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Kagi() {
  return (
    <PageLayout>
      <MetaTags
        title="鍵の取替・修理｜宮口板硝子 川口市"
        description="川口市の鍵の取替・修理専門。玄関鍵・防犯錠・補助錠・窓の鍵など対応。防犯性向上も。見積無料。☎090-8563-7982"
        path="/kagi"
      />
      <BackHome />

      <PageHero
        icon="🔐"
        title="鍵の取替・修理"
        sub="玄関・窓・引き戸など何でも対応<br>防犯性の高い錠前にも交換できます"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">🔑</span><span>鍵が固くて回りにくい・引っかかる</span></div>
          <div className="scene-item"><span className="s-icon">🏠</span><span>引っ越しで鍵を新しくしたい</span></div>
          <div className="scene-item"><span className="s-icon">🛡️</span><span>空き巣対策で防犯錠に替えたい</span></div>
          <div className="scene-item"><span className="s-icon">➕</span><span>補助錠を追加して防犯強化したい</span></div>
          <div className="scene-item"><span className="s-icon">🪟</span><span>窓・サッシの鍵が壊れた</span></div>
          <div className="scene-item"><span className="s-icon">🌙</span><span>夜に鍵が壊れて困っている（緊急）</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 料金の目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🔐 鍵の交換・修理</div>
        <table className="price-table">
          <tbody>
            <tr><td>玄関鍵の修理・調整</td><td className="price">¥8,000〜</td></tr>
            <tr><td>玄関鍵の交換（一般錠）</td><td className="price">¥15,000〜</td></tr>
            <tr><td>玄関鍵の交換（ディンプル錠）</td><td className="price">¥25,000〜</td></tr>
            <tr><td>玄関鍵の交換（防犯錠・高性能）</td><td className="price">¥35,000〜</td></tr>
            <tr><td>窓・サッシの鍵交換</td><td className="price">¥5,000〜</td></tr>
            <tr><td>補助錠の取り付け</td><td className="price">¥12,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※鍵のメーカー・グレードにより変動</td></tr>
          </tbody>
        </table>
      </div>

      <KomikomiBadge />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
