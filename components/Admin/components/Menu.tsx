import { CONFIG, MENUS } from "@/store/constant";
import { Icon } from "@iconify/react";
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
      <div className="text-2xl font-bold flex items-center justify-center h-[64px]">{config.appName}</div>
      <ul className="menu p-4 gap-2">
        {menus.map((menu) => {
          const isActive = asPath === menu.path;
          return (
            <li key={menu.key}>
              <Link href={menu.path} passHref>
                <a className={`${isActive ? "active" : ""}`}>
                  <div className="inline-block h-4 w-4">
                    <Icon icon={menu.icon} fontSize={16}></Icon>
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
