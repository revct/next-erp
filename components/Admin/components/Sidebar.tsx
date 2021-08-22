import { menuAtom } from "@/store/config";
import { CONFIG, MENUS } from "@/store/constant";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Sidebar = () => {
  const { asPath } = useRouter();
  const menus = MENUS;
  const config = CONFIG;
  return (
    <ul className="w-48 menu shadow-lg h-screen bg-base-100 p-4 gap-2">
      <li className="text-2xl menu-title py-4">{config.appName}</li>
      {menus.map((menu) => {
        const isActive = asPath === menu.path;
        return (
          <li key={menu.key}>
            <Link href={menu.path} passHref>
              <a className={`${isActive ? "active" : ""}`}>
                <div className="inline-block h-4 w-4">
                  <span className="iconify" data-icon={menu.icon}></span>
                </div>
                <span className="mx-2 text-sm font-normal">{menu.name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
