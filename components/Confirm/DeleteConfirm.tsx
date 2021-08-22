import { Popover, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  onConfirm: Function;
}

const DeleteConfirm = (props: IProps = { onConfirm: () => {} }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <Popover as={Fragment}>
      <Popover.Button as={Fragment}>{props.children}</Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel>
          <div className="modal-box absolute z-10">
            <div>123</div>
            <div className="text-right space-x-2">
              <button className="btn btn-ghost">取消</button>
              <button
                className={`btn btn-primary ${isLoading ? "loading" : ""}`}
              >
                确定
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default DeleteConfirm;
