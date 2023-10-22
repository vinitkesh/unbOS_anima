import React from "react";
import ReactDOMClient from "react-dom/client";
import { Component } from "./screens/Component";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Component />);
