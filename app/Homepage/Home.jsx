import { About, HeroSection, OurWork, OurClient, Insights, ContactForm, ReviewSlider, Tabs, NewSlider } from "@/Components";

const MainHome = () => {
  const data=[
    {
      ContactFormTitle:"Get in Touch with us"
    }
  ]
  return (
    <main className="main-homepage flex flex-col items-center justify-center gap-48 overflow-hidden pb-32">
      <HeroSection />
      <OurWork />
      <About />
      <OurClient />
      <Tabs />
      <NewSlider />
      <Insights />
      <ContactForm ContactFormTitle={data[0].ContactFormTitle}/>
      <div className="punch-line w-full py-[150px] bg-primary-10 flex items-center justify-center">
        <div className="w-[90%]">
          <h2 className="regular-133 poppins-font w-full">
            <sup className="text-white">"</sup>Your brand's journey deserves the
            best tools and skills. Whether it's a striking logo, an engaging
            banner, or a user-friendly website, we're here to make it happen.
            <sub className="text-white">"</sub>
          </h2>
        </div>
      </div>
      <ReviewSlider />
    </main>
  );
};

export default MainHome;