import React, { Fragment } from "react";
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
import { Dialog, Transition } from "@headlessui/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SupplierModal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen}>{props.children}</div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="header"
                className="text-lg font-bold leading-6 text-gray-900 px-6 py-4"
              >
                供应商选择
              </Dialog.Title>
              <div className="py-2 px-6">
                <div className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent your
                  an email with all of the details of your order.
                </div>
              </div>

              <footer className="px-6 py-4 text-right">
                <ButtonGroup>
                  <Button variant="ghost" onClick={onClose}>
                    取消
                  </Button>
                  <Button colorScheme="blue" onClick={onClose}>
                    确定
                  </Button>
                </ButtonGroup>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default SupplierModal;
