import "./Modal.css";

export default function Modal({ modal, toggleModal }) {
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2> The recipe was created successfully!</h2>
            <button className="close-modal" onClick={toggleModal}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
