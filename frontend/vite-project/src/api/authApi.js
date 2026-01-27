import axios from "axios";

const API = "http://127.0.0.1:8000";

export const registerUser = (data) => axios.post(`${API}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API}/auth/login`, data);
export const verifyOtp = (data) => axios.post(`${API}/auth/otp-verify`, data);
export const resendOtp = (data) => axios.post(`${API}/auth/resend-otp`, data);
