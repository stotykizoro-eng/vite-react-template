interface Props {
  tags?: string[];
  note?: string;
}

const DEFAULT_TAGS = ['✅ 出張費 込み', '✅ 作業料 込み', '✅ 消費税 込み'];
const DEFAULT_NOTE = '追加料金が発生する場合は<strong>必ず作業前にご説明</strong>します。後からの上乗せは一切ありません。まずは無料お見積もりをご依頼ください。';

export default function KomikomiBadge({ tags = DEFAULT_TAGS, note = DEFAULT_NOTE }: Props) {
  return (
    <div className="komikomi-box">
      <div className="komikomi-head">⚠️ すべて「込み込み価格」でご提示します</div>
      <div className="komikomi-body">
        <div className="komikomi-tags">
          {tags.map((tag) => (
            <span key={tag} className="ktag">{tag}</span>
          ))}
        </div>
        <p dangerouslySetInnerHTML={{ __html: note }} />
      </div>
    </div>
  );
}
