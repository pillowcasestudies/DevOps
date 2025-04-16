"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thanks! Your data has been submitted.");
        setForm({ email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen p-8 sm:p-20 font-sans bg-gray-100 text-gray-900">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">CI/CD Demo: MongoDB Integration</h1>
        <p className="text-lg mb-8">
          This app demonstrates a CI/CD workflow with GitHub Actions, Docker, MongoDB, and deployment to cloud platforms like Azure or AWS. Submit your info below to test the database connection!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white shadow-xl p-8 rounded-xl"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
          {status && <p className="mt-2 text-sm text-green-700">{status}</p>}
        </form>
      </section>
    </main>
  );
}
