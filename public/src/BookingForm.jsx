//Form to book an appointment// Booking form for appointments
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

export default BookingForm;