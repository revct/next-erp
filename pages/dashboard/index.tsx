import Admin from "@/components/Admin";
import { userAtom } from "@/store/user";
import { useAtom } from "jotai";
import DashboardPanel from "./DashboardPanel";

const Dashboard = () => {
  const [user] = useAtom(userAtom);
  return (
    <Admin>
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        欢迎回来，{user.nickname}
      </h1>

      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
        <div className="flex items-center w-full md:w-1/2 space-x-4">
          <DashboardPanel
            value={100}
            icon="icon-park-outline:transaction-order"
            desc="订单数量"
          ></DashboardPanel>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 text-gray-400"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
          </svg>
          Last month
          <svg
            width="20"
            height="20"
            className="ml-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
          </svg>
        </button>
        <span className="text-sm text-gray-400">
          Compared to oct 1- otc 30, 2020
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Project Reffered
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                12
              </p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                22%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                <p>Unique URL</p>
                <div className="flex items-end text-xs">
                  34
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    22%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Embedded form</p>
                <div className="flex items-end text-xs">
                  13
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>New visitor</p>
                <div className="flex items-end text-xs">
                  45
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    41%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Project Paid
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                23
              </p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                12%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>User paid</p>
                <div className="flex items-end text-xs">
                  21
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    20%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Income</p>
                <div className="flex items-end text-xs">
                  10
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    2%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Royal tees</p>
                <div className="flex items-end text-xs">
                  434
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              New features
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                12
              </p>
              <span className="text-red-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3 rotate-180 transform"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                2%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Down</p>
                <div className="flex items-end text-xs">
                  34
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    22%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Up</p>
                <div className="flex items-end text-xs">
                  13
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>No developed</p>
                <div className="flex items-end text-xs">
                  45
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    41%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Sign in
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                16
              </p>
              <span className="text-red-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3 transform rotate-180"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                14%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Amercia</p>
                <div className="flex items-end text-xs">
                  43
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Europe</p>
                <div className="flex items-end text-xs">
                  133
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    19%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Asia</p>
                <div className="flex items-end text-xs">
                  23
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Sales
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">9</p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                34%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Templates</p>
                <div className="flex items-end text-xs">
                  345
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    12%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Components</p>
                <div className="flex items-end text-xs">
                  139
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    10%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Icons</p>
                <div className="flex items-end text-xs">
                  421
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Maintenance
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">
                15
              </p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                34%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Cloud</p>
                <div className="flex items-end text-xs">
                  123
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    22%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Infra</p>
                <div className="flex items-end text-xs">
                  134
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    9%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Office</p>
                <div className="flex items-end text-xs">
                  23
                  <span className="flex items-center">
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    41%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Dashboard;
