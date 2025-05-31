
import React from 'react';
import { Code, Database, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Python Programming",
      description: "Strong foundation in Python with expertise in data science libraries"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Data Analysis",
      description: "Experience in exploratory data analysis and data visualization"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Machine Learning",
      description: "Passionate about applying ML concepts to solve real-world problems"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Collaboration",
      description: "Eager to work in dynamic and collaborative environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Passionate Python Developer & Data Science Student
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As an enthusiastic Python developer and data science student, I bring a unique blend of 
              technical skills and analytical thinking to every project. My journey in programming began 
              with a fascination for how data can tell stories and drive meaningful decisions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I have hands-on experience working with industry-standard tools and technologies, including 
              Python, MySQL, and various data science frameworks. My goal is to leverage data-driven 
              insights to solve complex problems and contribute to innovative solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing my Bachelor's in Computer Applications from Jaipur National University, 
              I'm constantly learning and adapting to new technologies while building practical projects 
              that showcase my skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
