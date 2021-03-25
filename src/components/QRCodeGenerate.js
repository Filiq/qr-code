//Styles
import "../styles/generate-translate.scss";
//React
import { useState, useRef } from "react";
//Axios
import axios from "axios";

const QRCodeGenerate = () => {
  const [focusEl, setFocusEl] = useState(false);
  const [warning, setWarning] = useState(false);
  const [text, setText] = useState("");
  const image = useRef(null);

  const textareaHandler = (e) => {
    setText(e.target.value);
  };

  const generate = async () => {
    const data = await axios.get(
      `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=800x800`
    );

    image.current.src = data.config.url;
  };

  return (
    <div className="generate">
      <div className="input-container">
        <h2>Generate the Code</h2>
        <div>
          <label htmlFor="content">Text to Generate</label>
          <textarea
            name="content"
            id="content"
            onFocus={() => setFocusEl(true)}
            onBlur={() => setFocusEl(false)}
            onChange={textareaHandler}
            value={text}
            className={warning ? "warning" : ""}
          ></textarea>
          <button
            className={focusEl ? "active" : warning ? "warning" : ""}
            onClick={() => {
              if (text === "") {
                setWarning(true);
                setTimeout(() => {
                  setWarning(false);
                }, 750);
              } else {
                generate();
              }
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="qr-code-container">
        <img src="" alt="" ref={image} />
      </div>
    </div>
  );
};

export default QRCodeGenerate;
