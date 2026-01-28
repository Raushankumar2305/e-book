import axios from "axios";

import api from "./api"; 

const API = "http://127.0.0.1:8000";




  // adjust path if needed

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const verifyOtp = (data) =>
  api.post("/auth/otp-verify", data);

export const resendOtp = (data) =>
  api.post("/auth/resend-otp", data);
