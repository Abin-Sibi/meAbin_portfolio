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
      <section className="container max-w-4xl bg-purple-950 bg-opacity-50 mx-auto p-8 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Hello! I'm Priti Jadhav, a passionate Machine Learning Engineer with
            a love for Artificial Intelligence and problem-solving. My mission
            is to use cutting-edge technology to make the world a better place
            through data and algorithms.a love for Artificial Intelligence and problem-solving. My mission
            is to use cutting-edge technology to make the world a better place
            through data and algorithms.
          </p>
        </div>
      </section>

      

      {/* Experience Section */}
      <section className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Software Engineer at ABC Corp</h3>
              <p className="text-lg">Jan 2022 - Present</p>
              <p>
                Worked on building and deploying machine learning models for
                improving product recommendations and customer segmentation.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Data Scientist Intern at XYZ Labs</h3>
              <p className="text-lg">Jun 2021 - Dec 2021</p>
              <p>
                Analyzed large datasets to uncover trends and build predictive
                models that increased business insights by 30%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container max-w-4xl mx-auto  py-8 bg-gray-800 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">B.Sc in Computer Science</h3>
            <p className="text-lg">University of Technology, 2019 - 2022</p>
            <p>Graduated with First Class Honors, specialized in AI and Machine Learning.</p>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Hobbies & Interests</h2>
          <p className="text-lg leading-relaxed">
            When I'm not coding, I enjoy photography, hiking, and reading books
            on artificial intelligence and data science. I love exploring the
            outdoors and capturing the beauty of nature through my camera lens.
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
   
  );
};

export default About;
