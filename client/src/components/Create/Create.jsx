import BackButton from "../Back/BackButton";
import { Form } from "../Form/Form";
import "./Create.css";

export const Create = () => {
  return (
    <div className="create-container">
      <h2 className="create-title">Add your own recipe</h2>
      <div className="back-button-container">
        <BackButton />
      </div>
      <Form />
      <div className="div-bottom">.</div>
    </div>
  );
};
