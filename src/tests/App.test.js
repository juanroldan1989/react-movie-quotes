import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  describe("on page load", () => {
    it("should show empty search input", () => {
      const { getByTestId } = render(<App />);
      const input = getByTestId("search-input");

      expect(input).toBeTruthy();
    });

    it("should show disabled `search` button", () => {
      const { getByTestId } = render(<App/>);
      const button = getByTestId("search-button");

      expect(button).toBeTruthy();
      expect(button).toBeDisabled();
    });

    it("should not show any results", () => {
      const { queryByTestId } = render(<App/>);
      const results = queryByTestId("results");

      expect(results).not.toBeTruthy();
    });
  });

  // describe("search input contains query", () => {
  //   describe("and user clicks on `search` button", () => {
  //     const { getByTestId, queryByTestId } = render(<App/>);

  //     describe("and there are no results", () => {
  //       it("should not show any results", () => {
  //         const input = getByTestId("search-input");
  //         const button = getByTestId("search-button");
  //         const results = queryByTestId("results");

  //         input.value = "something to search for ...";

  //         fireEvent.click(button);

  //         expect(results).not.toBeTruthy();
  //       });
  //     });

  //     describe("and there are results", () => {
  //       it("should show results", () => {

  //       });
  //     });
  //   });
  // });
});
