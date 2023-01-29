const mockApiCall = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const addMovieApi = async (movie) => {
  const response = await mockApiCall(3000, movie);
  return response;
};
