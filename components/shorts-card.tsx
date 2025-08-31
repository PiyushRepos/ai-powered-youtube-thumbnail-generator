import { Thumbnail } from "@/types";
import React from "react";

const ShortsCard = ({ thumb }: { thumb: Thumbnail }) => {
  return (
    <div>
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
    </div>
  );
};

export default ShortsCard;
