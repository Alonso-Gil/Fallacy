import React from "react";

import { render } from "setupTests";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders with default props", () => {
    render(<Navbar />);
  });
});
