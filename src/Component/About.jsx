import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-2xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          consequatur dolor consectetur id aliquam ad, reprehenderit ex eaque
          libero odio corporis voluptate magni assumenda obcaecati, inventore
          provident, earum culpa in ea quo nulla quas rem. Quidem aliquam vero
          ipsam sequi.
        </p>
        <br />
        <p className="text-2xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          enim explicabo qui labore rerum nam numquam suscipit tempora porro.
          Vitae animi quos eius minus laudantium maxime exercitationem,
          molestias cum perferendis! Commodi provident adipisci, consequatur
          doloribus nam tempora veritatis cumque vel!
        </p>
      </div>
    </div>
  );
};

export default About;
