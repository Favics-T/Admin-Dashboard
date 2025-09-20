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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeIds, setActiveIds] = useState({});

  // function for sidebar toggling of children
const sidebarToggle = (id)=>{
  setActiveIds((prevId)=>({
    ...prevId, 
 // toggles only aative id
       [id]:!prevId[id]
  }))
}
  const menuWithIds = 
  useMemo(() => generateMenuWithIds(sidebarList), []);

  const toggleSidebar = useCallback(() => setSidebarOpen((p) => !p), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <SideBarContext.Provider
      value={{ menuWithIds, isSidebarOpen, toggleSidebar, closeSidebar, sidebarToggle,activeIds }}
    >
      {children}
    </SideBarContext.Provider>
  );};

export default SideBarProvider;
