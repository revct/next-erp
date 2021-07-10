import { useRouter } from "next/dist/client/router";
import { FunctionComponent } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout: FunctionComponent<IProps> = (props) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header></Header>
      <section className="flex flex-row flex-auto">
        <main className={`flex-auto p-4 bg-gray-50 ${props.className}`}>
          {props.children}
        </main>
      </section>
    </section>
  );
};

export default Layout;
