'use client';

import { motion } from 'framer-motion';
import HospitalScene from '@/components/HospitalScene';

const departments = ['Cardiology', 'Orthopedics', 'ICU & Trauma', 'General Medicine'];
const journey = ['Arrival', 'Diagnosis', 'Treatment', 'Recovery'];

export default function HomePage() {
  return (
    <main className="grid-bg min-h-screen">
      <a
        href="tel:+919999999999"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-3 font-semibold text-white shadow-2xl shadow-red-500/50 animate-pulse"
      >
        Emergency 24/7
      </a>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-14 pt-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Krishna Multispeciality Hospital & Trauma Care
          </span>
          <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
            Advanced Multispeciality Care with 24/7 Trauma Response
          </h1>
          <p className="text-lg text-slate-600">
            Futuristic care delivery with fast emergency workflows, expert specialists, and transparent treatment journeys.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#appointment" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Book Appointment</a>
            <a href="tel:+919999999999" className="rounded-full bg-secondary px-6 py-3 font-semibold text-white">Emergency Call Now</a>
          </div>
        </div>
        <HospitalScene />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="mb-6 text-2xl font-bold text-primary">Departments</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <motion.article
              whileHover={{ rotateY: 9, y: -8 }}
              key={dept}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-lg font-semibold text-primary">{dept}</h3>
              <p className="mt-2 text-sm text-slate-600">Tap to explore specialists, procedures, and treatment outcomes.</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="mb-6 text-2xl font-bold text-primary">Patient Journey</h2>
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <ol className="grid gap-4 md:grid-cols-4">
            {journey.map((step, index) => (
              <li key={step} className="rounded-2xl border border-slate-200 p-4 text-center">
                <span className="text-xs font-bold text-secondary">STEP {index + 1}</span>
                <p className="mt-2 font-semibold text-primary">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14" id="appointment">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary">Book an Appointment</h2>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-slate-300 p-3" placeholder="Name" />
            <input className="rounded-xl border border-slate-300 p-3" placeholder="Phone" />
            <select className="rounded-xl border border-slate-300 p-3 md:col-span-1">
              {departments.map((dept) => <option key={dept}>{dept}</option>)}
            </select>
            <input type="date" className="rounded-xl border border-slate-300 p-3" />
            <button className="rounded-xl bg-primary p-3 font-semibold text-white md:col-span-2">Submit Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
