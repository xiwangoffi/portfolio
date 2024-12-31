import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dm24yri', 'template_ljh4qrk', form.current, 'WJjzfzg1wEVopSFfN')
      .then(
        () => {
          setFormStatus('SUCCESS');
          setFormData({
            from_name: '',
            from_email: '',
            message: ''
          });
        },
        (error) => {
          setFormStatus('FAILED');
          console.log('FAILED...', error.text);
        }
      );
  };

  const texts = {
    fr: {
      title: 'Contactez-moi',
      nameField: 'Nom',
      buttonText: 'Envoyer',
      succes: 'Le message a bien été envoyé !',
      failed: "Échec de l'envoi du message. Veuillez réessayer."
    },
    en: {
      title: 'Contact me',
      nameField: 'Name',
      buttonText: 'Send Message',
      succes: 'Message sent successfully!',
      failed: "Failed to send message. Please try again."
    }
  }

  return (
    <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">{texts[language].title}</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="from_name" className="block text-gray-700">{texts[language].nameField}</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="from_email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            {texts[language].buttonText}
          </button>
        </div>
        {formStatus === 'SUCCESS' && (
          <p className="text-green-500 text-center mt-4">{texts[language].succes}</p>
        )}
        {formStatus === 'FAILED' && (
          <p className="text-red-500 text-center mt-4">{texts[language].failed}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;