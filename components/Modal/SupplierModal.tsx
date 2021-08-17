import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SupplierModal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen}>{props.children}</div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>供应商选择</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button variant="ghost" onClick={onClose}>
                取消
              </Button>
              <Button colorScheme="blue" onClick={onClose}>
                确定
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SupplierModal;
