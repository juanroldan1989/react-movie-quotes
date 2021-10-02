import React from "react";
import { render } from "@testing-library/react";
import QuoteImage from "../../../components/quote/QuoteImage";

describe("QuoteImage", () => {
  it("should render component with correct props", () => {
    const quote = {
      movie: "The Matrix",
      image_large_url: "https://pics.filmaffinity.com/Matrix-155050517-large.jpg",
      image_thumb_url: "https://pics.filmaffinity.com/Matrix-155050517-thumb.jpg"
    }

    const { getByTestId } = render(<QuoteImage quote={quote} />);
    const quoteImage = getByTestId("quote-image");

    expect(quoteImage.alt).toBe(quote.movie);
    expect(quoteImage.src).toBe(quote.image_large_url);
  });
});
