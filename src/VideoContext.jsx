import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; 
const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState(null);

  return (
    <VideoContext.Provider value={{ videoData, setVideoData }}>
      {children}
    </VideoContext.Provider>
  );
};

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
