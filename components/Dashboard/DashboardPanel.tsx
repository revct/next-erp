import React from "react";

interface Props {
  icon?: string;
  value?: string | number | null;
  desc?: string;
}

const DashboardPanel = (props: Props) => {
  return (
    <div className="w-1/2">
      <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
        <p className="text-2xl text-black dark:text-white font-bold">
          {props.value}
        </p>
        <p className="text-gray-400 text-sm">{props.desc}</p>
        <span className="rounded-full absolute p-2 bg-purple-500 top-2 right-4">
          <span
            className="iconify text-2xl text-white"
            data-icon={props.icon}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default DashboardPanel;
