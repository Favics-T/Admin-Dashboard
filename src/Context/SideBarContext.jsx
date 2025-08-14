import React, { createContext, useMemo, useState, useCallback } from "react";

import { v4 as uuidv4 } from "uuid";
import { sidebarList } from "../data/pages";

export const SideBarContext = createContext();


const generateMenuWithIds = (menu) =>
  menu.map((item) => ({
    ...item,
    id: uuidv4(),
    children: item.children ? generateMenuWithIds(item.children) : undefined,
  }));

const SideBarProvider = ({ children }) => {
  const menuWithIds = useMemo(() => generateMenuWithIds(sidebarList), []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => setSidebarOpen((p) => !p), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <SideBarContext.Provider
      value={{ menuWithIds, isSidebarOpen, toggleSidebar, closeSidebar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
