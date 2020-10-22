import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    // console.log("sidebar");
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
    // console.log("modal");
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        modalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
export { AppContext, AppProvider };
