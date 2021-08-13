import { menuAtom } from "@/store/config";
import { CONFIG, MENUS } from "@/store/constant";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Sidebar = () => {
  const { asPath } = useRouter();
  const menus = MENUS;
  const config = CONFIG;
  return (
    <div className="w-64 h-screen px-4 bg-white dark:bg-gray-800 dark:border-gray-600 hidden sm:block">
      <h2 className="text-2xl text-gray-800 dark:text-white p-4">
        {config.appName}
      </h2>
      <div className="flex flex-col justify-between">
        <nav className="flex flex-col gap-1">
          {menus.map((menu) => {
            const isActive = asPath === menu.path;
            return (
              <Link href={menu.path} key={menu.key} passHref>
                <a
                  className={[
                    "flex items-center p-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 transform transition-colors duration-200 ",
                    isActive
                      ? "text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                      : "text-gray-700 dark:text-gray-400",
                    "   ",
                  ].join(" ")}
                >
                  <div className="inline-block h-4 w-4">
                    <span className="iconify" data-icon={menu.icon}></span>
                  </div>
                  <span className="mx-2 text-sm font-normal">{menu.name}</span>
                </a>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
