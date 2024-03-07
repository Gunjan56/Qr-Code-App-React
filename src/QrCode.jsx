import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {text !== "" && <QRCode value={text} />}
    </div>
  );
};

export default QrCode;
