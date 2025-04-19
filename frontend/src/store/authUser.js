import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isCheckingAuth: true,

  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const res = await axios.post("/api/v1/auth/signup", credentials);
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      set({ user: res.data.user, isSigningUp: false });
      toast.success("Account created!");
    } catch (error) {
      console.error("Signup error:", error.response);
      toast.error(error.response?.data?.message || "Signup failed");
      set({ isSigningUp: false, user: null });
    }
  },

  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const res = await axios.post("/api/v1/auth/login", credentials);
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      set({ user: res.data.user, isLoggingIn: false });
    } catch (error) {
      console.error("Login error:", error.response);
      toast.error(error.response?.data?.message || "Login failed");
      set({ isLoggingIn: false, user: null });
    }
  },

  logout: async () => {
    set({ isLoggingOut: true });
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    set({ user: null, isLoggingOut: false });
    toast.success("Logged out");
  },

  authCheck: async () => {
    set({ isCheckingAuth: true });
    const token = localStorage.getItem("token");
    if (!token) {
      set({ user: null, isCheckingAuth: false });
      return;
    }

    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get("/api/v1/auth/authCheck");
      set({ user: res.data.user, isCheckingAuth: false });
    } catch (error) {
      console.error("AuthCheck error:", error.response);
      set({ user: null, isCheckingAuth: false });
    }
  },
}));
