import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";

export default function Sidebar() {
  const { closeSidebar, sidebarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        sidebarOpen
          ? "bg-gray-200 md:w-1/3 fixed top-0 left-0 w-full h-screen transform translate-x-0 transition transition-all duration-300 ease-in-out"
          : "bg-gray-200 md:w-1/3 fixed top-0 left-0 w-full h-screen transform -translate-x-full transition transition-all duration-300 ease-in-out"
      }`}
    >
      <div className="flex justify-around">
        <img src={logo} alt="logo" />
        <button onClick={closeSidebar}>
          <FaTimes className="text-red-400 text-4xl" />
        </button>
      </div>
      <section
        className="flex flex-col justify-between"
        style={{ height: "90vh" }}
      >
        <div>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <a
                href={url}
                key={id}
                className="grid items-center"
                style={{ gridTemplateColumns: "1.5rem 1fr" }}
              >
                {icon}
                {text}
              </a>
            );
          })}
        </div>
        <div className="flex justify-center">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <a
                href={url}
                key={id}
                className="grid items-center"
                style={{ gridTemplateColumns: "1.5rem 1fr" }}
              >
                {icon}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
