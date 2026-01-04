import React from "react";
import Video from "./details/Video";
import VideoInfo from "./details/VideoInfo";
import VideoSidbar from "./details/VideoSidbar";

const Details = ({video}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* <!-- Primary --> */}
        <section className="lg:col-span-8">
          {/* <!-- Video --> */}
          <Video video={video}/>

          {/* <!-- Info --> */}
          <VideoInfo video={video}/>
        </section>

        {/* <!-- Similar Videos --> */}
        <VideoSidbar video={video}/>
      </div>
    </div>
  );
};

export default Details;
