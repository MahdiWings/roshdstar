const VideoPlayer = ({videoSrc}) => {
  return (
      <video autoPlay  className="w-full">
        <source src={videoSrc} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
  );
};

export default VideoPlayer;
