import React from "react";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import App from "../App";
import axiosMock from "axios";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  const { getByTestId, queryByTestId } = render(<App />);
  const apiKey = process.env.REACT_APP_API_KEY;

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
      describe("API request initiated", () => {
        it("should trigger GET request", async (done) => {
          let wrapper = mount(<App/>);
          axiosMock.get.mockResolvedValue({data: [] });

          await wrapper.instance().queryApi();

          process.nextTick(() => {
            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith(
              "https://moviequotes.rocks/api/v1/quotes?multiple=&page=1",
              { "headers": { "Authorization": `Token token=${apiKey}` } }
            );
            done();
          });
        });

        it("should set `searching` state to `true`", async (done) => {
          let wrapper = mount(<App/>);

          process.nextTick(() => {
            axiosMock.get.mockResolvedValue({data: [{ content: "first quote"}, { content: "second quote" }] });

            expect(wrapper.instance()["state"]["searching"]).toEqual(false);

            wrapper.instance().queryApi();

            expect(wrapper.instance()["state"]["searching"]).toEqual(true);
            done();
          });
        });
      });

      describe("API response received", () => {
        it("should store results in state", async (done) => {
          const quotes = [{ content: "first quote"}, { content: "second quote" }];
          let wrapper = mount(<App/>);
          axiosMock.get.mockResolvedValue({ data: quotes });

          process.nextTick(async () => {
            expect(wrapper.instance()["state"]["quotes"]).toEqual([]);

            await wrapper.instance().queryApi();

            expect(wrapper.instance()["state"]["quotes"]).toEqual(quotes);
            done();
          });
        });
      });
    });
  });
});
