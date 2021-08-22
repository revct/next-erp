import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SupplierInput from "../Contact/SupplierInput";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SupplierModal = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
            <div className="modal-box">
              <Dialog.Title as="header" className="text-lg font-bold">
                供应商选择
              </Dialog.Title>
              <br />
              <div className="">
                <SupplierInput></SupplierInput>
              </div>
              <footer className="modal-action">
                <div className="space-x-2">
                  <button className="btn btn-ghost" onClick={onClose}>
                    取消
                  </button>
                  <button className="btn btn-primary" onClick={onClose}>
                    确定
                  </button>
                </div>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default SupplierModal;
