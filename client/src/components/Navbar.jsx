import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-xl"
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg, #3B6D11, #639922)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline
                points="14 2 14 8 20 8"
                style={{
                  fill: "none",
                  stroke: "rgba(255,255,255,0.5)",
                  strokeWidth: 1.5,
                }}
              />
              <line
                x1="16"
                y1="13"
                x2="8"
                y2="13"
                style={{
                  fill: "none",
                  stroke: "rgba(255,255,255,0.7)",
                  strokeWidth: 1.5,
                }}
              />
              <line
                x1="16"
                y1="17"
                x2="8"
                y2="17"
                style={{
                  fill: "none",
                  stroke: "rgba(255,255,255,0.7)",
                  strokeWidth: 1.5,
                }}
              />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#639900",
                letterSpacing: "-0.3px",
              }}
            >
              ProResume AI
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#639922",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: -2,
              }}
            >
              Resume Builder
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden"> Hi, {user?.name}</p>
          <button
            onClick={logoutUser}
            className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active-scale-95 transition-all "
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
