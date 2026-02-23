import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ordersApi } from "../../../api/resources";

const OrderDetail = () => {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const id = searchParams.get("id");

  useEffect(() => {
    const loadOrder = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError("");
        const data = await ordersApi.getById(id);
        setOrder(data);
      } catch {
        setError("Unable to load order details.");
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

  if (!id) {
    return (
      <div className="w-full p-8">
        <p className="text-gray-600">No order selected.</p>
        <Link className="mt-3 inline-block text-[#6E39CB]" to="/e-commerce/overview/orders/orderlist">
          Back to orders
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-8">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-[#3A3541]">Order Detail</h1>
        {loading && <p className="mt-4 text-sm text-gray-500">Loading order...</p>}
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        {!loading && !error && order && (
          <div className="mt-4 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
            <p>
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>
            <p>
              <span className="font-semibold">Customer:</span> {order.customer}
            </p>
            <p>
              <span className="font-semibold">Total:</span> ${Number(order.total).toFixed(2)}
            </p>
            <p>
              <span className="font-semibold">Items:</span> {order.itemsCount}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {order.status}
            </p>
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {order.createdAt ? new Date(order.createdAt).toLocaleString() : "-"}
            </p>
          </div>
        )}
        <Link className="mt-4 inline-block text-[#6E39CB]" to="/e-commerce/overview/orders/orderlist">
          Back to orders
        </Link>
      </div>
    </div>
  );
};

export default OrderDetail;
