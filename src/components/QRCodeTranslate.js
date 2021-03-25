//Styles
import "../styles/generate-translate.scss";
//React
import { useState, useRef, useEffect } from "react";
//Axios
import axios from "axios";
//QR code reader
import QrReader from "react-qr-reader";

const QRCodeTranslate = () => {
  const [result, setResult] = useState("");
  const qrReader = useRef(null);
  const image = useRef(null);

  const translate = (text) => {
    setResult(text);
  };

  const openImageDialog = () => {
    qrReader.current.openImageDialog();
  };

  useEffect(() => {
    if (result === "") return;

    const generate = async () => {
      const data = await axios.get(
        `https://api.qrserver.com/v1/create-qr-code/?data=${result}&size=800x800`
      );
      image.current.src = data.config.url;
      image.current.alt = result;
    };

    generate();
  }, [result, setResult]);

  return (
    <div className="translate">
      <div className="qr-code-container">
        <QrReader ref={qrReader} onScan={translate} legacyMode />
        <input
          type="button"
          value="Please upload the QR code."
          onClick={openImageDialog}
        />
        <img src="" alt="" ref={image} />
      </div>
      <div className="input-container">
        <h2>Translate the Code</h2>
        <div>
          <label htmlFor="content">Text from the Code</label>
          <textarea
            name="content"
            id="content"
            disabled
            value={result}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default QRCodeTranslate;
