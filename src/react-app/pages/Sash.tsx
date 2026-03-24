import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Sash() {
  return (
    <PageLayout>
      <MetaTags
        title="窓・サッシの修理｜宮口板硝子 川口市"
        description="川口市の窓・サッシ修理専門。重い・ガタガタ・閉まらない。調整のみなら無料〜。戸車交換・クレセント錠交換も対応。☎090-8563-7982"
        path="/sash"
      />
      <BackHome />

      <PageHero
        icon="⚙️"
        title="窓・サッシの修理"
        sub="重い・ガタガタ・閉まらない<br>調整のみなら無料〜対応します"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">💪</span><span>引き戸が重くて開け閉めが大変</span></div>
          <div className="scene-item"><span className="s-icon">🌬️</span><span>隙間風が入ってくる・閉まりきらない</span></div>
          <div className="scene-item"><span className="s-icon">🔊</span><span>窓がガタガタうるさい</span></div>
          <div className="scene-item"><span className="s-icon">🔒</span><span>鍵（クレセント錠）がかかりにくい</span></div>
          <div className="scene-item"><span className="s-icon">🛠️</span><span>戸車（ローラー）が壊れた</span></div>
          <div className="scene-item"><span className="s-icon">💦</span><span>ゴムパッキンが劣化して水が入る</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 料金の目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">⚙️ 窓・サッシの調整・修理</div>
        <table className="price-table">
          <tbody>
            <tr><td>窓の建付け調整・動き改善</td><td className="price-free">無料〜</td></tr>
            <tr><td>戸車（ローラー）交換</td><td className="price">¥6,000〜</td></tr>
            <tr><td>クレセント錠（窓の鍵）交換</td><td className="price">¥5,000〜</td></tr>
            <tr><td>サッシのゴムパッキン交換</td><td className="price">¥8,000〜</td></tr>
            <tr><td>引き違い窓の修理（総合）</td><td className="price">¥10,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※調整のみで改善できる場合は無料または低額</td></tr>
          </tbody>
        </table>
      </div>

      <div className="warn-box">
        👇 まず見てみないとわかりません！<br />
        調整で直れば<strong>無料か低額</strong>で済む場合も多いです。
      </div>

      <KomikomiBadge note="追加料金が発生する場合は<strong>必ず作業前にご説明</strong>します。後からの上乗せは一切ありません。まずは無料お見積もりをご依頼ください。" />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
