// Test away!

import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";


test("should show buttons that toggle state",() => {
    expect(render(<Controls />)).toMatchSnapshot();
})

test("text on buttons toggles to reflect state", () => {
    
})