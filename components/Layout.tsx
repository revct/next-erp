import { useRouter } from "next/dist/client/router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props: any) => {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
