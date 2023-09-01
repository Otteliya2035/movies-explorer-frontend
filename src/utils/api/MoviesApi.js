import BaseApi from "./BaseApi";

class MoviesApi extends BaseApi {
  constructor(props) {
    super(props);
  }

  getFilms() {
    console.log(this._url)
    return this._fetch(`/beatfilm-movies`, {
      method: "GET"
    });
  }

}


const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
});

export default moviesApi;
