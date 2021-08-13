import { Switch } from "@headlessui/react";
import { useState } from "react";

interface Props {}

const Header = (props: Props) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <header className="w-full z-40 flex items-center justify-between p-4 px-8">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </header>
  );
};

export default Header;
