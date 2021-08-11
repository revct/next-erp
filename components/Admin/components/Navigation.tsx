import { menuAtom } from "@/store/config";
import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Navigation = () => {
  const { asPath } = useRouter();
  const [menus] = useAtom(menuAtom);
  return (
    <div className="bg-white h-full dark:bg-gray-700">
      <div className="flex items-center justify-start pt-6 ml-8">
        <p className="font-bold dark:text-white text-xl">Plannifer</p>
      </div>
      <nav className="mt-6">
        <div>
          {menus.map((menu) => {
            const isActive = asPath === menu.path;
            return (
              <Link href={menu.path} key={menu.key} passHref>
                <a
                  className={[
                    "w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4",
                    isActive
                      ? "text-gray-800 dark:text-white border-purple-500"
                      : "text-gray-400 hover:text-gray-800 border-transparent",
                    "   ",
                  ].join(" ")}
                >
                  <div className="inline-block h-4 w-4">
                    <span className="iconify" data-icon={menu.icon}></span>
                  </div>
                  <span className="mx-2 text-sm font-normal">
                    {menu.name}
                    {/* <span className="p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs">
                0
              </span> */}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
