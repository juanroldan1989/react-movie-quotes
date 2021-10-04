import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchInput from "../../../components/search/SearchInput";

describe("SearchInput", () => {
  const setup = () => {
    const { getByTestId } = render(<SearchInput setPage={() => { return 1 }} />);
    return getByTestId;
  }

  it("should show text input for searching", () => {
    const getByTestId = setup();
    const input = getByTestId("search-input");

    expect(input).toBeTruthy();
  });

  describe("button to submit query", () => {
    it("should be disabled by default", () => {
      const getByTestId = setup();
      const button = getByTestId("search-button");

      expect(button).toBeDisabled();
    });

    it("should be enabled when search query is entered", () => {
      const getByTestId = setup();
      const button = getByTestId("search-button");
      const input = getByTestId("search-input");

      expect(button).toBeDisabled();
      fireEvent.change(input, { target: { value: "I am your father" } });
      expect(button).toBeEnabled();
    });
  })
});
