import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFmMzQ4MWE5YWIxNzBkOGVkNThjYjAxY2U1YjI4MCIsInN1YiI6IjY1N2Q2NGIwNWM1Y2M4MDZmYzk1ZGZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xOkm1NK11ZWhDdPuKarAnHB5ApOtkmm1HwDTJnr9WU"

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
