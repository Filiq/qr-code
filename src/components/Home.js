//Styles
import "../styles/home.scss";
//Images
import qrcode from "../images/qrcode.png";

const Home = () => {
  return (
    <div className="home">
      <h2>What is QR code?</h2>
      <h5>some wikipedia...</h5>
      <div className="text-and-image">
        <div className="paragraphs">
          <p>
            A QR code (abbreviated from Quick Response code) is a type of matrix
            barcode (or two-dimensional barcode) first designed in 1994 for the
            automotive industry in Japan. A barcode is a machine-readable
            optical label that contains information about the item to which it
            is attached. In practice, QR codes often contain data for a locator,
            identifier, or tracker that points to a website or application. A QR
            code uses four standardized encoding modes (numeric, alphanumeric,
            byte/binary, and kanji) to store data efficiently; extensions may
            also be used.
          </p>
          <p>
            The Quick Response system became popular outside the automotive
            industry due to its fast readability and greater storage capacity
            compared to standard UPC barcodes. Applications include product
            tracking, item identification, time tracking, document management,
            and general marketing.
          </p>
          <p>
            A QR code consists of black squares arranged in a square grid on a
            white background, which can be read by an imaging device such as a
            camera, and processed using Reed–Solomon error correction until the
            image can be appropriately interpreted. The required data is then
            extracted from patterns that are present in both horizontal and
            vertical components of the image.
          </p>
        </div>
        <div className="image">
          <img src={qrcode} alt="QR code" />
        </div>
      </div>
    </div>
  );
};

export default Home;
