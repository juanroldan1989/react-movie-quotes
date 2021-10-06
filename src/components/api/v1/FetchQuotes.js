import axios from "axios";

const FetchQuotes = (context, query, page) => {
  const url = `https://moviequotes.rocks/api/v1/quotes?multiple=${query}&page=${page}`;

  context.searchStarted();

  axios.get(url, {
    headers: {
      "Authorization": `Token token=${process.env.REACT_APP_API_KEY}`
    }
  })
  .then((response) => {
    const quotes = response.data;
    context.setState({ quotes: quotes });
    context.searchCompleted();
  })
  .catch((error) => {
    // console.error(error)
  })
}

export default FetchQuotes;
