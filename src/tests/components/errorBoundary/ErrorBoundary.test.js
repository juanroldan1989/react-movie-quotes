import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "../../../components/errorBoundary/ErrorBoundary";
import SearchResult from "../../../components/search/SearchResult";

describe("ErrorBoundary", () => {
  const quote = {
    id: "1",
    content: "Hello Mr. Anderson",
    year: "1999",
    movie: { title: "The Matrix" },
    rating: "10",
    character: { name: "Agent Smith" },
    actor: { name: "Hugo Weaving" }
  }

  describe("when component renders without errors", () => {
    it("should not display any error message", () => {
      const { queryByTestId } = render(
        <ErrorBoundary key={quote.id}>
          <SearchResult quote={quote}/>
        </ErrorBoundary>
      );
      const errorMessage = queryByTestId("error-message")

      expect(errorMessage).not.toBeTruthy();
    });
  });

  describe("when component triggers error while rendering", () => {
    it("should display error message", () => {
      const quoteWithError = () => {
        throw new Error("something happened!");
      }

      let message;
      try {
        render(
          <ErrorBoundary>
            { quoteWithError() }
          </ErrorBoundary>
        );
      } catch (error) {
        message = error.message;
      }

      expect(message).toBe("something happened!");
    });
  });
});
