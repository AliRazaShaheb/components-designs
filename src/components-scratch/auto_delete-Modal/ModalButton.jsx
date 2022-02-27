import { useState } from "react";
import Modal from "./Modal";
import "./modalStyle.css";

function ModalButton() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  return (
    <div className="container">
      {showModal && <Modal />}

      <button className="button-34" onClick={showModalHandler}>
        Show Modal
      </button>
    </div>
  );
}

export default ModalButton;
