import { useSessionStorageState } from "ahooks";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";

type LoginProps = {
  account: string;
  password: string;
};

const Login = () => {
  const [user, setUser] = useSessionStorageState("user", {
    account: "",
  });
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: LoginProps) => {
    setUser(data);
    router.push("/");
  };
  return (
    <div className="w-full h-screen font-sans bg-cover bg-gray-500">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="mb-8 text-2xl font-light text-center text-white">
                登录
              </p>
              <div className="mb-2">
                <div className="relative">
                  <input
                    {...register("account")}
                    type="text"
                    className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="账号"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative">
                  <input
                    {...register("password")}
                    type="password"
                    className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="密码"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2  rounded"
                >
                  登录
                </button>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm font-light align-baseline text-500 hover:text-gray-800"
                  onClick={() => {
                    alert("你见谁家ERP能开放注册的");
                  }}
                >
                  去注册
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
