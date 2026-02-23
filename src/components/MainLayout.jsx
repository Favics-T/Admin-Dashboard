import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const MainLayout = () => {
  return (
    <div className="bg-[#F4F5F9] w-full text-[#3A3541] lato   min-h-screen justify-center  flex ">
      
      {/* Sidebar */}
      <aside className="hidden md:block md:w-[18%] sticky top-0 h-screen overflow-y-auto">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 px-4 py-8 md:px-6 md:gap-8">
        <NavBar />
        <div className="flex-1  overflow-auto flex md:justify-start justify-center items-center">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default MainLayout
