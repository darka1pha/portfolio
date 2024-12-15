import { sendEmail } from '@/lib/actions';

export default function Contact() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-5xl font-bold mb-2'>Contact</h1>
      <p className='text-gray-400 mb-12'>Get in Touch</p>

      <form
        action={sendEmail}
        className='space-y-8'
      >
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <label className='block text-sm font-medium mb-2'>Your Name</label>
            <input
              name='name'
              type='text'
              className='w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-2'>Your Email</label>
            <input
              name='email'
              type='email'
              className='w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Subject</label>
          <input
            name='subject'
            type='text'
            className='w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Message</label>
          <textarea
            name='message'
            rows={6}
            className='w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500'
          ></textarea>
        </div>

        <button
          type='submit'
          className='bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
