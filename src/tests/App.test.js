import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  const { getByTestId, queryByTestId } = render(<App />);
  const input = getByTestId("search-input");
  const button = getByTestId("search-button");
  const results = queryByTestId("results");

  describe("on page load", () => {
    it("should show empty search input", () => {
      expect(input).toBeTruthy();
    });

    it("should show disabled `search` button", () => {
      expect(button).toBeTruthy();
      expect(button).toBeDisabled();
    });

    it("should not show any results", () => {
      expect(results).not.toBeTruthy();
    });
  });

  describe("search input contains query", () => {
    describe("user clicks on `search` button", () => {

      describe("API request triggered", () => {
        describe("`searching` state is set to `true`", () => {

        });
      });

      describe("API response received", () => {
        describe("`searching` state is set to `false`", () => {

        });
        describe("without results", () => {
          it("should not show any results", () => {
            input.value = "something to search for ...";

            fireEvent.click(button);

            expect(results).not.toBeTruthy();
          });
        });

        describe("with results", () => {
          it("should show results", () => {

          });
        })
      });
    });
  });
});
