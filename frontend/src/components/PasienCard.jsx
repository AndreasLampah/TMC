export default function PasienCard({
  title,
  value,
  icon
}){

  return(

    <div className="stats-card">

      <div className="card-top">

        <p>
          {title}
        </p>

        <span>
          {icon}
        </span>

      </div>

      <h2>
        {value}
      </h2>

      <p className="card-trend">

    ↑ realtime hari ini
  </p>

    </div>

  )
}