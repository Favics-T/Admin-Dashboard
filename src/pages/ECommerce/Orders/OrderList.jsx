import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ordersApi } from "../../../api/resources";

const initialForm = {
  customer: "",
  total: "",
  status: "pending",
  itemsCount: "",
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await ordersApi.list();
      setOrders(data);
    } catch {
      setError("Unable to load orders. Ensure API server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const createOrder = async (event) => {
    event.preventDefault();
    if (!form.customer || !form.total) return;
    try {
      const payload = {
        customer: form.customer.trim(),
        total: Number(form.total),
        status: form.status,
        itemsCount: Number(form.itemsCount || 1),
        createdAt: new Date().toISOString(),
      };
      const created = await ordersApi.create(payload);
      setOrders((prev) => [created, ...prev]);
      setForm(initialForm);
    } catch {
      setError("Unable to create order.");
    }
  };

  const deleteOrder = async (id) => {
    try {
      await ordersApi.remove(id);
      setOrders((prev) => prev.filter((order) => order.id !== id));
    } catch {
      setError("Unable to delete order.");
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const updated = await ordersApi.update(id, { status });
      setOrders((prev) => prev.map((order) => (order.id === id ? updated : order)));
    } catch {
      setError("Unable to update order status.");
    }
  };

  return (
    <div className="w-full p-4 md:p-8">
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-[#3A3541]">Create Order</h1>
        <form onSubmit={createOrder} className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <input
            value={form.customer}
            onChange={(event) => setForm((prev) => ({ ...prev, customer: event.target.value }))}
            placeholder="Customer name"
            className="rounded border px-3 py-2"
          />
          <input
            value={form.total}
            type="number"
            onChange={(event) => setForm((prev) => ({ ...prev, total: event.target.value }))}
            placeholder="Total amount"
            className="rounded border px-3 py-2"
          />
          <input
            value={form.itemsCount}
            type="number"
            onChange={(event) => setForm((prev) => ({ ...prev, itemsCount: event.target.value }))}
            placeholder="Items count"
            className="rounded border px-3 py-2"
          />
          <select
            value={form.status}
            onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value }))}
            className="rounded border px-3 py-2"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <div className="md:col-span-4 flex justify-end">
            <button type="submit" className="rounded bg-[#6E39CB] px-4 py-2 text-white">
              Save Order
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#3A3541]">Orders</h2>
          <button onClick={loadOrders} className="rounded border px-3 py-1 text-sm">
            Refresh
          </button>
        </div>
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
        {loading ? (
          <p className="text-sm text-gray-500">Loading orders...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left">Customer</th>
                  <th className="px-3 py-2 text-left">Total</th>
                  <th className="px-3 py-2 text-left">Items</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-3 py-2">{order.customer}</td>
                    <td className="px-3 py-2">${Number(order.total).toFixed(2)}</td>
                    <td className="px-3 py-2">{order.itemsCount}</td>
                    <td className="px-3 py-2">
                      <select
                        value={order.status}
                        onChange={(event) => updateOrderStatus(order.id, event.target.value)}
                        className="rounded border px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-2">
                        <Link
                          to={`/e-commerce/overview/orders/orderdetail?id=${order.id}`}
                          className="rounded bg-blue-500 px-2 py-1 text-white"
                        >
                          View
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteOrder(order.id)}
                          className="rounded bg-red-500 px-2 py-1 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!orders.length && (
                  <tr>
                    <td className="px-3 py-4 text-gray-500" colSpan={5}>
                      No orders available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
