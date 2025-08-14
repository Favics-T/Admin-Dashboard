import React, { createContext, useMemo } from "react";
import {
  FaHome,
  FaFileAlt,
  FaChevronUp
} from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export const SideBarContext = createContext();

const sidebarList = [
  {
    title: "Home",
    icon: FaHome,
    children: [
      { title: "Dashboard", path: "/home" },
      { title: "Analytics", path: "/analytics" }
    ]
  },
  {
    title: "Pages",
    icon: FaFileAlt,
    children: [
      {
        title: "Profile",
        children: [
          { title: "Profile Overview", path: "/profileoverview" },
          { title: "Teams", path: "/teams" },
          { title: "All Projects", path: "/allprojects" }
        ]
      },
      {
        title: "Users",
        children: [
          { title: "Reports", path: "/reports" },
          { title: "New User", path: "/newuser" }
        ]
      },
      {
        title: "Account",
        children: [
          { title: "Setting", path: "/setting" },
          { title: "Billing", path: "/billing" },
          { title: "Invoice", path: "/invoice" },
          { title: "Security", path: "/security" }
        ]
      },
      {
        title: "Projects",
        children: [
          { title: "General", path: "/general" },
          { title: "Timeline", path: "/timeline" },
          { title: "New Project", path: "/newproject" }
        ]
      },
      { title: "Pricing page", path: "/pricingpage" },
      { title: "Charts", path: "/charts" },
      { title: "Notification", path: "/notification" },
      { title: "Chat", path: "/chat" }
    ]
  },
  {
    title: "Applications",
    icon: FaChevronUp,
    children: [
      { title: "Kanban", path: "/kanban" },
      { title: "Wizard", path: "/path" },
      { title: "Data Tables", path: "/datatables" },
      { title: "Calendar", path: "/calendar" }
    ]
  },
  {
    title: "E-commerce",
    icon: LiaOpencart,
    children: [
      {
        title: "Overview",
        children: [
          {
            title: "Products",
            children: [
              { title: "New Product", path: "/newproduct" },
              { title: "Edit Product", path: "/editproduct" }
            ]
          }
        ]
      },
      {
        title: "Orders",
        children: [
          { title: "Order list", path: "/orderlist" },
          { title: "Order Detail", path: "/orderdetail" }
        ]
      }
    ]
  },
  { title: "Authentication", icon: AiOutlineSafety }
];

const generateMenuWithIds = (menu) =>
  menu.map((item) => ({
    ...item,
    id: uuidv4(),
    children: item.children ? generateMenuWithIds(item.children) : undefined
  }));

const SideBarProvider = ({ children }) => {
  const menuWithIds = useMemo(() => generateMenuWithIds(sidebarList), []);

  return (
    <SideBarContext.Provider value={{ menuWithIds }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
