import Footer from "@/components/Footer";
import React from "react";

const About = () => {
  return (
    <> <div className=" my-20 text-white min-h-screen">
      {/* Header Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">Get to know who I am and what I do</p>
      </section>

      {/* Introduction Section */}
      <section className="container max-w-4xl bg-purple-950 bg-opacity-50 mx-auto p-6 sm:p-8 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">
            Introduction
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left">
            Hello! I am Abin Sibi, basically from Ernakulam, India.Currently i am pursuing my post-graduate degree that is MCA from Christ University,Bangalore.
            I am litterally a self taught MERN Stack developer and also had experience with advanced python and flutter.Now i am trying to get more knowledge in Next.js and TypeScript 
            as a part of it i had build this portfolio itself using Nextjs and Tailwindcss.
          </p>
        </div>
      </section>



      {/* Experience Section */}
      <section className="container max-w-4xl  mx-auto  py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Mern Stack Developement @ Brocamp(Brototype) - Ernakulam</h3>
              <p className="text-lg">Jul 2022 - Jan 2023</p>
              <p>
              It was a self learning platform where industrial experts review our works weekly.Worked in MongoDB, Express.js, React.js, Node.js and had done 2 main projects and some mini projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container max-w-4xl mx-auto  py-8 bg-gray-800 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto mb-5">
          <div className="bg-gray-900 m-2  p-3 rounded-lg">
            <h3 className="text-2xl font-bold">Master of Computer Application - MCA</h3>
            <p className="text-lg">Christ University, Bangalore - 2023 - 2025</p>
            <p>Pursuing the Post-graduate, specialized in Web and Mobile Development.</p>
          </div>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto mb-5">
          <div className="bg-gray-900 m-2  p-3 rounded-lg">
            <h3 className="text-2xl font-bold">Bachelor of Computer Application - BCA</h3>
            <p className="text-lg">Nirmala College, Muvatupuzha - 2019 - 2022</p>
            <p>Graduated with 63 percentage.</p>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="container mx-auto  py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Hobbies & Interests</h2>
          <p className="text-lg leading-relaxed">
          When I’m not coding, I enjoy watching movies and series, hanging out with friends, riding cars, and trying new foods and places.
           I love exploring the outdoors and going on car drives to discover new spots.
          </p>
        </div>
      </section>
    </div>
      <Footer />
    </>

  );
};

export default About;
