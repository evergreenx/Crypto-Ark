import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import Logo from "../assets/img/cryptoark.svg";


export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={` fixed h-screen w-80 top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <img src={Logo} alt="logo" className="w-28" />

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr bg-orange-500 text-white shadow-md"
                >
                  <Icon name="home" size="2xl" />
                  Home
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="/cryptocurrencies"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr bg-orange-500  text-white shadow-md"
                >
                  <Icon name="euro" size="2xl" />
                  Cryptocurrencies
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/news"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr bg-orange-500 text-white shadow-md"
                >
                  <Icon name="map" size="2xl" />
                  News
                </NavLink>
              </li>
              {/* <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/exchanges"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr bg-orange-500 text-white shadow-md"
                >
                  <Icon name="toc" size="2xl" />
                  Exchanges
                </NavLink>
              </li> */}
             

              {/* <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/profile"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr bg-orange-500 text-white shadow-md"
                >
                  <Icon name="account_circle" size="2xl" />
                  Profile
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
