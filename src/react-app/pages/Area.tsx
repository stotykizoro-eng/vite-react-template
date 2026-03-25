import PageLayout from '../components/PageLayout';
import BackHome from '../components/BackHome';
import MetaTags from '../components/MetaTags';
import PageHero from '../components/PageHero';
import TelButton from '../components/TelButton';
import Footer from '../components/Footer';

export default function Area() {
  return (
    <PageLayout>
      <MetaTags
        title="サービスエリア｜川口市・さいたま市・東京都内のガラス修理｜宮口板硝子"
        description="宮口板硝子のサービスエリア。川口市木曽呂を拠点に、さいたま市・蕨市・越谷市・東京都北区・足立区などへ出張対応。出張費込みの見積無料。☎090-8563-7982"
        path="/area"
      />
      <BackHome />

      <PageHero
        icon="🗺️"
        title="サービスエリア"
        sub="川口市木曽呂を拠点に<br>埼玉県・東京都内へ出張対応します"
      />

      <div className="info-box" style={{ margin: '0 14px 16px' }}>
        📍 <strong>川口市内は基本当日対応</strong>。市外も出張費込みの無料見積もりで承ります。<br />
        まずはお気軽にお電話ください。エリア外でもご相談に応じます。
      </div>

      {/* 埼玉県エリア */}
      <div className="sec-title-sm">
        <span className="en">Saitama Prefecture</span>
        <h2>📍 埼玉県の対応エリア</h2>
      </div>

      <div className="area-city-grid">
        <div className="area-city-card">
          <div><span className="area-primary-badge">主拠点</span></div>
          <div className="area-city-name">川口市（全域）</div>
          <div className="area-city-detail">
            木曽呂・赤山・安行・新郷・芝・戸塚・東川口・南平・青木・横曽根・鳩ヶ谷 など川口市全域
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-primary-badge">主対応</span></div>
          <div className="area-city-name">さいたま市</div>
          <div className="area-city-detail">
            南区・緑区・浦和区・桜区・大宮区・見沼区・岩槻区
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-primary-badge">主対応</span></div>
          <div className="area-city-name">蕨市</div>
          <div className="area-city-detail">
            全域対応。川口市に隣接しており迅速に伺えます。
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">出張可</span></div>
          <div className="area-city-name">越谷市</div>
          <div className="area-city-detail">
            越谷・南越谷・レイクタウン周辺
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">出張可</span></div>
          <div className="area-city-name">草加市</div>
          <div className="area-city-detail">
            草加・新田・谷塚周辺
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">出張可</span></div>
          <div className="area-city-name">八潮市</div>
          <div className="area-city-detail">
            八潮・南八潮・大曽根周辺
          </div>
        </div>
      </div>

      {/* 東京都エリア */}
      <div className="sec-title-sm">
        <span className="en">Tokyo</span>
        <h2>📍 東京都の対応エリア</h2>
      </div>

      <div className="area-city-grid">
        <div className="area-city-card">
          <div><span className="area-primary-badge">主対応</span></div>
          <div className="area-city-name">北区</div>
          <div className="area-city-detail">
            赤羽・王子・志茂・豊島・浮間・西ヶ原
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-primary-badge">主対応</span></div>
          <div className="area-city-name">足立区</div>
          <div className="area-city-detail">
            西新井・竹ノ塚・綾瀬・千住・梅島・江北
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">出張可</span></div>
          <div className="area-city-name">板橋区</div>
          <div className="area-city-detail">
            高島平・志村・常盤台周辺
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">出張可</span></div>
          <div className="area-city-name">荒川区</div>
          <div className="area-city-detail">
            南千住・町屋・荒川・東尾久周辺
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">応相談</span></div>
          <div className="area-city-name">文京区・台東区</div>
          <div className="area-city-detail">
            お気軽にご相談ください
          </div>
        </div>
        <div className="area-city-card">
          <div><span className="area-secondary-badge">応相談</span></div>
          <div className="area-city-name">その他23区</div>
          <div className="area-city-detail">
            出張費別途。まずはお電話で確認を
          </div>
        </div>
      </div>

      <div className="warn-box" style={{ margin: '0 14px 16px' }}>
        上記エリア外でもお気軽にご相談ください。<br />
        出張費・対応可否は無料見積もり時にご案内します。
      </div>

      {/* Googleマップ案内 */}
      <div className="sec-title-sm">
        <span className="en">Access</span>
        <h2>📍 店舗所在地</h2>
      </div>

      <div className="area-map-placeholder">
        <strong>有限会社 宮口板硝子</strong>
        〒333-0831 埼玉県川口市木曽呂23-8<br />
        最寄り駅：東川口駅（埼玉高速鉄道）徒歩約20分<br /><br />
        Googleマップで「宮口板硝子」と検索するとすぐ見つかります。<br />
        <strong>原則、出張での対応になります。ご来店は事前にお電話ください。</strong>
      </div>

      <TelButton />
      <Footer showAreaTags />
    </PageLayout>
  );
}
