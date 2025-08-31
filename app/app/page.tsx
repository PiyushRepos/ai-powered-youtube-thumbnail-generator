import YoutubeCard from "@/components/youtube-card";
import { Thumbnail } from "@/types";
import React from "react";

const youtubeThumbnails: Thumbnail[] = [
  {
    id: 1,
    src: "https://placehold.co/300x169",
    alt: "Thumbnail 1",
    ratio: "16:9",
    title: "How to use Pixelo - Beginner Tutorial",
    channel: "Pixelo Academy",
    views: "1.2M views",
    uploaded: "2 days ago",
  },
  {
    id: 2,
    src: "https://placehold.co/300x169",
    alt: "Thumbnail 2",
    ratio: "16:9",
    title: "Pixelo Advanced Features Explained",
    channel: "Tech Guru",
    views: "850K views",
    uploaded: "1 week ago",
  },
  {
    id: 3,
    src: "https://placehold.co/300x169",
    alt: "Thumbnail 3",
    ratio: "16:9",
    title: "Pixelo Tips & Tricks",
    channel: "Creative Minds",
    views: "500K views",
    uploaded: "3 days ago",
  },
];

const shortsThumbnails: Thumbnail[] = [
  {
    id: 1,
    src: "https://placehold.co/196x300",
    alt: "Thumbnail 1",
    ratio: "9:16",
    title: "Pixelo Shorts - Quick Tips",
    channel: "Pixelo Academy",
    views: "200K views",
    uploaded: "1 day ago",
  },
  {
    id: 2,
    src: "https://placehold.co/196x300",
    alt: "Thumbnail 2",
    ratio: "9:16",
    title: "Pixelo Shorts - Feature Highlights",
    channel: "Tech Guru",
    views: "150K views",
    uploaded: "3 days ago",
  },
  {
    id: 3,
    src: "https://placehold.co/196x300",
    alt: "Thumbnail 3",
    ratio: "9:16",
    title: "Pixelo Shorts - Creative Ideas",
    channel: "Creative Minds",
    views: "100K views",
    uploaded: "5 days ago",
  },
];

const Page = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="py-3">
          <div>
            <h2 className="text-lg font-bold">Pixelo</h2>
          </div>
        </nav>
      </header>

      {/* main thumbnail area */}
      <main className="py-6 space-y-10">
        {/* Youtube Cards */}
        <div>
          <h2 className="text-lg font-bold text-neutral-600 my-4">
            Youtube thumbnails
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeThumbnails.map((thumb) => (
              <YoutubeCard key={thumb.id} thumb={thumb} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-neutral-600 my-4">
            Shorts thumbnails
          </h2>
          <div className="flex flex-wrap justify-baseline">
            {shortsThumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="relative bg-black rounded-xl overflow-hidden shadow-lg flex flex-col items-center w-[220px] mx-auto"
                style={{ aspectRatio: "9/16" }}
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "9/16" }}
                />
                {/* Overlay for text and stats */}
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-base font-bold mb-1 truncate">
                    {thumb.title}
                  </h3>
                  <p className="text-neutral-200 text-xs mb-2 truncate">
                    {thumb.channel}
                  </p>
                  <div className="flex justify-between text-xs text-neutral-300">
                    <span className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="inline-block"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M8 4v5l3 2"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                      {thumb.views}
                    </span>
                    <span>{thumb.uploaded}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
