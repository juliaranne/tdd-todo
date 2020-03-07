import React from "react";
import { render } from "@testing-library/react";
import ToDoListContainer from "../ToDoListContainer";

test("should render component", () => {
  const { getByText } = render(<ToDoListContainer />);

  getByText("Hello Julia");
});
