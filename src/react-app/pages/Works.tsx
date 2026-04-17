import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Works() {
  return (
    <PageLayout>
      <MetaTags
        title="施工実績｜川口市・さいたま市・東京都内のガラス修理事例｜宮口板硝子"
        description="宮口板硝子の施工実績。川口市・さいたま市・東京都北区・足立区などのガラス修理・網戸張替・鍵交換・内窓設置の事例をご紹介。☎090-8563-7982"
        path="/works"
      />
      <BackHome />

      <PageHero
        icon="🏗️"
        title="施工実績"
        sub="川口市・さいたま市・東京都内での<br>工事事例をご紹介します"
      />

      <div className="info-box" style={{ margin: '0 14px 16px' }}>
        📷 施工写真は順次追加予定です。現在はお客様の声とテキスト事例をご紹介しています。
      </div>

      <div className="sec-title-sm">
        <span className="en">Case Studies</span>
        <h2>🔧 施工事例</h2>
      </div>

      <div className="works-list">
        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">ガラス修理</span>
            <span className="works-area">📍 川口市（木曽呂周辺）</span>
          </div>
          <p className="works-summary">
            子どもが窓に転んで透明ガラス（腰高窓）が割れてしまった。破片が散乱し、小さな子どもがいるため早急に対応が必要とのことでご依頼。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>電話から約1時間で現地到着。同サイズの透明ガラスを在庫から当日交換。ガラスの後片付け・清掃も実施。<br />
            <strong>費用目安：</strong>¥12,000（込み込み） ／ <strong>作業時間：</strong>約1時間
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">網戸張替</span>
            <span className="works-area">📍 さいたま市南区</span>
          </div>
          <p className="works-summary">
            飼い猫が引っかいて網戸3枚に大きな穴が開いた。花粉症対策もしたいとのことで、花粉対策ネットへの変更もご希望。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>3枚すべてを花粉対策ネットに張り替え。フレームも清掃してきれいな状態に。<br />
            <strong>費用目安：</strong>¥16,500（3枚・込み込み） ／ <strong>作業時間：</strong>約2時間
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">鍵交換</span>
            <span className="works-area">📍 東京都北区赤羽</span>
          </div>
          <p className="works-summary">
            引越しに伴い、古い玄関錠を防犯性の高いディンプルキーに交換したいとのご依頼。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>既存の錠前を撤去し、ピッキング対策済みのディンプルキー錠を取り付け。鍵は3本作製。<br />
            <strong>費用目安：</strong>¥28,000（込み込み） ／ <strong>作業時間：</strong>約1.5時間
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">防犯・内窓</span>
            <span className="works-area">📍 東京都足立区西新井</span>
          </div>
          <p className="works-summary">
            道路沿いの部屋で騒音がひどく、結露も悩みだった。二重窓（内窓）の設置を検討してご相談。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>リビングの掃き出し窓と腰高窓2か所に内窓を設置。防音効果と断熱効果が向上。省エネ補助金も活用。<br />
            <strong>費用目安：</strong>¥130,000（3か所・補助金適用前） ／ <strong>作業時間：</strong>1日
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">サッシ調整</span>
            <span className="works-area">📍 川口市芝</span>
          </div>
          <p className="works-summary">
            窓が重くて開け閉めができなくなった。高齢の親が住んでいる家で、日常的に開閉できないのは困るとのこと。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>戸車の摩耗が原因と判明。戸車交換と建付け調整で開閉がスムーズに復活。<br />
            <strong>費用目安：</strong>¥6,000（込み込み） ／ <strong>作業時間：</strong>約1時間
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">障子・襖</span>
            <span className="works-area">📍 川口市新郷</span>
          </div>
          <p className="works-summary">
            和室の障子2枚と襖2枚が破れていた。お子さんが破ったとのことで、まとめて張り替えたいとのご依頼。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>障子・襖合計4枚を張替え。複数枚のまとめ割引を適用。素材は標準和紙を選択。<br />
            <strong>費用目安：</strong>¥24,000（4枚・込み込み・まとめ割） ／ <strong>作業時間：</strong>約2時間
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">浴室ドア</span>
            <span className="works-area">📍 蕨市</span>
          </div>
          <p className="works-summary">
            浴室の折り戸が開閉できなくなった。古くなったヒンジ部分が破損。メーカーへの問い合わせでは部品廃盤と言われた。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>カバー工法で新しい折り戸に交換。タイルを傷つけず1日で完工。<br />
            <strong>費用目安：</strong>¥35,000（込み込み） ／ <strong>作業時間：</strong>約3時間
          </div>
        </div>

        <div className="works-card">
          <div className="works-card-head">
            <span className="works-tag">ガラス修理</span>
            <span className="works-area">📍 越谷市</span>
          </div>
          <p className="works-summary">
            台風の翌日、窓の網入りガラスにひびが入っているのを発見。そのまま放置すると危険なため緊急でご依頼。
          </p>
          <div className="works-result">
            <strong>対応内容：</strong>翌日午前中に現地確認、在庫手配のうえ2日後に交換完了。応急処置として養生テープで安全確保。<br />
            <strong>費用目安：</strong>¥24,000（込み込み） ／ <strong>作業時間：</strong>約1.5時間
          </div>
        </div>
      </div>

      {/* お客様の声 */}
      <div className="sec-title-sm">
        <span className="en">Reviews</span>
        <h2>⭐ お客様の声</h2>
      </div>

      <div className="testimonial-grid">
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">電話してから1時間もかからずに来てくれました。ガラスが割れて困っていたのに、こんなに早く直してもらえるとは思いませんでした。料金も事前に教えてくれて安心でした。</p>
          <div className="review-from">川口市 / 40代女性 / ガラス修理</div>
        </div>
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">網戸を5枚一度に張り替えてもらいました。作業が丁寧で、古いフレームも綺麗に掃除してくれた。花粉対策ネットにして正解でした。また何かあれば絶対お願いします。</p>
          <div className="review-from">さいたま市 / 50代男性 / 網戸張替</div>
        </div>
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">内窓設置をお願いしました。思っていたより工事時間が短く、その日のうちに完成。防音効果が抜群で、道路沿いなのに静かになりました。補助金の説明もしてくれて助かりました。</p>
          <div className="review-from">足立区 / 30代夫婦 / 内窓設置</div>
        </div>
        <div className="review-card">
          <div className="review-stars">★★★★☆</div>
          <p className="review-text">古くなった玄関の鍵を替えたくて相談しました。どんな鍵が防犯上おすすめか丁寧に説明してくれて、納得して選べました。地元で長くやっている業者さんで安心感がありました。</p>
          <div className="review-from">北区 / 60代女性 / 鍵交換</div>
        </div>
      </div>

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
