import { slugify } from "@/utils/Slugify";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({data}) => {
  return (
    <Link
      href={`/details/${slugify(data?.videoTitle)}`}
      class="group block transition-transform hover:scale-[1.01]"
    >
      <div class="relative aspect-video rounded-xl overflow-hidden bg-[#262626] mb-3 ring-1 ring-white/5">
        <Image
          src={data?.thumbnailURL}
          alt={data?.videoTitle}
          loading="lazy"
          width="300"
          height="300"
          class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
        <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {data?.duration}
        </div>
      </div>
      <div class="flex gap-3">
        <div class="flex-shrink-0">
          <Image
            src={data?.channelAvatar ? data?.channelAvatar : "/logo.svg"}
            alt="Ed Hill | AI Automation avatar"
            loading="lazy"
            width="300"
            height="300"
            class="w-9 h-9 rounded-full object-cover bg-[#262626] ring-1 ring-white/10"
          />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-[#e50914] transition-colors">
            {data?.videoTitle}
          </h3>
          <p class="text-xs text-gray-400 mb-0.5">{data?.channelName}</p>
          <div class="flex items-center gap-1 text-xs text-gray-400">
            <span>{data?.views}</span>
            <span>•</span>
            <span>{data?.publishedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
