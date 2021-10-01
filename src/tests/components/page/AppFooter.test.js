import React from "react";
import { render} from "@testing-library/react";
import AppFooter from '../../../components/page/AppFooter';

describe("Footer", () => {

  const setup = () => {
    const { getByTestId } = render(<AppFooter/>);
    return getByTestId;
  }

  it("should show div", () => {
    const getByTestId = setup();
    const div = getByTestId("footer-div");

    expect(div).toBeTruthy;
  })

  it("should show link within div", () => {
    const getByTestId = setup();
    const div = getByTestId("footer-div");
    const link = getByTestId("footer-link");

    expect(div).toContainElement(link);
  })

  it("should show link with proper URL", () => {
    const getByTestId = setup();
    const link = getByTestId("footer-link");

    expect(link).toContainHTML("juanroldan.com.ar");
  })
});
