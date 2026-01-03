import Link from "next/link";

const VideoSidbar = () => {
  return (
    <aside className="lg:col-span-4">
      <h2 className="text-base font-medium mb-4">Similar videos</h2>
      <div id="similarVideos" className="space-y-3" aria-live="polite">
        <Link
          href="details.html?v=5JgsZCtIH_Q"
          className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
        >
          <div className="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
            <img
              src="https://i.ytimg.com/vi/5JgsZCtIH_Q/hq720.jpg"
              alt="How to Build an ENTIRE iPhone/Android App From Scratch (AI + No code) | Rork AI"
              loading="lazy"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
              12:26
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
              How to Build an ENTIRE iPhone/Android App From Scratch (AI + No
              code) | Rork AI
            </p>
            <p className="text-xs text-gray-400 mt-1 truncate">
              Ed Hill | AI Automation
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
              <span>40K views</span>
              <span>•</span>
              <span>5 months ago</span>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default VideoSidbar;
