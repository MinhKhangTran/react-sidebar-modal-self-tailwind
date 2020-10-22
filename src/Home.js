import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Home() {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <div className="border h-screen grid place-items-center">
      <button className="p-4 fixed" onClick={openSidebar}>
        <FaBars className="text-indigo-600 text-4xl" />
      </button>
      <button
        className="bg-indigo-600 text-indigo-200 px-2 py-1 rounded"
        onClick={openModal}
      >
        show modal
      </button>
    </div>
  );
}
