import { FaHome, FaFileAlt, FaChevronUp } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";

export const sidebarList = [
  {
    title: "Home",
    icon: FaHome,
    children: [
      { 
        title: "Dashboard",
         path: "/home" 
      },
      { 
        title: "Analytics", 
        path: "/home/analytics"
       },
    ],
  },
  {
    title: "Pages",
    icon: FaFileAlt,
    children: [
      {
        title: "Profile",
        children: [
          { title: "Profile Overview", path: "/pages/profileoverview" },
          { title: "Teams", path: "/pages/teams" },
          { title: "All Projects", path: "/pages/allprojects" },
        ],
      },
      {
        title: "Users",
        children: [
          { title: "Reports", path: "/reports" },
          { title: "New User", path: "/newuser" },
        ],
      },
      {
        title: "Account",
        children: [
          { title: "Setting", path: "/setting" },
          { title: "Billing", path: "/billing" },
          { title: "Invoice", path: "/invoice" },
          { title: "Security", path: "/security" },
        ],
      },
      {
        title: "Projects",
        children: [
          { title: "General", path: "/general" },
          { title: "Timeline", path: "/timeline" },
          { title: "New Project", path: "/newproject" },
        ],
      },
      { title: "Pricing page", path: "/pricingpage" },
      { title: "Charts", path: "/charts" },
      { title: "Notification", path: "/notification" },
      { title: "Chat", path: "/chat" },
    ],
  },
  {
    title: "Applications",
    icon: FaChevronUp,
    children: [
      { title: "Kanban", path: "/kanban" },
      { title: "Wizard", path: "/path" },
      { title: "Data Tables", path: "/datatables" },
      { title: "Calendar", path: "/calendar" },
    ],
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
              { title: "Edit Product", path: "/editproduct" },
            ],
          },
        ],
      },
      {
        title: "Orders",
        children: [
          { title: "Order list", path: "/orderlist" },
          { title: "Order Detail", path: "/orderdetail" },
        ],
      },
    ],
  },
  { title: "Authentication", icon: AiOutlineSafety },
];
