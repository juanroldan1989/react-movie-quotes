import React from "react";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent } from "@testing-library/react";
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
        it("should trigger GET request", (done) => {
          let wrapper = mount(<App/>);
          axiosMock.get.mockResolvedValue({data: [] });

          wrapper.instance().queryApi();

          process.nextTick(()=>{
            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith(
              "http://localhost:3000/api/v1/quotes?multiple=&page=1",
              {"headers": {"Authorization": `Token token=${apiKey}`}}
            );
            done();
          });
        });

        it("should set `searching` state to `true`", async (done) => {
          // APPROACH 1
          // const wrapper = mount(<App/>, { disableLifecycleMethods: true });

          // await act(async () => {
          //   expect(wrapper.state().searching).toEqual(false);

          //   await fireEvent.change(input, { target: { value: "something" } });

          //   expect(button).toBeEnabled();

          //   await fireEvent.click(button);

          //   expect(wrapper.state().searching).toEqual(true);
          // })

          // APPROACH 2
          let wrapper = mount(<App/>);

          process.nextTick(()=>{
            axiosMock.get.mockResolvedValue({data: [{ content: "first quote"}, { content: "second quote" }] });

            expect(wrapper.instance()["state"]["searching"]).toEqual(false);

            wrapper.instance().queryApi();

            expect(wrapper.instance()["state"]["searching"]).toEqual(true);
            done();
          });
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
          it("should show results", (done) => {
            // input.value = "The matrix has you";

            // fireEvent.click(button);

            // expect(results).toBeTruthy();

            // APPROACH 2
            let wrapper = mount(<App/>);

            process.nextTick(()=>{
              axiosMock.get.mockResolvedValue({data: [{ content: "first quote"}, { content: "second quote" }] });

              expect(wrapper.instance()["state"]["quotes"]).toEqual([]);

              wrapper.instance().queryApi();

              // expect(wrapper.instance()["state"]["quotes"]).toEqual([{ content: "first quote"}, { content: "second quote" }]);
              done();
            });
          });
        })
      });
    });
  });
});
