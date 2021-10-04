import React from "react";
import { render } from "@testing-library/react";
import Pagination from "../../../components/page/Pagination";

describe("Pagination", () => {

  const setup = (props) => {
    const { queryByTestId } = render(
      <Pagination
        page={props.page}
        previousPage={props.previousPage}
        nextPage={props.nextPage}
        onlyPreviousPage={props.onlyPreviousPage}
      />
    );
    return queryByTestId;
  };

  describe("Pagination buttons for page 1", () => {
    it("should contain only `next` button", () => {
      const queryByTestId = setup({ page: 1 });
      const nextButton = queryByTestId("next-button")
      const previousButton = queryByTestId("previous-button")

      expect(nextButton).toBeTruthy();
      expect(previousButton).not.toBeTruthy();
    });
  });

  describe("Pagination buttons when `onlyPreviousPage` prop is set", () => {
    it("should only contain `previous` button", () => {
      const queryByTestId = setup({ onlyPreviousPage: true });
      const nextButton = queryByTestId("next-button");
      const previousButton = queryByTestId("previous-button");

      expect(nextButton).not.toBeTruthy();
      expect(previousButton).toBeTruthy();
    });
  });

  describe(
    "Pagination buttons when `onlyPreviousPage` prop is not set " /
      "and `page` is different than `1`", () => {
        it("should contain both `previous` and `next` buttons", () => {
          const queryByTestId = setup({ page: 3 });
          const nextButton = queryByTestId("next-button");
          const previousButton = queryByTestId("previous-button");

          expect(nextButton).toBeTruthy();
          expect(previousButton).toBeTruthy();
        });
  });
});
