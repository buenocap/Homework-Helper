import { useState } from "react";
import Container from "@mui/material/Container";

import "./App.css";
import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <div id="page">
      <header>Header</header>
      <quick-add>Quick Add</quick-add>
      <quick-view>Quick View</quick-view>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
