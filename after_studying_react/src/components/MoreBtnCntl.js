import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const MoreBtnCntl = (props) => {
  const { expended, onClick } = props;

  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <Button className="more-btn" type="button" onClick={handleClick}>
      {expended ? (
        <span className="btn-title">숨기기</span>
      ) : (
        <span className="btn-title">더보기</span>
      )}
    </Button>
  );
};

export default MoreBtnCntl;