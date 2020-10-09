import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // header: {
  //   Authentication: "Bearer AIzaSyCBFGjkP8pulyokhxrf9KzJCYGUpe-_s-s",
  // },
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyCBFGjkP8pulyokhxrf9KzJCYGUpe-_s-s",
    type: "video",
  },
});
