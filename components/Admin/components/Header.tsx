import Image from "next/image";
import { Icon } from "@iconify/react";
import useUserStore from "@/store/user";

interface Props {
  className?: string;
}

const Header = (props: Props) => {
  const user = useUserStore();
  return (
    <header className={`navbar shadow-lg bg-white rounded ${props.className}`}>
      <div className="flex-none hidden lg:flex">
        <button className="btn btn-square btn-ghost">
          <Icon icon="mdi:menu" fontSize={24}></Icon>
        </button>
      </div>
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <span className="text-lg font-bold">DaisyUI</span>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost"
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Icon icon="charm:search" fontSize={24}></Icon>
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Icon icon="akar-icons:bell" fontSize={24}></Icon>
        </button>
      </div>
      <div className="flex-none">
        <div className="avatar overflow-hidden rounded-full m-1">
          <Image
            className=""
            width={40}
            height={40}
            src={user.info.avatarUrl}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
