export default function Footer() {
  return (
    <footer className='border-t border-gray-800 py-8 mt-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center space-y-4'>
          <h3 className='text-xl font-semibold'>Get in Touch With Me</h3>
          <a
            href='mailto:abolfazl.omrani1999@gmail.com'
            className='text-2xl font-bold underline text-teal-500'
          >
            abolfazl.omrani1999@gmail.com
          </a>
          <div className='flex items-center space-x-4 mt-4'>
            <div className='text-sm text-gray-400'>+98 937 823 9855</div>
          </div>
          <div className='text-sm text-gray-400 mt-8'>
            © 2025. Darkalpha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
