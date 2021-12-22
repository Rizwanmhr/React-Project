import React, { useState } from "react";
import ModalData from "./ModalData";
import "./Modal.css";
const Modal = () => {
  const [opentModal, setOpentModal] = useState(false);
  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button onClick={() => setOpentModal(true)}>Open</button>
      {opentModal && <ModalData setOpentModal={setOpentModal} />}
    </div>
  );
};

export default Modal;
