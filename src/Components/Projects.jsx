import React from "react";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      name: "Koni's Kitchen",
      pic: "https://i.ibb.co/ZW9FpL5/Screenshot-2022-12-11-161927.png",
      description: "Koni's Kichen is a service review website",
      url: "https://koni-s-kitchen.firebaseapp.com/",
    },
    {
      id: 2,
      name: "Bike Zone",
      pic: "https://i.ibb.co/wss8C1S/Screenshot-2022-12-11-163002.png",
      description: "Bike Zone is a bike resale website",
      url: "https://bike-zone-708de.web.app/",
    },

    {
      id: 3,
      name: "EduMart",
      pic: "https://i.ibb.co/51ZdGvK/Screenshot-2022-12-11-163347.png",
      description: "EduMart is a online learning platform",
      url: "https://edumart-113ce.firebaseapp.com/",
    },
  ];
  return (
    <div className="my-6 lg:mx-12">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {allProjects.map((p) => (
          <div key={p.id} className="card  bg-base shadow-xl image-full">
            <figure>
              <img src={p.pic} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>{p.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
