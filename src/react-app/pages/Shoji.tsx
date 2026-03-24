import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Shoji() {
  return (
    <PageLayout>
      <MetaTags
        title="障子・襖の張り替え｜宮口板硝子 川口市"
        description="川口市の障子・襖の張替専門。黄ばみ・穴・破れを一新。法事・お正月・引越し前にも人気。まとめ割あり。見積無料。☎090-8563-7982"
        path="/shoji"
      />
      <BackHome />

      <PageHero
        icon="🏯"
        title="障子・襖の張り替え"
        sub="黄ばみ・穴・破れを一新します<br>法事・お正月・引っ越し前にも人気"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">💛</span><span>障子が黄ばんで汚くなった</span></div>
          <div className="scene-item"><span className="s-icon">🕳️</span><span>子どもや孫が穴を空けてしまった</span></div>
          <div className="scene-item"><span className="s-icon">🍀</span><span>お正月・法事前に綺麗にしたい</span></div>
          <div className="scene-item"><span className="s-icon">🎨</span><span>柄を変えておしゃれな和室にしたい</span></div>
          <div className="scene-item"><span className="s-icon">🏠</span><span>引っ越し前後に原状回復したい</span></div>
          <div className="scene-item"><span className="s-icon">💰</span><span>まとめて依頼してコストを抑えたい</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 料金の目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🏯 障子の張り替え</div>
        <table className="price-table">
          <tbody>
            <tr><td>障子1枚（普通紙）</td><td className="price">¥4,500〜</td></tr>
            <tr><td>障子4枚以上まとめて</td><td className="price">¥4,000〜/枚</td></tr>
            <tr className="note"><td colSpan={2}>※和紙の種類（強化和紙・プラスチック障子紙等）により変動</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">📜 襖の張り替え</div>
        <table className="price-table">
          <tbody>
            <tr><td>襖1枚</td><td className="price">¥6,000〜</td></tr>
            <tr><td>襖4枚以上まとめて</td><td className="price">¥5,500〜/枚</td></tr>
            <tr className="note"><td colSpan={2}>※柄・グレードにより変動。まとめほどお得</td></tr>
          </tbody>
        </table>
      </div>

      <KomikomiBadge />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
