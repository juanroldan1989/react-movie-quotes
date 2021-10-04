import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchResult from "../../../components/search/SearchResult";

describe("SearchResult", () => {
  it("should show card with the proper information", () => {
    const quote = {
      content: "Hello Mr. Anderson",
      year: "1999",
      movie: "The Matrix",
      rating: "10",
      character: { name: "Agent Smith" },
      actor: { name: "Hugo Weaving" }
    }
    const { getByTestId } = render(<SearchResult quote={quote} />);
    const card = getByTestId("quote-card");

    expect(card).toContainHTML(quote.content);
    expect(card).toContainHTML(quote.year);
    expect(card).toContainHTML(quote.movie);
    expect(card).toContainHTML(quote.rating);
    expect(card).toContainHTML(quote.character.name);
    expect(card).toContainHTML(quote.actor.name);
  });

  describe("when card content is less than 3 lines", () => {
    it("should not display `show more` link", () => {
      const quote = {
        content: "Hello Mr. Anderson",
        year: "1999",
        movie: "The Matrix",
        rating: "10",
        character: { name: "Agent Smith" },
        actor: { name: "Hugo Weaving" }
      }
      const { getByText } = render(<SearchResult quote={quote} />);
      const showMoreText = getByText("Show more");

      expect(showMoreText).not.toBeVisible();
    })
  });

  describe("when card content is more than 3 lines", () => {
    it("should display `show more` link", () => {
      const quote = {
        content: "Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment but you humans do not. You move to an area and you multiply and multiply until every natural resource is consumed and the only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is? A virus. Human beings are a disease, a cancer of this planet. You're a plague and we are the cure. Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment but you humans do not. You move to an area and you multiply and multiply until every natural resource is consumed and the only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is? A virus. Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
        year: "1999",
        movie: "The Matrix",
        rating: "10",
        character: { name: "Agent Smith" },
        actor: { name: "Hugo Weaving" }
      }
      const { getByTestId } = render(<SearchResult quote={quote} />);
      const card = getByTestId("quote-card");

      expect(card).toContainHTML("Show more");
    })
  });
});
