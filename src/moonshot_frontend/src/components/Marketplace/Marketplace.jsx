import React from "react";
import { TicketCard } from "./TicketCard";
import { CardWrapper } from "./assets/CardWrapper";
import { FilterWrapper } from "./FilterWrapper";
import { Box } from "@mui/material";

export const Marketplace = () => {
  return (
    <main>
      <h1>Marketplace</h1>
      <Box display="flex">
        <FilterWrapper />

        <CardWrapper />
      </Box>
      ß
    </main>
  );
};
