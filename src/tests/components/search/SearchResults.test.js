import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../../../components/search/SearchResults";

describe("SearchResults", () => {
  describe("when search query is `null`", () => {
    it("should return empty result", () => {
      const { getByTestId } = render(
        <SearchResults
          quotes={[]}
          query=""
        />);
      const noResults = getByTestId("no-results");

      expect(noResults).toBeTruthy();
    });
  });

  describe("when search query is not `null`", () => {
    describe("and `quotesCounter` is `0`", () => {
      describe("and `page` is `1`", () => {
        it("should return proper message", () => {
          const { getByTestId } = render(
            <SearchResults
              quotes={[]}
              query="some random content"
              page={1}
            />);
          const noResults = getByTestId("no-results");

          expect(noResults).toBeTruthy();
          expect(noResults).toContainHTML("No results for")
        })
      });

      describe("and `page` is other than `1`", () => {
        it("should return proper message", () => {
          const { getByTestId } = render(
            <SearchResults
              quotes={[]}
              query="content with initial results"
              page={2}
            />);
          const noMoreResults = getByTestId("no-more-results");
          const pagination = getByTestId("pagination");

          expect(noMoreResults).toBeTruthy();
          expect(noMoreResults).toContainHTML("No more results for");
          expect(pagination).toBeTruthy();
        })
      });
    });

    describe("and `quotesCounter` is not `0`", () => {
      it("should render results", () => {
        const quotes = [{
          id: "1",
          content: "Hello Mr. Anderson",
          year: "1999",
          movie: "The Matrix",
          rating: "10",
          character: { name: "Agent Smith" },
          actor: { name: "Hugo Weaving" }
        }]

        const { getByTestId } = render(
          <SearchResults
            quotes={quotes}
            query="content with initial results"
            page={2}
          />);
        const results = getByTestId("results");
        const pagination = getByTestId("pagination");

        expect(results).toBeTruthy();
        expect(pagination).toBeTruthy();
      })
    })
  });
});
