import { AppShell } from "@mantine/core";
import MyHeader from "./components/Header";
import MyNavbar from "./components/Navbar";

const App = (props: any) => {
  return (
    <AppShell
      navbar={<MyNavbar fixed></MyNavbar>}
      header={<MyHeader height={64}></MyHeader>}
    >
      {props.children}
    </AppShell>
  );
};

export default App;
