
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Python Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Beautiful Soup", "Datetime"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Data Science & Analysis",
      skills: ["Data Preprocessing", "Data Cleaning", "Data Visualization", "EDA", "Statistical Analysis"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "PostgreSQL", "SQLite3", "Git", "RESTful APIs"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Web Technologies",
      skills: ["Flask", "Django", "REST API Development", "JWT Authentication"],
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Other Tools",
      skills: ["Microsoft Excel", "MS Word", "Power BI", "Linux", "Object-Oriented Programming"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
