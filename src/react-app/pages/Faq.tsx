import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Faq() {
  return (
    <PageLayout>
      <MetaTags
        title="よくある質問｜料金・エリア・当日対応・修理内容｜宮口板硝子"
        description="宮口板硝子へのよくある質問。料金・見積もり・対応エリア・当日対応・ガラスや網戸の修理方法など20問をまとめました。☎090-8563-7982"
        path="/faq"
      />
      <BackHome />

      <PageHero
        icon="❓"
        title="よくある質問"
        sub="お客様からよくいただくご質問に<br>お答えします"
      />

      {/* カテゴリ1: 対応エリア・来店について */}
      <div className="faq-category-wrap">
        <div className="faq-category-title">🗺️ 対応エリア・来店について</div>
        <div className="faq-section">
          <details className="faq-item">
            <summary>川口市外からでも依頼できますか？</summary>
            <p>はい、対応可能です。川口市を中心に、さいたま市・蕨市・越谷市・草加市・東京都北区・足立区など広い範囲に出張しています。市外の場合も出張費込みの見積もりで対応しますので、まずはお気軽にお電話ください。</p>
          </details>
          <details className="faq-item">
            <summary>来店は必要ですか？</summary>
            <p>基本的に現地への出張対応となります。店舗への来店は不要です。お電話いただければ現地まで伺い、その場で作業します。ご来店を希望される場合は事前にお電話でご相談ください。</p>
          </details>
          <details className="faq-item">
            <summary>営業時間を教えてください</summary>
            <p>7:30〜20:00で対応しています。早朝の急なガラス割れなども7時半からお電話いただけます。緊急の場合はまずお電話でご相談ください。</p>
          </details>
          <details className="faq-item">
            <summary>年中無休ですか？土日・祝日も対応していますか？</summary>
            <p>はい、年中無休で対応しています。土日・祝日・お盆・年末年始も通常通り受け付けています。ただし混み合う時期は対応が遅れる場合がありますので、早めにご連絡ください。</p>
          </details>
        </div>
      </div>

      {/* カテゴリ2: 料金・費用について */}
      <div className="faq-category-wrap">
        <div className="faq-category-title">💴 料金・費用について</div>
        <div className="faq-section">
          <details className="faq-item">
            <summary>見積もりは本当に無料ですか？</summary>
            <p>はい、完全無料です。現地確認・採寸・見積もりの提示まで一切費用はかかりません。見積もり後にご納得いただけなければ、費用はいただきません。</p>
          </details>
          <details className="faq-item">
            <summary>「込み込み価格」とはどういう意味ですか？</summary>
            <p>出張費・採寸費・作業費・材料費・消費税をすべて含めた総額でご提示する価格のことです。「作業後に追加費用が発生した」「出張費が別途かかった」といったトラブルがないよう、見積もり時に総額をお伝えしています。</p>
          </details>
          <details className="faq-item">
            <summary>作業後に追加料金が発生することはありますか？</summary>
            <p>見積もり時にお伝えした金額以外は原則いただきません。ただし、作業中に想定外の状況（サッシの腐食・特殊な取り付け構造など）が発覚した場合は、作業前にご説明した上でご判断いただきます。</p>
          </details>
          <details className="faq-item">
            <summary>クレジットカードは使えますか？</summary>
            <p>現在は現金でのお支払いをお願いしています。銀行振込は個別にご相談ください。</p>
          </details>
          <details className="faq-item">
            <summary>ネットで見かける「0円・激安」業者と何が違うのですか？</summary>
            <p>全国で「0円・激安」と広告して、作業後に高額請求するトラブルが多発しています。当店は見積もり時に込み込み価格をお伝えし、ご納得いただいてから作業します。創業50年・地元密着の実績で、安心してご依頼ください。詳しくは<a href="/compare">業者比較ページ</a>もご覧ください。</p>
          </details>
        </div>
      </div>

      {/* カテゴリ3: 当日対応・スピードについて */}
      <div className="faq-category-wrap">
        <div className="faq-category-title">⚡ 当日対応・スピードについて</div>
        <div className="faq-section">
          <details className="faq-item">
            <summary>当日対応は本当に可能ですか？</summary>
            <p>はい、川口市内であれば基本的に当日対応しています（在庫・状況による）。ガラスが割れた・急いで直したいという緊急のご依頼にも、できる限り対応します。まずはお電話でご状況をお聞かせください。</p>
          </details>
          <details className="faq-item">
            <summary>電話してからどのくらいで来てもらえますか？</summary>
            <p>川口市内であれば最短30分〜1時間程度でお伺いできることが多いです。距離や作業状況によって変わりますので、電話時に目安をお伝えします。</p>
          </details>
          <details className="faq-item">
            <summary>夜間・早朝でも対応してもらえますか？</summary>
            <p>営業時間は7:30〜20:00です。それ以外の時間帯は緊急の場合のみ対応できる場合があります。夜間・深夜のご依頼はまずお電話でご相談ください。</p>
          </details>
        </div>
      </div>

      {/* カテゴリ4: ガラス・網戸の修理について */}
      <div className="faq-category-wrap">
        <div className="faq-category-title">🔧 ガラス・網戸の修理について</div>
        <div className="faq-section">
          <details className="faq-item">
            <summary>ガラス1枚だけでも来てもらえますか？</summary>
            <p>はい、1枚からでも喜んで対応します。「小さい修理で申し訳ない」と遠慮される方も多いですが、どんな小さな修理でも大歓迎です。まずはお気軽にご相談ください。</p>
          </details>
          <details className="faq-item">
            <summary>割れたガラスの後片付けもしてもらえますか？</summary>
            <p>はい、ガラスの破片の後片付け・清掃も作業に含まれています。安全のため、ガラスは適切に処分しますのでご安心ください。</p>
          </details>
          <details className="faq-item">
            <summary>賃貸物件でも依頼できますか？</summary>
            <p>はい、対応可能です。賃貸物件のガラス修理・原状回復のご依頼も多く承っています。管理会社・大家さんの許可が必要な場合がありますので、事前にご確認ください。</p>
          </details>
          <details className="faq-item">
            <summary>どんな種類のガラスでも対応できますか？</summary>
            <p>透明ガラス・すりガラス・型ガラス・網入りガラス・ペアガラス・防犯ガラス・強化ガラスなど幅広く対応しています。特殊なガラスの場合、取り寄せに時間がかかる場合があります。まずはご相談ください。</p>
          </details>
        </div>
      </div>

      {/* カテゴリ5: 防犯・その他工事 */}
      <div className="faq-category-wrap">
        <div className="faq-category-title">🛡️ 防犯・その他工事について</div>
        <div className="faq-section">
          <details className="faq-item">
            <summary>防犯ガラスと普通のガラスは何が違いますか？</summary>
            <p>防犯ガラスは2枚のガラスの間に特殊なフィルムを挟んでおり、割れても破片が飛び散らず、こじ破りに対して強い構造です。外からの侵入を時間的に遅らせる効果があり、防犯対策として国土交通省でも推奨されています。</p>
          </details>
          <details className="faq-item">
            <summary>内窓（二重窓）設置で補助金は出ますか？</summary>
            <p>省エネ改修として国や自治体の補助金が利用できる場合があります（最大20万円程度）。補助金の適用には条件があるため、現地確認時にご案内します。お気軽にお問い合わせください。</p>
          </details>
          <details className="faq-item">
            <summary>鍵交換も同日にガラス修理と一緒にできますか？</summary>
            <p>はい、可能です。ガラス修理と鍵交換を同時に行うことで、作業費の節約にもなります。複数箇所の修理をまとめてご依頼いただくお客様も多いです。</p>
          </details>
          <details className="faq-item">
            <summary>障子・ふすまの張替えも頼めますか？</summary>
            <p>はい、障子・ふすまの張替えも対応しています。1枚からでも承ります。和室のリフォームや、引越し前後の原状回復などにもご利用ください。</p>
          </details>
        </div>
      </div>

      <ContactForm introText="その他のご質問・お見積もりはこちら" />

      <TelButton />
      <Footer compact />
    </PageLayout>
  );
}
