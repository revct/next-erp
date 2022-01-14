import Header from "./components/Header";
import Menu from "./components/Menu";

const Admin = (props: any) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative grid grid-cols-[200px_minmax(0,1fr)] grid-rows-[64px_minmax(0,1fr)]">
      <Header className="col-start-2"></Header>
      <Menu className="col-span-1 col-start-1 row-start-1"></Menu>
      <section className="col-start-2 p-4">{props.children}</section>
    </main>
  );
};

export default Admin;
