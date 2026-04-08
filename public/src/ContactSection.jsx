//Location map, call number, WhatsApp// Contact section with Google Maps, phone, WhatsApp
import React from 'react';

function ContactSection() {
    return (
        <section className="mb-8 px-4">
            <h3 className="text-xl font-bold mb-4 text-center">Contact Us</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <iframe
                    title="Salon Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019...YOUR_MAP_EMBED_URL..."
                    width="300"
                    height="200"
                    className="rounded shadow"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <div className="flex flex-col gap-2">
                    <a href="tel:+1234567890" className="text-blue-600 underline">Call: +1 234 567 890</a>
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded text-center"
                    >
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;