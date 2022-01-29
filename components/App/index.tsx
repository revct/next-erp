import Header from "./components/Header";
import Navbar from "./components/Navbar";

interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App = (props: AppProps) => {
  return (
    <main className="h-screen overflow-hidden relative grid grid-cols-[200px_minmax(0,1fr)] grid-rows-[64px_minmax(0,1fr)] gap-4 p-4">
      <Header className="col-start-2"></Header>
      <Navbar className="col-start-1 row-start-1 row-span-full"></Navbar>
      <section className={`col-start-2 ${props.className || ""}`} {...props}>
        {props.children}
      </section>
    </main>
  );
};

export default App;
