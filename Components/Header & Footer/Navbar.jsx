import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between w-[90%] py-7">
        <Link href="/">
          <Image src="/DesignTicks_Logo.svg" width={225} height={58.373} className="DesignTicks_Logo" />
        </Link>
        <ul className="header-menu-list flex gap-24 items-center justify-center">
          <Link href="/services">
            <li className="header-menu poppins-font">Services</li>
          </Link>
          <Link href="/services">
            <li className="header-menu poppins-font">Project</li>
          </Link>
          <Link href="/services">
            <li className="header-menu poppins-font">Our Blog</li>
          </Link>
          <Link href="/contact">
            <li className="header-menu poppins-font">Contact Us</li>
          </Link>
        </ul>
        <Link
          href="/contact"
          className="px-9 bg-orange-50 rounded-full text-white py-2 header-menu poppins-font btn-contact-us"
        >
          Contact Us
        </Link>
{/* 
        <div className="">
          <Hamburger />
        </div> */}
      </header>
    </>
  );
};

export default Navbar;
