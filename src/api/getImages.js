import axios from "axios";

const fetchImages = (searchQuery, page = 0) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=14121213-0294698cbddd3de5cddc95af0&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchImages,
};