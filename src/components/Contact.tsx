import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import SectionHeader from './SectionHeader';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_vgp2a4p',
        'template_hci0jrq',
        { name, email, subject, message },
        '4_EdUdQmQzqj9eJce'
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsSubmitting(false);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setTimeout(() => setIsSuccess(false), 5000);
        },
        () => {
          setError('Failed to send message. Please try again later.');
          setIsSubmitting(false);
          setTimeout(() => setError(''), 5000);
        }
      );
  };

  return (
    <div className="px-2 py-8 lg:px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="Contact"
          subtitle="Reach out for collaboration, opportunities, or questions"
        />

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="card flex items-center gap-4">
            <FaEnvelope className="text-2xl text-accent" />
            <div>
              <h3 className="text-sm text-gray-500">Email</h3>
              <a
                href="mailto:janne.arkko@outlook.com"
                className="text-white transition-colors hover:text-accent"
              >
                janne.arkko@outlook.com
              </a>
            </div>
          </div>
          <div className="card flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-accent" />
            <div>
              <h3 className="text-sm text-gray-500">Phone</h3>
              <a
                href="tel:+358405655290"
                className="text-white transition-colors hover:text-accent"
              >
                +358 40 565 5290
              </a>
            </div>
          </div>
        </div>

        {isSuccess && (
          <p className="mb-4 rounded-lg border border-green-700/50 bg-green-900/20 px-4 py-3 text-green-400">
            Your message has been sent successfully.
          </p>
        )}
        {error && (
          <p className="mb-4 rounded-lg border border-red-700/50 bg-red-900/20 px-4 py-3 text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="card grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-surface-600 bg-surface-700 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-surface-600 bg-surface-700 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="mb-2 block text-sm text-gray-400">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-lg border border-surface-600 bg-surface-700 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              required
              placeholder="What would you like to discuss?"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-surface-600 bg-surface-700 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              rows={5}
              required
              placeholder="Write your message..."
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
