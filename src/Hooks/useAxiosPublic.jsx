import axios from "axios";

const axiosPulic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPulic;
};

export default useAxiosPublic;
