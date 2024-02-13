import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../../../Server/Config/firebase.config';
import { addDoc, collection } from 'firebase/firestore';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Add form data to Firestore collection
      const collectionRef = collection(db, 'contacts');
      await addDoc(collectionRef, data);

      // Clear the form after submission
      reset();

      console.log('data',data);
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      {/* Contact Form */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: 'Phone is required' })}
                className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                rows="4"
                className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue justify-center justify-items-center"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        {/* Your existing contact information JSX */}
      </section>
    </div>
  );
}

export default Contact;
