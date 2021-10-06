import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;

  const { getByTestId, queryByTestId } = render(<App />);
  const fakeSearchQuery = jest.fn();
  const fakeQueryApi = jest.fn();

  let input = getByTestId("search-input");
  let button = getByTestId("search-button");
  let results = queryByTestId("results");

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
      wrapper = Enzyme.mount(<App searchQuery={fakeSearchQuery} queryApi={fakeQueryApi} />);

      describe("API request triggered", () => {
        it("should call the proper function", async () => {
          // await fireEvent.change(input, { target: { value: "something" } });
          // await fireEvent.click(button);
          // expect(fakeSearchQuery).toHaveBeenCalled();
          // expect(fakeQueryApi).toHaveBeenCalled();
        });

        // this should be placed within queryApi() own tests
        // https://www.anthonygonzales.dev/blog/how-to-test-data-fetching-components.html#stub-the-environment-not-the-implementation
        it("should set `searching` state to `true`", async () => {
          // await act(async () => {
          //   expect(wrapper.state().searching).toEqual(false);

          //   fireEvent.change(input, { target: { value: "something" } });

          //   expect(button).toBeEnabled();

          //   await fireEvent.click(button);

          //   expect(wrapper.state().searching).toEqual(true);
          // })
        });

        it("should disable search button", () => {
        });
      });

      describe("API response received", () => {
        it("should set `searching` state to `false`", () => {

        });

        it("should enabled search button", () => {
        });

        describe("without results", () => {
          it("should not show any results", () => {
            // input.value = "No country for old men";

            // fireEvent.click(button);

            // expect(results).not.toBeTruthy();
          });
        });

        describe("with results", () => {
          it("should show results", () => {
            // input.value = "The matrix has you";

            // fireEvent.click(button);

            // expect(results).toBeTruthy();
          });
        })
      });
    });
  });
});
