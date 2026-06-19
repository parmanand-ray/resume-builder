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

      <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* LEFT SECTION */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-12">
          <div className="max-w-lg space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Build a Resume That{" "}
              <span className="text-green-600">Gets You Hired</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Create ATS-friendly resumes in minutes with modern templates and
              smart suggestions.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>✔ Professional Templates</p>
              <p>✔ Instant PDF Download</p>
              <p>✔ ATS Optimized Format</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-10">
            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
              {state === "login" ? "Welcome Back" : "Create Account"}
            </h1>

            <p className="text-center text-gray-500 text-sm mt-2">
              {state === "login"
                ? "Login to continue your journey"
                : "Sign up and start building resumes"}
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {/* NAME */}
              {state !== "login" && (
                <div className="flex items-center gap-3 px-4 h-12 rounded-xl border border-gray-300 bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition">
                  <User2Icon size={18} className="text-green-600" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full h-full bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>
              )}

              {/* EMAIL */}
              <div className="flex items-center gap-3 px-4 h-12 rounded-xl border border-gray-300 bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition">
                <Mail size={18} className="text-green-600" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full h-full bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="flex items-center gap-3 px-4 h-12 rounded-xl border border-gray-300 bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition">
                <Lock size={18} className="text-green-600" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full h-full bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none"
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
                className={`w-full h-12 rounded-xl text-white font-medium transition flex items-center justify-center gap-2
                ${
                  loading
                    ? "bg-green-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        className="opacity-25"
                        fill="none"
                      />
                      <path
                        fill="white"
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    {state === "login"
                      ? "Logging in..."
                      : "Creating account..."}
                  </>
                ) : state === "login" ? (
                  "Login"
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

            {/* SWITCH */}
            <p
              onClick={() =>
                !loading &&
                setState((prev) => (prev === "login" ? "register" : "login"))
              }
              className={`text-center text-sm mt-6 text-gray-500 ${
                loading ? "pointer-events-none opacity-50" : "cursor-pointer"
              }`}
            >
              {state === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span className="text-green-600 font-medium">Click here</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
