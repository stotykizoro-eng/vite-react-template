import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Compare() {
  return (
    <PageLayout>
      <MetaTags
        title="ガラス修理業者の比較｜ネット格安業者・ホームセンターとの違い｜宮口板硝子"
        description="宮口板硝子とネット格安業者・ホームセンター・大手リフォーム会社との違いを比較。料金・対応スピード・信頼性・アフターサービスを徹底比較。☎090-8563-7982"
        path="/compare"
      />
      <BackHome />

      <PageHero
        icon="⚖️"
        title="どこに頼む？比較してみてください"
        sub="宮口板硝子とネット格安業者・<br>ホームセンター・大手の違い"
      />

      <div className="warn-box" style={{ margin: '0 14px 16px' }}>
        ⚠️ 全国で「0円・激安」と広告し、作業後に<strong>高額請求するトラブル</strong>が急増しています。<br />
        業者選びはトラブルを避けるためにも、慎重にご判断ください。
      </div>

      {/* 比較表1: vs ネット格安業者 */}
      <div className="sec-title-sm">
        <span className="en">vs Online Cheap Services</span>
        <h2>🔍 宮口板硝子 vs ネット格安業者</h2>
      </div>

      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-row-label" style={{ minWidth: '100px' }}>比較項目</th>
              <th className="compare-th-us">宮口板硝子</th>
              <th className="compare-th-net">ネット格安業者</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="compare-row-label">見積もり費用</td>
              <td className="compare-good">✅ 完全無料</td>
              <td className="compare-bad">❌ 有料の場合あり</td>
            </tr>
            <tr>
              <td className="compare-row-label">料金の明確さ</td>
              <td className="compare-good">✅ 込み込み総額提示</td>
              <td className="compare-bad">❌ 後から追加請求</td>
            </tr>
            <tr>
              <td className="compare-row-label">対応スピード</td>
              <td className="compare-good">✅ 基本当日対応</td>
              <td className="compare-neutral">△ 日程調整が必要</td>
            </tr>
            <tr>
              <td className="compare-row-label">地元の信頼</td>
              <td className="compare-good">✅ 創業50年・川口市</td>
              <td className="compare-bad">❌ 所在地・実態不明</td>
            </tr>
            <tr>
              <td className="compare-row-label">アフターサービス</td>
              <td className="compare-good">✅ 電話ですぐ相談可</td>
              <td className="compare-bad">❌ 連絡取れないことも</td>
            </tr>
            <tr>
              <td className="compare-row-label">作業者</td>
              <td className="compare-good">✅ 直接職人が来る</td>
              <td className="compare-bad">❌ 下請け業者が来ることも</td>
            </tr>
            <tr>
              <td className="compare-row-label">保証・責任</td>
              <td className="compare-good">✅ 施工保証あり</td>
              <td className="compare-bad">❌ 保証なし・所在不明</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 比較表2: vs ホームセンター */}
      <div className="sec-title-sm">
        <span className="en">vs Home Center</span>
        <h2>🏪 宮口板硝子 vs ホームセンター持込み</h2>
      </div>

      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-row-label" style={{ minWidth: '100px' }}>比較項目</th>
              <th className="compare-th-us">宮口板硝子</th>
              <th className="compare-th-net">ホームセンター</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="compare-row-label">採寸・確認</td>
              <td className="compare-good">✅ 職人が現地で計測</td>
              <td className="compare-bad">❌ 自分で採寸が必要</td>
            </tr>
            <tr>
              <td className="compare-row-label">取り付け作業</td>
              <td className="compare-good">✅ すべて込み</td>
              <td className="compare-bad">❌ 別途工賃が必要</td>
            </tr>
            <tr>
              <td className="compare-row-label">対応できる種類</td>
              <td className="compare-good">✅ あらゆるガラス・窓</td>
              <td className="compare-bad">❌ 在庫商品のみ</td>
            </tr>
            <tr>
              <td className="compare-row-label">緊急対応</td>
              <td className="compare-good">✅ 当日対応可</td>
              <td className="compare-bad">❌ 取り寄せ後のみ</td>
            </tr>
            <tr>
              <td className="compare-row-label">割れた窓の応急処置</td>
              <td className="compare-good">✅ 対応可</td>
              <td className="compare-bad">❌ 対応不可</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 比較表3: vs 大手リフォーム */}
      <div className="sec-title-sm">
        <span className="en">vs Large Company</span>
        <h2>🏢 宮口板硝子 vs 大手リフォーム会社</h2>
      </div>

      <div className="compare-points">
        <div className="compare-point-item">
          <div className="compare-point-icon">💰</div>
          <div className="compare-point-text">
            <strong>中間コストなし</strong>
            問屋直仕入れのため、大手リフォーム会社のような営業・仲介コストがかかりません。その分、お客様への価格を抑えられます。
          </div>
        </div>
        <div className="compare-point-item">
          <div className="compare-point-icon">🏃</div>
          <div className="compare-point-text">
            <strong>直接職人が素早く対応</strong>
            大手は営業担当→工事部門→協力業者という流れが必要です。当店は直接職人が伺うため、即日対応・当日見積もりが可能です。
          </div>
        </div>
        <div className="compare-point-item">
          <div className="compare-point-icon">🪟</div>
          <div className="compare-point-text">
            <strong>1枚から・小さな修理も対応</strong>
            大手は最低工事金額が設定されていることが多く、小さな修理を断られることもあります。当店はガラス1枚・網戸1枚からでも喜んで対応します。
          </div>
        </div>
      </div>

      {/* まとめ */}
      <div className="compare-cta-block">
        <p>
          創業50年、川口市木曽呂で地域に根ざしてきました。<br />
          <strong>「明朗会計・込み込み価格・当日対応」</strong>を守り続けています。<br />
          安心してご相談ください。
        </p>
        <TelButton />
        <p className="compare-cta-sub">
          <Link to="/price" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline' }}>
            料金の詳細はこちら →
          </Link>
        </p>
      </div>

      <Footer compact />
    </PageLayout>
  );
}
