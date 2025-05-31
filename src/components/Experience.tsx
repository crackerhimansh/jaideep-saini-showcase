
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Python Data Science Trainee",
      company: "Grras Solutions Pvt. Ltd.",
      location: "Jaipur, India",
      period: "08/2023 - 06/2024",
      description: [
        "Gained comprehensive knowledge of advanced Python programming covering topics like object-oriented programming (OOP) and data science concepts",
        "Worked with database systems such as MySQL",
        "Gained industry experience in exploratory data analysis (EDA) and data visualization with Python and MS Excel",
        "Utilized Python libraries including Pandas, NumPy, Seaborn, Matplotlib for data analysis and visualization projects"
      ]
    },
    {
      title: "Backend Developer (Python Django)",
      company: "Aladinn Digital Solutions (ALDS)",
      location: "Remote",
      period: "07/2024 - 01/2025",
      description: [
        "Developed and maintained backend applications using Python and Django framework",
        "Implemented RESTful APIs for various web applications",
        "Worked with database design and optimization",
        "Collaborated with frontend developers to integrate user-facing elements with server-side logic",
        "Participated in code reviews and maintained high coding standards"
      ]
    },
    {
      title: "Python Developer",
      company: "GIP (Global IT Providers) Technologies Pvt. Ltd.",
      location: "Remote",
      period: "12/2023 - 07/2024",
      description: [
        "Developed Python applications for various client projects",
        "Implemented data processing and analysis solutions",
        "Worked on automation scripts to improve operational efficiency",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Gained experience in project management and client communication"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey showcasing hands-on experience in Python development and data science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-200"></div>
              )}
              
              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
