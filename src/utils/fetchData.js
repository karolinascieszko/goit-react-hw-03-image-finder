import axios from "axios";

const fetchData = async (searchKeyword, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?&q=${searchKeyword}&page=${page}&key=23724640-a43547237d07add70f9bfd33b&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export default fetchData;
