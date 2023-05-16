import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "225646f7e5254f71bc333d321ee564ed",
  },
});
