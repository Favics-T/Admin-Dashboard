import { FaHome, FaFileAlt, FaChevronUp } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";
import { path } from "framer-motion/client";

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
             path: "/pages/profile/profileoverview"
           },
          { 
            title: "Teams",
             path: "/pages/profile/teams" 
          },
          { 
            title: "All Projects", 
            path: "/pages/profile/allprojects"
           },
        ],
      },
      {
        title: "Users",
        children: [
          { title: "Reports", path: "/pages/users/report" },
          { title: "New User", path: "/pages/users/newuser" },
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
      { title: "Kanban", path: "/application/kanban" },
      { title: "Wizard", path: "/application/wizard" },
      { title: "Data Tables", path: "/application/datatables" },
      { title: "Calendar", path: "/application/calendar/Calendar" },
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
              { title: "New Product", path: "e-commerce/overview/products/newproduct" },
              { title: "Edit Product", path: "e-commerce/overview/products/editproduct" },
            ],
          },
        ],
      },
      {
        title: "Orders",
        children: [
          { title: "Order list", path: "/e-commerce/overview/orders/orderlist" },
          { title: "Order Detail", path: "/e-commerce/overview/orders/orderdetail" },
        ],
      },
    ],
  },
  { title: "Authentication",
     icon: AiOutlineSafety,
    children:[
      {title:"Login", path:'/login'},
      {title:"Sign Up", path:"/signup"}
    ] },
];
