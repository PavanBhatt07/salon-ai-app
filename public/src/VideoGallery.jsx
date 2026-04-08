// Gallery of before/after hairstyle videos
import React from 'react';

const videos = [
    { src: '/videos/beforeafter1.mp4', label: 'Transformation 1' },
    { src: '/videos/beforeafter2.mp4', label: 'Transformation 2' },
    { src: '/videos/beforeafter3.mp4', label: 'Transformation 3' },
];

function VideoGallery() {
    return (
        <section className="mb-8 px-4">
            <h3 className="text-xl font-bold mb-4 text-center">Before & After Gallery</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {videos.map((video, idx) => (
                    <div key={idx} className="w-64">
                        <video
                            className="rounded shadow"
                            src={video.src}
                            controls
                            width="100%"
                            height="180"
                        />
                        <p className="text-center mt-2 text-gray-700">{video.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default VideoGallery;