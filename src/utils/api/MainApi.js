import BaseApi from './BaseApi';

class MainApi extends BaseApi {
  constructor(options) {
    super(options);
  }

  authorize(email, password) {
    return this._fetch(`/signin`, {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
  }

  register(name, email, password) {
    return this._fetch(`/signup`, {
      method: "POST",
      body: JSON.stringify({ name, email, password })
    });
  }

  getCurrentUserInfo(token) {
    return this._fetch(`/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        method: "GET",
      },
    });
  }

  editCurrentUserInfo(token, { name, email }) {
    return this._fetch(`/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({ name, email })
    });
  }

  getSavedMovies(token) {
    return this._fetch(`/movie`, {
      headers: {
        authorization: `Bearer ${token}`,
        method: "GET",
      }
    });
  }

  createMovie(movieInfo, token) {
    return this._fetch(`/movie`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({ ...movieInfo })
    });
  }

  async removeMovie(movieId, token) {
    try {
      const response = await this._fetch(`/movie/${movieId}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json; charset=utf-8",
          'Accept': 'application/json',
        },
        credentials: 'include',
        // body: JSON.stringify({ cardId: movieId }) // Используйте cardId как параметр
      });


      return response; // Возвращаем что-то в зависимости от вашего API
    } catch (error) {
      console.error('Error removing movie:', error);
      throw error;
    }
  }

}

const mainApi = new MainApi({
  baseUrl: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  }
});

export default mainApi;
