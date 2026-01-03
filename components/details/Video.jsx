const Video = ({ video }) => {
  if (!video?.videoURL) {
    return <p className="text-red-500">Video URL not found</p>;
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
      <iframe
        className="w-full h-full"
        src={video.videoURL}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
