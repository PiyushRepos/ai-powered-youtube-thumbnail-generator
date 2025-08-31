import React from "react";
import { Thumbnail } from "@/types";

const YoutubeCard = ({ thumb }: { thumb: Thumbnail }) => {
  return (
    <div key={thumb.id} className="bg-transparent rounded-none">
      <div className="relative">
        <img
          src={thumb.src}
          alt={thumb.alt}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-0.5 rounded">
          {thumb.ratio}
        </span>
      </div>
      <div className="flex gap-3 pt-3">
        <img
          src="https://placehold.co/40x40"
          alt={thumb.channel}
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="flex flex-col justify-center">
          <h3 className="font-medium text-base mb-1 line-clamp-2 text-black">
            {thumb.title}
          </h3>
          <div className="text-sm text-gray-700">{thumb.channel}</div>
          <div className="flex items-center text-xs text-gray-500 mt-1 gap-2">
            <span>{thumb.views}</span>
            <span>•</span>
            <span>{thumb.uploaded}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
