import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { SideBarContext } from "../Context/SideBarContext";
import { useAuth } from "../Context/useAuth";

const routeTitleMap = {
  "/home": "Dashboard",
  "/home/analytics": "Analytics",
  "/home/talents": "Talents",
  "/pages/profile/teams": "Profile/Team",
  "/pages/profile/profileoverview": "Profile/Profile Overview",
  "/pages/profile/allprojects": "Profile/All Projects",
  "/pages/users/newuser": "User/New User",
  "/pages/users/report": "User/Report",
  "/pages/account/setting": "Account/Setting",
  "/pages/account/billing": "Account/Billing",
  "/pages/account/invoice": "Account/Invoice",
  "/pages/account/security": "Account/Security",
  "/pages/projects/general": "Projects/General",
  "/pages/projects/timeline": "Projects/Timeline",
  "/pages/projects/newproject": "Projects/New Project",
  "/pages/pricingpage": "Pricing Page",
  "/pages/charts": "Charts",
  "/pages/notification": "Notifications",
  "/pages/chat": "Chat",
  "/application/kanban": "Kanban",
  "/application/wizard": "Wizard",
  "/application/datatables": "Data Tables",
  "/application/calendar": "Calendar",
  "/e-commerce/overview/orders/orderdetail": "Order Details",
  "/e-commerce/overview/orders/orderlist": "Order List",
  "/e-commerce/overview/products/newproduct": "New Product",
  "/e-commerce/overview/products/editproduct": "Edit Product",
};

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const { menuWithIds, sidebarToggle, activeIds, closeSidebar } = useContext(SideBarContext);
  const [view, setView] = useState(false);

  const title = routeTitleMap[pathname] || "Dashboard";

  const handleLogout = () => {
    logout();
    closeSidebar();
    setView(false);
    navigate("/login", { replace: true });
  };

  const renderMenu = (menu) => (
    <ul className="flex flex-col gap-2">
      {menu.map(({ id, title: menuTitle, children, path }) => (
        <li key={id} className="flex flex-col">
          <div
            onClick={() => children && sidebarToggle(id)}
            className="flex cursor-pointer items-center justify-between rounded px-3 py-2 hover:bg-gray-100"
          >
            {path ? (
              <Link
                to={path}
                className="text-sm text-[#3A3541]"
                onClick={() => {
                  closeSidebar();
                  setView(false);
                }}
              >
                {menuTitle}
              </Link>
            ) : (
              <span className="text-sm text-[#3A3541]">{menuTitle}</span>
            )}

            {children && (
              <span className="text-lg text-[#6E39CB]">{activeIds[id] ? "-" : "+"}</span>
            )}
          </div>

          {children && activeIds[id] && (
            <div className="ml-4 border-l border-[#EEEAF7] pl-3">{renderMenu(children)}</div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="relative flex w-full items-center justify-between gap-4 md:justify-start md:gap-10">
      <h1 className="whitespace-nowrap font-lato text-lg text-[#6E39CB] md:text-2xl">{title}</h1>

      <div className="hidden max-w-md flex-1 md:block">
        <input
          type="text"
          placeholder="Search anything here"
          className="w-full rounded-full border border-[#DBDCDE] bg-white px-4 py-2 text-sm text-gray-500 focus:border-[#6E39CB] focus:outline-none"
        />
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <p className="text-xs text-[#6E39CB]">{currentUser?.email ?? "Signed in"}</p>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md border border-[#6E39CB] px-3 py-1 text-sm text-[#6E39CB]"
        >
          Logout
        </button>
      </div>

      <button
        className="text-2xl text-[#6E39CB] md:hidden"
        aria-label="Toggle menu"
        onClick={() => setView(true)}
      >
        <LuMenu />
      </button>

      {view && (
        <div className="fixed inset-0 z-50 flex bg-black/50">
          <div className="flex h-full w-64 flex-col gap-4 overflow-y-auto bg-white p-4">
            <button
              className="self-end text-2xl text-[#6E39CB]"
              aria-label="Close menu"
              onClick={() => setView(false)}
            >
              <LuX />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500 focus:border-[#6E39CB] focus:outline-none"
            />

            <nav>{renderMenu(menuWithIds)}</nav>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-2 rounded-md border border-[#6E39CB] px-3 py-2 text-sm text-[#6E39CB]"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

