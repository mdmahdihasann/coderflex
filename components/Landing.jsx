"use client";
import React, { useState } from "react";
import database from "@/database/videos.json";
import VideoCard from "./VideoCard";

const Landing = () => {
  const [datas] = useState(database);

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      {datas.length > 0
        ? datas.map((data) => (
            <VideoCard key={data.id} data={data}/>
          ))
        : "data not found"}
    </div>
  );
};

export default Landing;
