import React from "react";
import { render } from "@testing-library/react";
import AppInfo from "../../../components/page/AppInfo";

describe("Header", () => {

  const setup = () => {
    const { getByTestId } = render(<AppInfo/>);
    return getByTestId;
  }

  it("should display title", () => {
    const getByTestId = setup();
    const header = getByTestId("header");

    expect(header).toBeTruthy();
    expect(header).toContainHTML("Movie Quotes!");
  });

  it("should display subtitle", () => {
    const getByTestId = setup();
    const subtitle = getByTestId("subtitle");

    expect(subtitle).toBeTruthy();
    expect(subtitle).toContainHTML("React JS application interacting with");
  });

  it("should display `source` link", () => {
    const getByTestId = setup();
    const link = getByTestId("source-link");

    expect(link).toBeTruthy();
    expect(link).toContainHTML("juanroldan1989/react-movie-quotes")
  });
});
