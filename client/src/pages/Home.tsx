import heroImage from "../assets/heroimage.png";

function Home() {
  return (
    <>
      <section className="flex flex-col h-screen">
        <div className="">
          <div className="heroImage-container relative" style={{ backgroundImage: `url(${heroImage})`, height: "400px", objectFit: "cover" }}>
            <div className="bg-[rgba(0,0,0,0.5)] z-10 inset-0 absolute"></div>
            <div className="text-white flex flex-col text-center justify-center items-center h-full mx-auto z-20 relative max-w-sm md:max-w-lg">
              <h1 className="section-heading font-bold text-3xl">You got the travel plans, we got the travel vans.</h1>
              <p className="mt-5 tracking-wide">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
              <button className="bg-[#FF8C38] w-full py-4 rounded-md mt-5">Hire me</button>
            </div>
          <p className="w-full text-center px-4 mt-10 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae doloribus vero? Magni magnam quas quo possimus aut nemo, necessitatibus nobis nihil fugiat quod odio omnis obcaecati sequi commodi inventore?
          </p>
          </div>
        </div>
      </section>   
    </>
  );
}

export default Home;
