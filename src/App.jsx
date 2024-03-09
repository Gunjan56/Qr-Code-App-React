import "./App.css";
import QrCode from "./QrCode";

function App() {
  return (
    <>
      <h1 className="text-6xl">React QR Code APP</h1>
      <p className="text-3xl pt-10">Enter some Text To See QR Code</p>
      <QrCode />
    </>
  );
}

export default App;
