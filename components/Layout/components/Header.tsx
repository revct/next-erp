import Link from "next/link";
import { useSessionStorageState, useToggle } from "ahooks";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const menus = [
  {
    key: "person",
    name: "联系人管理",
    path: "/persons",
  },
  {
    key: "items",
    name: "物料管理",
    path: "/items",
  },
  {
    key: "stocks",
    name: "库存管理",
    path: "/stocks",
  },
  {
    key: "orders",
    name: "订单管理",
    path: "/orders",
  },
];

const Header = () => {
  const router = useRouter();
  const isActive = (path: string) => {
    return router.route === path;
  };
  const user = {
    account: "name",
  };

  const [open, { toggle }] = useToggle();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <button className="block flex-shrink-0">
                <span
                  className="iconify w-8 h-8 text-green-500"
                  data-icon="el:home-alt"
                  data-inline="false"
                ></span>
              </button>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {menus.map((item) => (
                  <a
                    key={item.key}
                    href={item.path}
                    className={`font-medium text-sm rounded-md px-3 py-2 ${
                      isActive(item.path)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="space-x-2 flex items-center justify-center">
            <a
              className="flex items-center justify-center w-8 h-8 text-gray-500 rounded hover:bg-gray-600 text-xl"
              href="/profile"
            >
              <span
                className="iconify"
                data-icon="fa-solid:user-circle"
                data-inline="false"
              ></span>
            </a>
            <a
              className="flex items-center justify-center w-8 h-8 text-gray-500 rounded hover:bg-gray-600 text-xl"
              href="/setting"
            >
              <span
                className="iconify"
                data-icon="feather:settings"
                data-inline="false"
              ></span>
            </a>
            <a
              className="flex items-center justify-center w-8 h-8 text-gray-500 rounded hover:bg-gray-600 text-xl"
              href="/exit"
            >
              <span
                className="iconify"
                data-icon="ic:twotone-exit-to-app"
                data-inline="false"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
