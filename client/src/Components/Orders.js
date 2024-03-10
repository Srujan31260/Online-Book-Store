import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar3 from './Navbar3'

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8081/admin/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <Navbar3/>
      <h2>Admin Orders Page</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Order ID: {order._id}, Amount: {order.totalPrice}, Date: {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;