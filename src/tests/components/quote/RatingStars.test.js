import React from "react";
import { render } from "@testing-library/react";
import RatingStars from "../../../components/quote/RatingStars";

describe("RatingStars", () => {
  it("should render component with correct props", () => {
    const props = { rating: 8 };
    const { getByTestId } = render(<RatingStars props={props}/>);
    const ratingStars = getByTestId("rating-stars");

    expect(ratingStars).toContainHTML(props.rating);
  });
});
