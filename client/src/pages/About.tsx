import aboutImage from "../assets/aboutuspage.png";

function About() {
  return (
    <section>
      <div className="container h-screen">
        <div
          className="h-70 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>
        <div className="px-8 py-10">
          <h1 className="font-bold text-3xl max-w-sm md:max-w-lg">Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p className="mt-5">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br /> Our team is full of vanlife enthusiasts who know firsthand
            the magic of touring the world on 4 wheels.
          </p>
          <div className="card bg-[#FFCC8D] rounded-sm mt-5 px-8 py-10">
            <h2 className="font-bold text-2xl">Your destination is waiting.Your van is ready.</h2>
            <button className="bg-[#161616] text-white rounded-md py-2 px-4 mt-5">
              Explore our vans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
