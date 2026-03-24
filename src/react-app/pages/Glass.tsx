import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import PageHero from '../components/PageHero';
import EmergencyBar from '../components/EmergencyBar';
import KomikomiBadge from '../components/KomikomiBadge';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Glass() {
  return (
    <PageLayout>
      <BackHome />

      <PageHero
        icon="🔧"
        title="ガラス修理・交換"
        sub="割れた・ヒビが入った・サイズを変えたい<br>どんなガラスも基本当日対応します"
      />

      <EmergencyBar
        title="🚨 ガラスが割れた！今すぐ直したい方"
        sub="7:30〜20:00 ｜ 基本当日対応 ｜ 見積無料"
      />

      <div className="scene-section">
        <div className="scene-title">🏠 こんなときにご相談ください</div>
        <div className="scene-list">
          <div className="scene-item"><span className="s-icon">💥</span><span>子どもがボールをぶつけてガラスが割れた</span></div>
          <div className="scene-item"><span className="s-icon">🌪️</span><span>台風・強風でガラスにヒビが入った</span></div>
          <div className="scene-item"><span className="s-icon">🔒</span><span>防犯対策で防犯ガラスに替えたい</span></div>
          <div className="scene-item"><span className="s-icon">❄️</span><span>結露がひどい・ペアガラスに交換したい</span></div>
          <div className="scene-item"><span className="s-icon">🚿</span><span>浴室・トイレの型ガラスが割れた</span></div>
          <div className="scene-item"><span className="s-icon">🏢</span><span>賃貸の原状回復でガラス交換が必要</span></div>
        </div>
      </div>

      <div className="sec-title-sm">
        <span className="en">Price Guide</span>
        <h2>💴 ガラス修理・交換の料金目安</h2>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🔧 透明ガラス（フロートガラス）</div>
        <table className="price-table">
          <tbody>
            <tr><td>小サイズ（〜60×60cm）</td><td className="price">¥8,000〜</td></tr>
            <tr><td>中サイズ（〜90×90cm）</td><td className="price">¥12,000〜</td></tr>
            <tr><td>大サイズ（掃き出し窓）</td><td className="price">¥21,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※ガラスの厚み・種類により変動。見積無料</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🌸 すりガラス・型ガラス</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ</td><td className="price">¥14,000〜</td></tr>
            <tr><td>大サイズ</td><td className="price">¥20,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※柄の種類により変動</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🕸️ 網入りガラス</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ</td><td className="price">¥22,000〜</td></tr>
            <tr><td>大サイズ</td><td className="price">¥32,000〜</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">❄️ ペアガラス（複層ガラス）</div>
        <table className="price-table">
          <tbody>
            <tr><td>中サイズ</td><td className="price">¥35,000〜</td></tr>
            <tr><td>大サイズ</td><td className="price">¥55,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※断熱・防音・結露対策に最適</td></tr>
          </tbody>
        </table>
      </div>

      <div className="price-cat-wrap">
        <div className="price-cat-title">🛡️ 防犯ガラスへの交換</div>
        <table className="price-table">
          <tbody>
            <tr><td>防犯ガラス交換（1枚）</td><td className="price">¥55,000〜</td></tr>
            <tr className="note"><td colSpan={2}>※空き巣対策に。割れても飛散しにくい</td></tr>
          </tbody>
        </table>
      </div>

      <KomikomiBadge
        tags={['✅ 出張費 込み', '✅ 作業料 込み', '✅ ガラス処分費 込み', '✅ 消費税 込み']}
      />

      <div className="sec-title-sm">
        <span className="en">FAQ</span>
        <h2>よくあるご質問</h2>
      </div>
      <div className="faq-section">
        <details className="faq-item">
          <summary>当日対応してもらえますか？</summary>
          <p>はい、基本的に当日対応しております。川口市木曽呂を拠点に、川口市内・さいたま市・東京都内へ迅速に駆けつけます。まずはお電話ください。</p>
        </details>
        <details className="faq-item">
          <summary>費用はどのくらいかかりますか？</summary>
          <p>一般的な窓ガラス1枚の交換は¥8,000〜が目安です。出張費・作業料・処分費・消費税をすべて含んだ込み込み価格でご提示します。まずは無料見積もりをご依頼ください。</p>
        </details>
        <details className="faq-item">
          <summary>賃貸でもお願いできますか？</summary>
          <p>はい、賃貸物件でも対応可能です。費用の負担が管理会社・オーナー側になる場合がありますので、事前に管理会社へご確認ください。見積書の発行も無料で行います。</p>
        </details>
        <details className="faq-item">
          <summary>ペアガラスに交換できますか？</summary>
          <p>対応可能です。断熱・防音・結露対策に効果的で、既存の窓枠をそのまま活かして交換できる場合も多いです。まずは現地で無料見積もりをいたします。</p>
        </details>
      </div>

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
