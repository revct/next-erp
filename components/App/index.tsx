import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = (props: any) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative grid grid-cols-[200px_minmax(0,1fr)] grid-rows-[64px_minmax(0,1fr)] gap-4 p-4">
      <Header className="col-start-2 col-span-2"></Header>
      <Navbar className="col-start-1 row-start-1 row-span-2"></Navbar>
      <section className="col-start-2">{props.children}</section>
    </main>
  );
};

export default App;
