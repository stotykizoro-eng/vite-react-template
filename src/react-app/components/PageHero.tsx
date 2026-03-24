interface Props {
  icon: string;
  title: string;
  sub: string;
}

export default function PageHero({ icon, title, sub }: Props) {
  return (
    <div className="page-hero">
      <div className="page-icon">{icon}</div>
      <div className="page-title">{title}</div>
      <div className="page-sub" dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
  );
}
