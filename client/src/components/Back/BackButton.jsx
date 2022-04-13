import { useNavigate } from "react-router";
import "./BackButton.css";

export default function BackButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <div>
      <button className="back-button" onClick={handleClick}>
        Back
      </button>
    </div>
  );
}
