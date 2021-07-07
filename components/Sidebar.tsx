import Link from "next/link";

const Sidebar = () => {
  const navList = [
    {
      name: "主页",
      path: "/",
    },
    {
      name: "客户管理",
      path: "/customers",
    },
  ];
  return (
    <nav className="px-6 h-screen bg-white w-72">
      {navList.map((item) => (
        <Link href={item.path} passHref key={item.name}>
          <button className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg w-full">
            <span className="mx-4 text-lg font-normal">{item.name}</span>
            <span className="flex-grow text-right"></span>
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
