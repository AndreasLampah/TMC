import { connectAccessDB } from "../config/accessDBSolution.js";
import { getDataHarian } from "../utils/date.js";

// MS Access butuh literal tanggal dibungkus #...#
const toAccessDateLiteral = (date) => {
  const pad = (n) => String(n).padStart(2, "0");
  const mm = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const yyyy = date.getFullYear();
  const hh = pad(date.getHours());
  const mi = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `#${mm}/${dd}/${yyyy} ${hh}:${mi}:${ss}#`;
};

export const getAttendance = async (dateStr = null) => {
  let connection;

  const { start, end } = getDataHarian(dateStr);
  const startLiteral = toAccessDateLiteral(start);
  const endLiteral = toAccessDateLiteral(end);

  try {
    connection = await connectAccessDB();

    const result = await connection.query(`
        SELECT
        U.USERID,
        U.Name,
        U.Badgenumber,
        C.CHECKTIME,
        C.CHECKTYPE
      FROM USERINFO U
      INNER JOIN CHECKINOUT C
        ON U.USERID = C.USERID
      WHERE C.CHECKTIME >= ${startLiteral} AND C.CHECKTIME < ${endLiteral}
      ORDER BY C.CHECKTIME DESC
`);

    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};
