import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-gray-300 py-8 md:py-12 md:px-16 px-6'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8'>
        {/* Bagian Social Media */}
        <div className='flex flex-col items-start gap-3 text-sm'>
          <h5 className='font-semibold text-lg text-white mb-2'>My Social Media Accounts</h5>
          <div className='flex items-center gap-3'>
            <FaInstagram className='h-6 w-6 text-gray-400 hover:text-[#E1306C] transition-colors duration-300' />
            <a
              href='https://www.instagram.com/rfly.romeo_/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-gray-400 hover:text-white underline underline-offset-2 transition-colors duration-300'
            >
              @rfly.romeo_
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <FaTiktok className='h-6 w-6 text-gray-400 hover:text-white hover:scale-110 transition-all duration-300' />
            <a
              href='http://tiktok.com/@raflyromeoo_'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-gray-400 hover:text-white underline underline-offset-2 transition-colors duration-300'
            >
              @raflyromeoo_
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <FaYoutube className='h-6 w-6 text-gray-400 hover:text-[#FF0000] transition-colors duration-300' />
            <a
              href='https://youtube.com/@raflyromeoo'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-gray-400 hover:text-white underline underline-offset-2 transition-colors duration-300'
            >
              @raflyromeoo
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <FaLinkedin className='h-6 w-6 text-gray-400 hover:text-[#0A66C2] transition-colors duration-300' />
            <a
              href='https://www.linkedin.com/in/muhammad-rafly-romeo-nasution'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-gray-400 hover:text-white underline underline-offset-2 transition-colors duration-300'
            >
              Muhammad Rafly Romeo Nasution
            </a>
          </div>
        </div>

        {/* Garis Pemisah (muncul di desktop) */}
        <div className='hidden md:block border-l border-gray-800 h-24'></div>

        {/* Copyright */}
        <p className='mt-8 md:mt-0 text-center text-sm text-gray-400 px-4'>
          Built by{" "}
          <a
            href='https://www.linkedin.com/in/muhammad-rafly-romeo-nasution'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-white underline underline-offset-2 hover:text-[#357BC9] transition-colors duration-300'
          >
            Muhammad Rafly Romeo Nasution
          </a>
          . The source code is available on{" "}
          <a
            href='https://github.com/Raflyromeo'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-white underline underline-offset-2 hover:text-[#357BC9] transition-colors duration-300'
          >
            GitHub
          </a>
          .
        </p>
      </div>
      {/* Garis Pemisah (muncul di mobile) */}
      <div className='mt-8 border-t border-gray-800 pt-4 md:hidden text-center text-sm text-gray-400 px-4'>
        &copy; 2025
      </div>
    </footer>
  );
};

export default Footer;