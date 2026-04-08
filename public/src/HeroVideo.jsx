//Plays salon/shop intro video// Hero section with a looping salon video
import React from 'react';

function HeroVideo() {
    return (
        <section className="mb-8">
            <video
                className="w-full h-64 object-cover rounded-lg shadow"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold">Welcome to Your Dream Salon</h2>
                <p className="text-gray-600">Experience the best styles, powered by AI!</p>
            </div>
        </section>
    );
}

export default HeroVideo;