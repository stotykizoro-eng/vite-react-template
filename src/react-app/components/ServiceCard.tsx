import { Link } from 'react-router-dom';

export interface ServicePrice {
  label: string;
  price: string;
  free?: boolean;
}

interface Props {
  to: string;
  image: string;
  alt: string;
  icon: string;
  title: string;
  bullets: string[];
  cta?: string;
  prices?: ServicePrice[];
  badge?: string;
  featured?: boolean;
}

export default function ServiceCard({
  to, image, alt, icon, title, bullets, cta, prices, badge, featured = false,
}: Props) {
  return (
    <Link to={to} className={`svc-card${featured ? ' featured' : ''}`}>
      <div className="svc-card-img-wrap">
        <img src={image} alt={alt} className="svc-card-img" />
      </div>
      <div className="svc-card-body">
        <div className="svc-card-title">
          <span>{icon}</span> {title}
        </div>
        <ul className="svc-card-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        {cta && <p className="svc-card-cta">→ {cta}</p>}
        {prices && prices.length > 0 && (
          <div className="svc-card-prices">
            {prices.map((p, i) => (
              <div key={i} className="svc-price-row">
                <span className="svc-price-label">{p.label}</span>
                <span className={p.free ? 'svc-price-free' : 'svc-price-val'}>{p.price}</span>
              </div>
            ))}
          </div>
        )}
        {badge && <div className="svc-card-badge">⚡ {badge}</div>}
      </div>
    </Link>
  );
}
