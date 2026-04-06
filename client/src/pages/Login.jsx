import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";
import Banner from "../components/home/Banner";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";
import api from "../configs/api";

const Login = () => {
  const [searchParams] = useSearchParams();
  const urlState = searchParams.get("state");
  const dispatch = useDispatch();
  const [state, setState] = React.useState(urlState || "login");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT - MODERN RESUME PREVIEW */}
        <div className="hidden lg:flex w-2/3 items-center justify-center bg-gradient-to-br from-green-100 to-white ">
          <div className="relative">
            <img
              src="/resume.png"
              alt="Modern Resume Template"
              className="w-[550px] h-[600px]"
            />

            {/* Premium Tag */}
            <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
              Premium Template
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-50 p-6">
          <form
            onSubmit={handleSubmit}
            className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-sm"
          >
            <h1 className="text-gray-900 text-3xl mt-10 font-medium">
              {state === "login" ? "Login" : "Sign up"}
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Please {state} to continue
            </p>

            {state !== "login" && (
              <div className="flex items-center mt-6 w-full border h-12 rounded-full pl-6 gap-2 focus-within:border-blue-500">
                <User2Icon size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="flex items-center w-full mt-4 border h-12 rounded-full pl-6 gap-2">
              <Mail size={14} />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                className="w-full h-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center mt-4 w-full border h-12 rounded-full pl-6 gap-2">
              <Lock size={14} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition"
            >
              {state === "login" ? "Login" : "Sign up"}
            </button>

            <p
              onClick={() =>
                setState((prev) => (prev === "login" ? "register" : "login"))
              }
              className="text-gray-500 text-sm mt-4 mb-10 cursor-pointer"
            >
              {state === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span className="text-green-500">Click here</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
