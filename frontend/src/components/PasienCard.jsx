import "../styles/PasienCard.css";

function formatNumber(value) {
  return new Intl.NumberFormat("id-ID").format(value ?? 0);
}

export default function PasienCard({ title, value, icon, variant, featured }) {
  const isCompact = variant === "lab" || variant === "poli";
  const isVital = variant === "vital";

  const classNames = [
    "pasien-card",
    isCompact && "pasien-card-compact",
    isVital && "pasien-card-vital",
    featured && "pasien-card-featured",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <div className="pasien-card-top">
        <span className="pasien-card-title">{title}</span>
        <span className="pasien-card-icon">{icon}</span>
      </div>

      <span className="pasien-card-value">{formatNumber(value)}</span>

      {isVital && <span className="pasien-card-tag">Kritis</span>}
      {featured && <span className="pasien-card-tag pasien-card-tag-live">Live</span>}
    </div>
  );
}