// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";


test("should show buttons that toggle state",() => {
    expect(render(<Controls />)).toMatchSnapshot();
})

test("text on buttons toggles to reflect state", () => {

})

test("if gate is locked, close button is disabled", () => {
    const { getByTestId } = render(<Controls />);
    const lockButton = getByTestId(/lock/i);
    const openButton = getByTestId(/open/i);

    fireEvent.click(lockButton);
    expect(openButton.disabled).toEqual(true);
}) 

test ("locked button is disabled when gate is open", () => {

})