import Image from "next/image";
import { Icon } from "@iconify/react";
import useUserStore from "~/store/user";
import useConfigStore from "~/store/config";
import { Menu } from "@mantine/core";
import { useRouter } from "next/router";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomHeader = (props: Omit<HeaderProps, "children">) => {
  const router = useRouter();
  const user = useUserStore();

  const config = useConfigStore();
  return (
    <nav
      {...props}
      className={`shadow-lg bg-white rounded-2xl flex items-center px-2 ${props.className} `}
    >
      <div className="">
        <button className="btn btn-square btn-ghost">
          <Icon icon="mdi:menu" fontSize={24}></Icon>
        </button>
      </div>
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{config.appName}</span>
      </div>

      <div className="">
        <button className="btn btn-square btn-ghost">
          <Icon icon="akar-icons:bell" fontSize={24}></Icon>
        </button>
      </div>
      <div className="">
        <Menu
          control={
            <button className="avatar overflow-hidden rounded-full m-1">
              <Image
                className=""
                width={40}
                height={40}
                src={user.info.avatarUrl}
                alt="avatar"
              />
            </button>
          }
        >
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item
            onClick={() => {
              router.push("/sign-in");
            }}
          >
            Sign out
          </Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default CustomHeader;
