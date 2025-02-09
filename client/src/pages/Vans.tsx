import { useState, useEffect } from "react";
import { getVans } from "../api.ts";
import { NavLink } from "react-router-dom";

type Van = {
  _id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

export const Vans = () => {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {
    async function fetchVans() {
      const van = await getVans();
      setVans(van);
    }
    fetchVans();
  }, []);

  console.log(vans);

  return (
    <section className="px-8 py-8 h-screen">
      <div className="container ">
        <h1 className="font-bold text-3xl">Explore our van options</h1>
        <div className="mt-5 flex flex-wrap gap-6">
          {vans.length !== 0 &&
            vans.map((van, index) => (
              <NavLink to={`${van._id}`}>
                
                <div key={index} className="">
                  <img
                    src={van.imageUrl}
                    alt={`${van.name} van`}
                    width={170}
                    className="rounded-md"
                  />
                  <div className="flex items-start justify-between mt-2">
                    <div className="flex flex-col items-start">
                      <h2 className="font-bold tracking-tight">{van.name}</h2>
                      <button
                        className={`${
                          van.type === "rugged" ? "bg-[#115E59]" : ""
                        }
                            ${van.type === "simple" ? "bg-[#E17654]" : ""}
                            ${van.type === "luxury" ? "bg-[#161616]" : ""}
                             text-white px-4 py-1 rounded-sm text-sm mt-2`}
                      >
                        {van.type}
                      </button>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-bold">${van.price}</p>
                      <p className="text-xs">/day</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </section>
  );
};
