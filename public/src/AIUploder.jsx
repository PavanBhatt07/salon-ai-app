//Upload customer photo + AI suggestion// AI hairstyle suggestion uploader (1 free attempt per user)
import React, { useState } from 'react';

function AIUploader() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');
    const [used, setUsed] = useState(() => localStorage.getItem('aiUsed') === 'true');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        setLoading(true);

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const res = await fetch('/api/analyze', { method: 'POST', body: formData });
            const data = await res.json();
            setResult(data.recommendation);
            setUsed(true);
            localStorage.setItem('aiUsed', 'true');
        } catch {
            setResult('Error analyzing photo.');
        }
        setLoading(false);
    };

    return (
        <section className="mb-8 px-4">
            <h3 className="text-xl font-bold mb-4 text-center">AI Hairstyle Suggestion</h3>
            {used ? (
                <div className="text-center text-gray-500">
                    <p>You have used your free AI suggestion.</p>
                    {result && <p className="mt-2 text-green-600">{result}</p>}
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="border p-2 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                        disabled={loading}
                    >
                        {loading ? 'Analyzing...' : 'Get Suggestion'}
                    </button>
                    {result && <p className="text-green-600">{result}</p>}
                </form>
            )}
        </section>
    );
}

export default AIUploader;
// Booking form for appointments
import React, { useState } from 'react';

const services = ['Haircut', 'Color', 'Styling', 'Treatment'];

function BookingForm() {
    const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', service: services[0] });
    const [message, setMessage] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Sending...');
        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            setMessage(data.message || 'Booking confirmed!');
            setForm({ name: '', phone: '', date: '', time: '', service: services[0] });
        } catch {
            setMessage('Error submitting booking.');
        }
    };

    return (
        <section className="mb-8 px-4">
            <h3 className="text-xl font-bold mb-4 text-center">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4 bg-white p-6 rounded shadow">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border p-2 rounded" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="border p-2 rounded" />
                <input name="date" type="date" value={form.date} onChange={handleChange} required className="border p-2 rounded" />
                <input name="time" type="time" value={form.time} onChange={handleChange} required className="border p-2 rounded" />
                <select name="service" value={form.service} onChange={handleChange} className="border p-2 rounded">
                    {services.map((s) => <option key={s}>{s}</option>)}
                </select>
                <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Book Now</button>
                {message && <p className="text-center text-green-600">{message}</p>}
            </form>
        </section>
    );
}
export { BookingForm };