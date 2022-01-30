import { Icon } from "@iconify/react";
import React from "react";

interface EmptyProps {
  children?: React.ReactNode;
}

const Empty = (props: EmptyProps) => {
  return (
    <div className="h-32 flex flex-col items-center justify-center space-y-4">
      <Icon icon="ep:message-box" fontSize={48}></Icon>
      <p className="text-base-content opacity-50">没有数据</p>
      {props.children}
    </div>
  );
};

export default Empty;
