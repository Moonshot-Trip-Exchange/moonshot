import { Box } from "@mui/material";
import { Table } from "antd";
import React from "react";

const dataSource = [
  {
    id: "X3423",
    route: "Toronto to New York",
    status: 'Pending',
    price: "$200",
    manage: <button>Manage</button>,
  },
  {
    id: "X3423",
    route: "Toronto to New York",
    status: 'Pending',
    price: "$200",
    manage: <button>Manage</button>,
  },
  {
    id: "X3423",
    route: "Toronto to New York",
    status: 'Pending',
    price: "$200",
    manage: <button>Manage</button>,
  },
  {
    id: "X3423",
    route: "Toronto to New York",
    status: 'Pending',
    price: "$200",
    manage: <button>Manage</button>,
  },
  {
    id: "X3423",
    route: "Toronto to New York",
    status: 'Pending',
    price: "$200",
    manage: <button>Manage</button>,
  },
];

const columns = [
  {
    title: "Ticket ID ",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Route",
    dataIndex: "route",
    key: "route",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "",
    dataIndex: "manage",
    key: "manage",
  },
];

export const MyTickets = () => {
  return (
    <Box sx={{padding: '30px'}}>
      <h1>My Tickets</h1>
      <Table dataSource={dataSource} columns={columns} />
    </Box>
  );
};
