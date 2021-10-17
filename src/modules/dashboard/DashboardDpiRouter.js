import React from "react";
import CalendarRouter from "./components/CalendarRouter";
import CardsRouter from "./components/CardsRouter";
import FooterRouter from "./components/FooterRouter";
import SidebarRouter from "./components/SidebarRouter";
import ToolbarRouter from "./components/ToolbarRouter";

const DashboardDpiRouter = () => {
  return (
    <>
      <header className="app-header fixed-top">
        <ToolbarRouter />
        <SidebarRouter  />
      </header>
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <div className="row g-4 mb-4 mt-5">
              <CardsRouter />
            </div>
            <div className="row g-4 mb-4">
              <CalendarRouter />
            </div>
          </div>
        </div>
        <footer className="app-footer">
          <FooterRouter />
        </footer>
      </div>
    </>
  );
};

export default DashboardDpiRouter;
