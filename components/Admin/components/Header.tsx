import Image from "next/image";
import { Icon } from "@iconify/react";
import useUserStore from "@/store/user";
import { Header, HeaderProps } from "@mantine/core";

const MyHeader = (props: Omit<HeaderProps, "children">) => {
  const user = useUserStore();
  return (
    <Header
      {...props}
      className={`navbar shadow-lg bg-white rounded gap-2 ${props.className}`}
    >
      <div className="flex-none hidden lg:flex">
        <button className="btn btn-square btn-ghost">
          <Icon icon="mdi:menu" fontSize={24}></Icon>
        </button>
      </div>
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <span className="text-lg font-bold">DaisyUI</span>
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
    </Header>
  );
};

export default MyHeader;
