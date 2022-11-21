import { useState } from "react";
import Modal from "react-modal";
import { Content } from "../../components/leftPanel/Content";
import { Button } from "../button";
import { Wrapper, CloseButton, ContainerModal } from "./styles";

const styles = {
  color: "rgb(99, 1, 204)",
  background: "white",
};

export const ModalComponent = () => {
  const customStyles = {
    content: {
      background: "#fcfcfc",
      paddingTop: "2.5rem",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContainerModal>
      <Button onClick={openModal} text={"Resumen"} width="100%" {...styles} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Content />
        <Wrapper>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </Wrapper>
      </Modal>
    </ContainerModal>
  );
};
