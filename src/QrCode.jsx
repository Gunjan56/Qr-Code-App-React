import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-10">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-8 bg-white text-black"
        />
      </form>
      {text !== "" && (
        <QRCode value={text} className="mt-5 ml-32 border-white" />
      )}
    </div>
  );
};

export default QrCode;
