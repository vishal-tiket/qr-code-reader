import { QrReader } from "react-qr-reader";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    console.log(`loaded data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <QrReader
        facingMode={"environment"}
        delay={1000}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "300px" }}
      />
      {data !== "" && <p>{data}</p>}
    </div>
  );
}
