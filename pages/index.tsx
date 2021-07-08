import Layout from "../components/Layout/components/Layout";

interface MenuProps {
  label?: string;
  name?: string;
  path?: string;
  icon?: unknown;
  desc?: string;
}

const Home = () => {
  const menus = [
    {
      label: "客户管理",
      name: "客户管理",
      path: "/customers",
      icon: "clarity:users-solid",
      desc: "描述",
    },
    
  ] as MenuProps[];
  return (
    <Layout>
      <div className="flex flex-wrap gap-8">
        {menus.map((item) => (
          <div
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800 text-center"
            key={item.name}
          >
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <span
                  className="iconify w-full h-full"
                  data-icon={item.icon}
                  data-inline="false"
                ></span>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              {item.label}
            </h3>
            <p
              className="text-md text-gray-500 dark:text-gray-300 to-current"
              title={item.desc}
            >
              {item.desc}
            </p>
            <br />
            <a
              className="block bg-green-500 hover:bg-green-600 text-white py-1 w-full rounded"
              href={item.path}
            >
              进入
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
