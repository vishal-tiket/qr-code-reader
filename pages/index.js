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
      {/* <QrReader
        facingMode={"environment"}
        delay={1000}
        onError={handleError}
        onResult={handleScan}
        style={{ width: "100%", height: "auto" }}
      /> */}

      <QrReader
        facingMode={"user"}
        delay={1000}
        onError={handleError}
        onResult={handleScan}
        style={{ width: "100%", height: "auto" }}
      />

      {data !== "" && (
        <p style={{ width: "300px", margin: "auto", wordBreak: "break-all" }}>
          {JSON.stringify(data)}
        </p>
      )}
    </div>
  );
}
