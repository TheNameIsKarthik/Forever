import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(backendUrl + "/api/order/verifyStripe", { orderId, success }, { headers: { token } });
      if (response.data.success) {
        toast.success("Payment successful!");
        setCartItems([]);
        navigate("/orders");
      } else {
        toast.error("Payment failed, Try Again!");
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to verify payment. Please try again later.");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div></div>;
};

export default Verify;
