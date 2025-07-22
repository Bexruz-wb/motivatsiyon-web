import React from "react";

const videos = [
  {
    title: "Hech qachon taslim bo‘lma!",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Erta tongda motivatsiya",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Ulug‘ maqsadlar sari",
    url: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
];

const Videos = () => {
  return (
    <div className="bg-gray-100 py-10" id="video-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Motivatsion Videolar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="w-full aspect-video relative rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              <p className="text-center mt-2 font-medium">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
