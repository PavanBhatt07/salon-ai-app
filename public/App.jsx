//Main React component linking everything

// Main App component linking all sections
import React from 'react';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import VideoGallery from './components/VideoGallery';
import AIUploader from './components/AIUploader';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import Reviews from './components/Reviews';
import './tailwind.css';

function App() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <HeroVideo />
            <VideoGallery />
            <AIUploader />
            <BookingForm />
            <ContactSection />
            <Reviews />
        </div>
    );
}

export default App;