import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Admin = (props: any) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <Sidebar></Sidebar>
        <div className="flex-1 flex flex-col w-full">
          <Header></Header>
          <div className="h-screen p-4">{props.children}</div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
