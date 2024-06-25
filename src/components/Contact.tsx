import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

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

    emailjs.send('service_vgp2a4p', 'template_hci0jrq', {
      name,
      email,
      subject,
      message,
    }, '4_EdUdQmQzqj9eJce')
    .then((response) => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    }, (err) => {
      console.log('FAILED...', err);
      setError('Failed to send message. Please try again later.');
      setIsSubmitting(false);

      setTimeout(() => {
        setError('');
      }, 5000);
    });
  };

  return (
    <section id="contact" className="p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 flex items-center mb-10">
          Get In Touch.
          <div className="flex-grow h-px bg-gray-500 ml-4 mt-8"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-gray-300 mr-4" />
            <div>
              <h3 className="text-gray-400">Email</h3>
              <p className="text-white">janne.arkko@outlook.com</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <FaPhoneAlt className="text-4xl text-gray-300 mr-4" />
            <div>
              <h3 className="text-gray-400">Phone</h3>
              <p className="text-white">+358405655290</p>
            </div>
          </div>
        </div>
        {isSuccess && <p className="text-green-500 mb-4">Your message has been sent successfully!</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg"
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg"
              required
              placeholder="Your email"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg"
              required
              placeholder="Your subject"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg"
              rows={5}
              required
              placeholder="Write your text..."
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-green-700 py-2 px-4 rounded-full transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;


