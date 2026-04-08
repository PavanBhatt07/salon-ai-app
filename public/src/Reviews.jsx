//Show Google reviews/testimonials// Reviews section (sample testimonials)
import React from 'react';

const reviews = [
    { name: 'Alice', text: 'Amazing service and friendly staff!' },
    { name: 'Bob', text: 'Loved my new hairstyle. Highly recommend!' },
    { name: 'Cathy', text: 'Clean, professional, and great results.' },
];

function Reviews() {
    return (
        <section className="mb-8 px-4">
            <h3 className="text-xl font-bold mb-4 text-center">Customer Reviews</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {reviews.map((r, idx) => (
                    <div key={idx} className="bg-white p-4 rounded shadow w-64">
                        <p className="italic">"{r.text}"</p>
                        <p className="mt-2 text-right font-semibold">- {r.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews; import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);