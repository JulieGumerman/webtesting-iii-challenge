// Test away!
import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";


test("defaults to unlocked and open", () => {

    let display = render(<Display />)

    expect(display.getByText("Unlocked"));
    expect(display.getByText("Open"));

})

test("displays if gate is open/closed and locked/unlocked", () => {
    const displayComponent = render(<Display />);
    expect(displayComponent).toMatchSnapshot();
})

test("displays closed if closed prop is true and open otherwise", () =>{
    let displayClosed = render(<Display closed={true}/>);
    let displayOpen = render(<Display closed={false}/>);
    expect(displayClosed.getByText("Closed"));
    expect(displayOpen.getByText("Open"));
    

})

test("displays locked if locked prop is true and unlocked otherwise", () => {

})

test("when locked or closed, use red-led class", () => {

})

test("when unlocked or open, use green-led class", () => {

})