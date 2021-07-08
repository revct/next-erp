import { Menu, MenuItem, Divider } from "@blueprintjs/core";

import { useToggle } from "ahooks";

const Sidebar = () => {
  const [open, { toggle }] = useToggle(false);
  return (
    <Menu>
      <MenuItem icon="new-text-box" text="New text box" />
      <MenuItem icon="new-object" text="New object" />
      <MenuItem icon="new-link" text="New link" />
      <Divider></Divider>
      <MenuItem text="Settings..." icon="cog">
        <MenuItem icon="tick" text="Save on edit" />
        <MenuItem icon="blank" text="Compile on edit" />
      </MenuItem>
    </Menu>
  );
};

export default Sidebar;
