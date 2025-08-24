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
          { 
            title: "Profile Overview",
             path: "/pages/profileoverview"
           },
          { 
            title: "Teams",
             path: "/pages/teams" 
          },
          { 
            title: "All Projects", 
            path: "/pages/allprojects"
           },
        ],
      },
      {
        title: "Users",
        children: [
          { title: "Reports", path: "/users/report" },
          { title: "New User", path: "users/newuser" },
        ],
      },
      {
        title: "Account",
        children: [
          { title: "Setting", path: "/pages/account/setting" },
          { title: "Billing", path: "/pages/account/billing" },
          { title: "Invoice", path: "/pages/account/invoice" },
          { title: "Security", path: "/pages/account/security" },
        ],
      },
      {
        title: "Projects",
        children: [
          { title: "General", path: "/pages/projects/general" },
          { title: "Timeline", path: "/pages/projects/timeline" },
          { title: "New Project", path: "/pages/projects/newproject" },
        ],
      },
      { title: "Pricing page", path: "/pages/pricingpage" },
      { title: "Charts", path: "/pages/charts" },
      { title: "Notification", path: "/pages/notification" },
      { title: "Chat", path: "/pages/chat" },
    ],
  },
  {
    title: "Applications",
    icon: FaChevronUp,
    children: [
      { title: "Kanban", path: "application/kanban" },
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
