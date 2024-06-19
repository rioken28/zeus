import { Outlet } from "react-router-dom";
import "./contentMain.css";
import { LiaBarsSolid } from "react-icons/lia";
import Sidebar from "../../components/dashboard/bashboard";

export function ContentMain() {
  return (
    <div className="contentMain">
        <div className="main-content-top">
            <div className="content-top-left">
                <button type="button" className="sidebar-toggler">
                  <LiaBarsSolid className="icon-bar-content-top" />
                </button>
            </div>
          <div className="content-top-btns"></div>
        </div>

        <div className="main">
          <Outlet />
        </div>
    </div>
  );
}

