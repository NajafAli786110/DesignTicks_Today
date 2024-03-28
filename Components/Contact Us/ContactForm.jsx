import Link from "next/link";
import React from "react";

const ContactForm = (props) => {
  return (
    <div className="w-[90%] flex flex-col items-center gap-28  contact-us-form">
      <h2 className="regular-64">{props.ContactFormTitle}</h2>
      <div className="inner-container w-full flex justify-center gap-14">
        <form className="flex flex-col gap-16 w-1/2 conatct-form-fields">
          <div className="flex flex-col gap-12">
            <input
              type="text"
              className="input-style"
              name="PersonName"
              id="PersonID"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="input-style"
              name="PersonEmail"
              id="PersonEmailID"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              className="input-style"
              name="PersonProjectDetail"
              id="PersonDetails"
              placeholder="Tell Us About Your Project..."
            />
          </div>
          <input className="Submit-button-primary satoshi-22 self-start" type="submit" value="Send" />
        </form>
        <div className="intrested-box flex flex-col gap-8 w-1/2">
            <h3 className="regular-38 poppins-font">I’m interested in...</h3>
            <div className="services flex  flex-wrap gap-4">
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
                <Link href="/contact" className="form-button-primary poppins-font">Landing</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
