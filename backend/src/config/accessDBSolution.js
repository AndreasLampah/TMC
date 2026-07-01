import odbc from "odbc";

const connectionString =
  "Driver={Microsoft Access Driver (*.mdb, *.accdb)};" +
  "Dbq=C:\\Program Files (x86)\\Solution\\att2000.mdb;";

export const connectAccessDB = async () => {
  return await odbc.connect(connectionString);
};
