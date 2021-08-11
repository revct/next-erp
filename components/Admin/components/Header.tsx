import { useContext } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { userAtom } from "@/store/user";
interface Props {}

const Header = (props: Props) => {
  const [user] = useAtom(userAtom);
  return (
    <header className="w-full h-16 z-40 flex items-center justify-between">
      <div className="block lg:hidden ml-6">
        <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
          <span className="iconify" data-icon="ant-design:menu-outlined"></span>
        </button>
      </div>
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
          <button className="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">
            <span className="iconify" data-icon="akar-icons:link-chain"></span>
          </button>
          <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
            <span className="iconify" data-icon="bx:bxs-bell"></span>
          </button>
          <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
          <a href="#" className="block relative">
            <Image
              alt="profile"
              className="mx-auto object-cover rounded-full"
              src={user.avatarUrl}
              width={40}
              height={40}
            />
          </a>
          <button className="flex items-center text-gray-500 dark:text-white text-md space-x-2">
            <span>{user.nickname}</span>
            <span className="iconify" data-icon="ls:dropdown"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
