import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '有限会社 宮口板硝子',
  description: '川口市のガラス修理・網戸張替・窓リフォーム専門店。創業50年。基本当日対応。見積無料。',
  url: 'https://miyaguchi-glass.com',
  telephone: '090-8563-7982',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '木曽呂23-8',
    addressLocality: '川口市',
    addressRegion: '埼玉県',
    postalCode: '334-0011',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.8167,
    longitude: 139.7167,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:30',
    closes: '20:00',
  },
  priceRange: '¥¥',
  areaServed: [
    { '@type': 'City', name: '川口市' },
    { '@type': 'City', name: 'さいたま市' },
    { '@type': 'City', name: '蕨市' },
    { '@type': 'City', name: '越谷市' },
    { '@type': 'AdministrativeArea', name: '東京都北区' },
    { '@type': 'AdministrativeArea', name: '足立区' },
    { '@type': 'AdministrativeArea', name: '板橋区' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'サービス一覧',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ガラス修理・交換' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '網戸の張り替え' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '窓・サッシの修理' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '浴室ドア交換' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '鍵の取替・修理' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '障子・襖の張り替え' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '防犯・二重窓（内窓）' } },
    ],
  },
};

export default function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
