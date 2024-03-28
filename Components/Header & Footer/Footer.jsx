import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {
  return (
    <div className=" py-20 bg-black-100 flexCenter w-full">
      <div className="inner-container w-[90%] flex flex-col gap-16">
        <h2 className="w-[88%] text-white regular-64 poppins-font">
          Starting a new project or want to collaborate with us?{" "}
          <span className="text-primary-10 flex items-center contents font-normal">Let’s talk <IoIosArrowForward height="35px" width="20px" className='inline'/></span>{" "}
          <span className="text-gray-95"> <br /> hello@designticks.com</span>
        </h2>
        <div className="footer-links flexBetween">
          <ul className='flex flex-col gap-3'>
            <li className='regular-32 text-white'>Company</li>
            <li className='regular-24 text-gray-95 poppins-font'>Work</li>
            <li className='regular-24 text-gray-95 poppins-font'>Agency</li>
            <li className='regular-24 text-gray-95 poppins-font'>Services</li>
            <li className='regular-24 text-gray-95 poppins-font'>News</li>
            <li className='regular-24 text-gray-95 poppins-font'>Website Accessibility</li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li className='regular-32 text-white'>Company</li>
            <li className='regular-24 text-gray-95 poppins-font'>Work</li>
            <li className='regular-24 text-gray-95 poppins-font'>Agency</li>
            <li className='regular-24 text-gray-95 poppins-font'>Services</li>
            <li className='regular-24 text-gray-95 poppins-font'>News</li>
            <li className='regular-24 text-gray-95 poppins-font'>Website Accessibility</li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li className='regular-32 text-white'>Company</li>
            <li className='regular-24 text-gray-95 poppins-font'>Work</li>
            <li className='regular-24 text-gray-95 poppins-font'>Agency</li>
            <li className='regular-24 text-gray-95 poppins-font'>Services</li>
            <li className='regular-24 text-gray-95 poppins-font'>News</li>
            <li className='regular-24 text-gray-95 poppins-font'>Website Accessibility</li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li className='regular-32 text-white'>Company</li>
            <li className='regular-24 text-gray-95 poppins-font'>Work</li>
            <li className='regular-24 text-gray-95 poppins-font'>Agency</li>
            <li className='regular-24 text-gray-95 poppins-font'>Services</li>
            <li className='regular-24 text-gray-95 poppins-font'>News</li>
            <li className='regular-24 text-gray-95 poppins-font'>Website Accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
