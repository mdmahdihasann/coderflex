import Link from "next/link";
import database from "@/database/videos.json";
import Image from "next/image";
import { slugify } from "@/utils/Slugify";

const VideoSidbar = ({ video }) => {
  const videoFilter = database.filter(
    (val) =>
      val !== video &&
      val.categories.some((cat) => video.categories.includes(cat))
  );

  return (
    <aside className="lg:col-span-4">
      <h2 className="text-base font-medium mb-4">Similar videos</h2>
      <div id="similarVideos" className="space-y-3" aria-live="polite">
        {videoFilter.map((video) => (
          <Link
            key={video.id}
            href={`/details/${slugify(video.videoTitle)}`}
            className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
          >
            <div className="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
              <Image
                src={video?.thumbnailURL}
                alt={video?.videoTitle}
                loading="lazy"
                width={40}
                height={40}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                {video?.duration}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                {video?.videoTitle}
              </p>
              <p className="text-xs text-gray-400 mt-1 truncate">
                {video?.categories}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                <span>{video?.views}</span>
                <span>•</span>
                <span>{video?.publishedDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default VideoSidbar;
