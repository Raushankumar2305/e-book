import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://127.0.0.1:8000/auth";

const OtpVerify = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  const inputsRef = useRef([]);

  
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

//   OtpVerify
  


const handleVerify = async () => {
  const otpValue = otp.join("");

  if (!email) return alert("Enter email");
  if (otpValue.length !== 6) return alert("Enter 6 digit OTP");

  try {
    setLoading(true);

    const res = await axios.post(`${API}/otp-verify`, {
      email,
      otp: otpValue,
    });

    const { access_token, role } = res.data;

    console.log("Backend role:", role);

    
    localStorage.clear();

    // save auth
    localStorage.setItem("token", access_token);
    localStorage.setItem("role", role);

    
    const roleRoutes = {
      admin: "http://localhost:5174/admin",
      vendor: "http://localhost:5174/admin",
      author: "/",
      user: "/",
    };

    // navigate(roleRoutes[role?.toLowerCase()] || "/");

    window.location.href =
  `http://localhost:5174/admin?token=${access_token}&role=${role}`;


  } catch (err) {
    alert(err.response?.data?.detail || "Invalid or expired OTP");
  } finally {
    setLoading(false);
  }
};




  const handleResend = async () => {
    if (timer > 0) return;

    try {
      await axios.post(`${API}/resend-otp`, { email });

      setOtp(["", "", "", "", "", ""]);
      setTimer(60);
      inputsRef.current[0]?.focus();

      alert("OTP resent successfully");
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to resend OTP");
    }
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          OTP Verification
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, i)}
              className="w-12 h-14 text-xl text-center border-2 rounded-lg focus:border-blue-500 outline-none"
            />
          ))}
        </div>

        <div className="text-center mb-6 text-sm">
          {timer > 0 ? (
            <p className="text-gray-500">
              Resend OTP in {minutes}:{seconds.toString().padStart(2, "0")}
            </p>
          ) : (
            <span
              onClick={handleResend}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Resend OTP
            </span>
          )}
        </div>

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
};

export default OtpVerify;
