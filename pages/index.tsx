import Layout from "../components/Layout";

interface MenuProps {
  label?: string;
  name?: string;
  path?: string;
  icon?: unknown;
}

const Home = () => {
  const menus = [
    {
      label: "客户管理",
      name: "客户管理",
      path: "/customers",
      icon: "",
    },
  ] as MenuProps[];
  return (
    <Layout>
      <div className="flex p-2">
        {menus.map((item) => (
          <a
            className="block p-2 border-gray-400 border rounded"
            key={item.name}
            href={item.path}
          >
            {item.label}
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
