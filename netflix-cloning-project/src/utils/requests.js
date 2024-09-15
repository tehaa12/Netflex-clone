const API_KEY = "8cd75bd3a27b6d3ce0c1ce31c01eb755"

const requires = {
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language-en-us&page-1`,
  fetchNetflixOriginal: `discover/tv?api_key=${API_KEY}&with_networks=213`,
};
export default requires