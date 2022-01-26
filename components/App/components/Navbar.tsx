import useConfigStore from "~/store/config";
import { MENUS } from "~/store/constant";
import { Icon } from "@iconify/react";
import { Navbar, NavbarProps, ScrollArea, UnstyledButton } from "@mantine/core";
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
        <ScrollArea>
          <section className={`flex flex-col p-4 gap-2`}>
            {menus.map((menu) => {
              const isActive = asPath === menu.path;
              return (
                <Link href={menu.path} passHref key={menu.key}>
                  <a
                    className={`h-12  ${
                      isActive ? "bg-primary text-white" : "hover:bg-gray-200"
                    } flex items-center justify-start rounded-lg px-4`}
                  >
                    <div className="inline-block h-4 w-4">
                      <Icon icon={menu.icon} fontSize={16}></Icon>
                    </div>
                    <span className="mx-2 text-sm font-normal">
                      {menu.name}
                    </span>
                  </a>
                </Link>
              );
            })}
          </section>
        </ScrollArea>
      </Navbar.Section>
    </Navbar>
  );
};

export default MyNavbar;
