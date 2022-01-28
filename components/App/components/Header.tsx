import Image from "next/image";
import { Icon } from "@iconify/react";
import useUserStore from "~/store/user";
import useConfigStore from "~/store/config";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomHeader = (props: Omit<HeaderProps, "children">) => {
  const router = useRouter();
  const user = useUserStore();

  const config = useConfigStore();
  return (
    <nav
      {...props}
      className={`shadow-lg bg-base-100 rounded-box flex items-center gap-4 px-4 ${props.className} `}
    >
      <div className="flex-1">
        <span className="text-lg font-bold">{config.appName}</span>
      </div>

      <div className="">
        <Menu>
          <Menu.Button className="flex">
            <div className="avatar">
              <div className="rounded-full">
                <Image
                  width={40}
                  height={40}
                  src={user.info.avatarUrl}
                  alt="avatar"
                />
              </div>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="ul"
              className="absolute right-0 menu bg-base-100 rounded-box p-3 shadow-base-100 z-50"
            >
              <Menu.Item>
                {() => (
                  <li>
                    <Link href="/settings/profile" passHref>
                      <a>Settings</a>
                    </Link>
                  </li>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <li>
                    <Link href="/sign-in" passHref>
                      <a>Sign out</a>
                    </Link>
                  </li>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default CustomHeader;
