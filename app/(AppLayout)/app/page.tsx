import ShortsCard from "@/components/shorts-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import YoutubeCard from "@/components/youtube-card";
import { Thumbnail } from "@/types";
import { Select } from "@radix-ui/react-select";
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
          <div className="flex flex-wrap justify-baseline gap-8">
            {shortsThumbnails.map((thumb) => (
              <ShortsCard key={thumb.id} thumb={thumb} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
