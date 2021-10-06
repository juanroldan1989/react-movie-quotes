import axios from "axios";
import PropTypes from "prop-types";

const FetchQuotes = async (query, page) => {
  const url = `http://localhost:3000/api/v1/quotes?multiple=${query}&page=${page}`;
  const apiKey = process.env.REACT_APP_API_KEY;

  if (toString(apiKey) === "") {
    console.log("API Key not present");
    return [];
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Token token=${apiKey}`
      }
    });
    console.log("response.data: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

FetchQuotes.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number
};

export default FetchQuotes;
