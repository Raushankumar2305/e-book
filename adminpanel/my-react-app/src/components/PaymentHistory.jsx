import React, { useEffect, useState } from "react";

const PaymentHistory = () => {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/payment/history")
      .then(res => res.json())
      .then(data => setPayments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Payment History
      </h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Payment ID</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">

                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.user_id}</td>
                <td className="p-3">{p.razorpay_order_id}</td>
                <td className="p-3">{p.razorpay_payment_id}</td>
                <td className="p-3 font-semibold text-green-600">
                  ₹{p.amount}
                </td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    {p.status}
                  </span>
                </td>

                <td className="p-3">
                  {new Date(p.created_at).toLocaleString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default PaymentHistory;
