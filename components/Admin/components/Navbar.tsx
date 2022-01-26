import useConfigStore from "@/store/config";
import { CONFIG, MENUS } from "@/store/constant";
import { Icon } from "@iconify/react";
import { Navbar, NavbarProps } from "@mantine/core";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const MyNavbar = (props: Omit<NavbarProps, "children">) => {
  const { asPath } = useRouter();
  const menus = MENUS;
  const config = useConfigStore();
  return (
    <Navbar
      {...props}
      className={`shadow-lg bg-base-100 ${props.className ?? ""}`}
      width={{ base: 200 }}
    >
      <Navbar.Section>
        <div className="text-2xl font-bold flex items-center justify-center h-[64px]">
          {config.appName}
        </div>
      </Navbar.Section>
      <Navbar.Section>
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
                    <span className="mx-2 text-sm font-normal">
                      {menu.name}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Navbar.Section>
    </Navbar>
  );
};

export default MyNavbar;
