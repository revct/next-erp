import { useRouter } from "next/dist/client/router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props: any) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header></Header>
      <section className="flex flex-row flex-auto">
        <main className="flex-auto p-4 bg-gray-50">{props.children}</main>
      </section>
    </section>
  );
};

export default Layout;
