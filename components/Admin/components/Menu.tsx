import { menuAtom } from "@/store/config";
import { CONFIG, MENUS } from "@/store/constant";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface MenuProps {
  className?: string;
}

const Menu = (props: MenuProps) => {
  const { asPath } = useRouter();
  const menus = MENUS;
  const config = CONFIG;
  return (
    <aside className={`shadow-lg h-screen bg-base-100 ${props.className}`}>
      <ul className="menu p-4 gap-2">
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
    </aside>
  );
};

export default Menu;
