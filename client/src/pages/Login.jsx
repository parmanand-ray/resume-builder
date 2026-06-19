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

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      dispatch(login(data));
      localStorage.setItem("token", data.token);

      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
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

        {/* LEFT SIDE */}
        <div className="hidden lg:flex w-2/3 items-center justify-center bg-gradient-to-br from-green-100 to-white p-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Build a Resume That{" "}
              <span className="text-green-600">Gets You Hired</span>
            </h1>

            <p className="text-lg text-gray-600">
              Create professional, ATS-friendly resumes in minutes.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-gradient-to-br from-green-30 to-green-100 p-6">

          <form
            onSubmit={handleSubmit}
            className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 shadow-sm"
          >

            <h1 className="text-gray-900 text-3xl mt-10 font-medium">
              {state === "login" ? "Login" : "Sign up"}
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Please {state} to continue
            </p>

            {/* NAME */}
            {state !== "login" && (
              <div className="flex items-center mt-6 w-full border h-12 rounded-full pl-6 gap-2">
                <User2Icon size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-full bg-transparent outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
            )}

            {/* EMAIL */}
            <div className="flex items-center w-full mt-4 border h-12 rounded-full pl-6 gap-2">
              <Mail size={14} />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                className="w-full h-full bg-transparent outline-none"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center mt-4 w-full border h-12 rounded-full pl-6 gap-2">
              <Lock size={14} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-full bg-transparent outline-none"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`mt-6 w-full h-11 rounded-full text-white transition flex items-center justify-center gap-2
                ${
                  loading
                    ? "bg-green-300 cursor-not-allowed"
                    : "bg-green-500 hover:opacity-90"
                }
              `}
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      fill="white"
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>

                  {state === "login" ? "Logging in..." : "Creating account..."}
                </>
              ) : (
                state === "login" ? "Login" : "Sign up"
              )}
            </button>

            {/* SWITCH */}
            <p
              onClick={() =>
                !loading &&
                setState((prev) => (prev === "login" ? "register" : "login"))
              }
              className={`text-gray-500 text-sm mt-4 mb-10 ${
                loading ? "opacity-50 pointer-events-none" : "cursor-pointer"
              }`}
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
