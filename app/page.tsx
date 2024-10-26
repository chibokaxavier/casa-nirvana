import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="sm:max-w-[738px] md:max-w-[1024px] lg:max-w-[1366px]  h-[100vh]  lg:mx-20    mx-10">
      <section className="">
        <div className="xl:h-[550px] h-auto mt-[10px] flex flex-col xl:flex-row xl:gap-[90px]">
          {/* Text Section */}
          <div className="xl:w-[50%] mt-[20px] lg:mt-[20px]">

            <h2 className="font-bold lg:text-5xl  text-3xl sm:text-4xl md:text-[44px]  leading-[50px] sm:leading-[55px]  capitalize lg:mb-5">
              Find real estate and get your dream place.
            </h2>
            <p className="py-5 text-sm sm:text-base md:text-lg md:leading-[40px] ">
              Welcome to your journey home! Whether you're searching for a cozy
              apartment, a family-friendly house, or a luxury getaway, our app
              connects you with properties that suit your lifestyle and budget.
              Browse through curated listings, explore neighborhoods.
            </p>
            <Search />
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center xl:w-[50%]  xl:mb-36">
            <img
              src="/house.png"
              className="  md:w-[500px] md:h-[500px] lg:h-[600px] lg:w-[600px] object-contain"
              alt="Food Illustration"
            />
          </div>
        </div>
      </section>
      <section>
       
      </section>
    </main>
  );
}
