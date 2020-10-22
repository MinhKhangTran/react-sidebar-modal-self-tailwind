import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Modal() {
  const { closeModal, modalOpen } = useGlobalContext();
  return (
    <div
      className={`${
        modalOpen
          ? "modal fixed top-0 left-0 w-full h-screen grid place-items-center visible"
          : "modal fixed top-0 left-0 w-full h-screen grid place-items-center invisible"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="relative bg-gray-100 w-11/12 md:w-2/3 mx-auto rounded grid place-items-center h-64">
        <h1>Modal Content</h1>
        <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
          <FaTimes className="text-red-400 text-4xl" />
        </button>
      </div>
    </div>
  );
}
