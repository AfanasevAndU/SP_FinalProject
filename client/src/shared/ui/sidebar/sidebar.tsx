import React from "react";
import { SidebarProps } from "./sidebar.types";
import { SidebarContainer, SidebarItem } from "./sidebar.styles";
import { Button } from "../button";

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <SidebarContainer>
      <h2>Избранное: </h2>
      <SidebarItem>
        <Button>123</Button>
      </SidebarItem>
      <SidebarItem>
        <Button>1233</Button>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
