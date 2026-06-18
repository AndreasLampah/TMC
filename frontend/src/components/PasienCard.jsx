export default function PasienCard({ title, value, icon, variant }) {
  return (
    <div className={`pasien-card${variant ? ` variant-${variant}` : ""}`}>
      <div className="icon-wrap">{icon}</div>

      <div className="info">
        <span className="title">{title}</span>
        <span className="value">
          {value !== undefined && value !== null ? value : "–"}
        </span>
      </div>
    </div>
  );
}
