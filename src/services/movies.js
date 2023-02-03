const mockApiCall = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const addMovieApi = async (movie) => {
  const response = await mockApiCall(3000, movie);
  return response;
};

export const deleteMovieApi = async (id) => {
  const response = await mockApiCall(3000, id);
  return response;
};

export const changeWatchedMovieApi = async (id) => {
  const response = await mockApiCall(3000, id);
  return response;
};

export const updateMovieApi = async (movie) => {
  const response = await mockApiCall(3000, movie);
  return response;
};
