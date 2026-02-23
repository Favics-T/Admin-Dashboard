import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./Authentication/AuthLayout";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import SplashCard from "./Authentication/components/SplashCard";
import MainLayout from "./components/MainLayout";
import { ProtectedRoute, PublicOnlyRoute } from "./components/RouteGuards";
import { useAuth } from "./Context/useAuth";
import DataTables from "./pages/Application/DataTables/DataTables";
import Kanban from "./pages/Application/Kanban/Kanban";
import Calendar from "./pages/Application/calendar/Calendar";
import Wizard from "./pages/Application/Wizard/Wizard";
import Analytics from "./pages/Home/Analytics";
import Dashboard from "./pages/Home/Dashboard";
import EditProducts from "./pages/ECommerce/Overview/Products/EditProducts";
import OrderDetail from "./pages/ECommerce/Orders/OrderDetail";
import OrderList from "./pages/ECommerce/Orders/OrderList";
import Product from "./pages/ECommerce/NewProduct/Product";
import Billing from "./pages/Pages/Account/Billing";
import Invoice from "./pages/Pages/Account/Invoice";
import Security from "./pages/Pages/Account/Security";
import Setting from "./pages/Pages/Account/Setting";
import Chat from "./pages/Pages/Chat/Chat";
import Notification from "./pages/Pages/Notification";
import PricingPage from "./pages/Pages/PricingPage";
import AllProjects from "./pages/Pages/Profile/AllProjects";
import ProfileOverview from "./pages/Pages/Profile/ProfileOverview";
import Teams from "./pages/Pages/Profile/Teams";
import General from "./pages/Pages/Projects/General";
import NewProject from "./pages/Pages/Projects/NewProject";
import Timeline from "./pages/Pages/Projects/Timeline";
import NewUser from "./pages/Pages/Users/NewUser";
import Report from "./pages/Pages/Users/Report";
import Chart from "./pages/Pages/Chart";
import Talents from "./pages/talent/components/Talents";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/signup"} replace />} />
        <Route path="/welcome" element={<SplashCard />} />

        <Route
          element={
            <PublicOnlyRoute>
              <AuthLayout />
            </PublicOnlyRoute>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Dashboard />} />
          <Route path="/home/analytics" element={<Analytics />} />
          <Route path="/home/talents" element={<Talents />} />

          <Route path="/pages/profile/profileoverview" element={<ProfileOverview />} />
          <Route path="/pages/profile/teams" element={<Teams />} />
          <Route path="/pages/profile/allprojects" element={<AllProjects />} />

          <Route path="/pages/users/report" element={<Report />} />
          <Route path="/pages/users/newuser" element={<NewUser />} />

          <Route path="/pages/account/setting" element={<Setting />} />
          <Route path="/pages/account/billing" element={<Billing />} />
          <Route path="/pages/account/invoice" element={<Invoice />} />
          <Route path="/pages/account/security" element={<Security />} />

          <Route path="/pages/charts" element={<Chart />} />
          <Route path="/pages/notification" element={<Notification />} />
          <Route path="/pages/chat" element={<Chat />} />

          <Route path="/pages/projects/general" element={<General />} />
          <Route path="/pages/projects/timeline" element={<Timeline />} />
          <Route path="/pages/projects/newproject" element={<NewProject />} />
          <Route path="/pages/pricingpage" element={<PricingPage />} />

          <Route path="/application/kanban" element={<Kanban />} />
          <Route path="/application/wizard" element={<Wizard />} />
          <Route path="/application/datatables" element={<DataTables />} />
          <Route path="/application/calendar" element={<Calendar />} />

          <Route path="/e-commerce/overview/products/newproduct" element={<Product />} />
          <Route path="/e-commerce/overview/products/editproduct" element={<EditProducts />} />
          <Route path="/e-commerce/overview/orders/orderlist" element={<OrderList />} />
          <Route path="/e-commerce/overview/orders/orderdetail" element={<OrderDetail />} />
        </Route>

        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/signup"} replace />} />
      </Routes>
    </Router>
  );
};

export default App;

