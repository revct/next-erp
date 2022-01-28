import useConfigStore from "~/store/config";
import { MENUS } from "~/store/constant";
import { Icon } from "@iconify/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar = (props: Omit<NavbarProps, "children">) => {
  const { asPath } = useRouter();
  const menus = MENUS;
  const config = useConfigStore();
  return (
    <nav
      {...props}
      className={`rounded-box shadow-lg bg-base-100 w-48 ${props.className ?? ""}`}
    >
      <div className="text-2xl font-bold flex items-center justify-center h-[64px]">
        {config.appName}
      </div>
      <section className={`flex flex-col p-4 gap-2 menu`}>
        {menus.map((menu) => {
          const isActive = asPath === menu.path;
          return (
            <Link href={menu.path} passHref key={menu.key}>
              <a
                className={`h-12  ${
                  isActive ? "bg-primary text-base-content" : "hover:bg-primary"
                } flex items-center justify-start rounded-lg px-4`}
              >
                <div className="inline-block h-4 w-4">
                  <Icon icon={menu.icon} fontSize={16}></Icon>
                </div>
                <span className="mx-2 text-sm font-normal">{menu.name}</span>
              </a>
            </Link>
          );
        })}
      </section>
    </nav>
  );
};

export default Navbar;
