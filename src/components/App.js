import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit("buildings");
  }

  onFormSubmit = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyCBFGjkP8pulyokhxrf9KzJCYGUpe-_s-s",
          q: term,
        },
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } catch (e) {
      console.log(e);
    }
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
