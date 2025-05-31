
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Certified Python Developer",
      issuer: "GRRAS Solutions Pvt. Ltd.",
      description: "Comprehensive certification covering advanced Python programming, data science concepts, and practical application development.",
      skills: ["Python Programming", "Data Science", "OOP", "Database Integration"]
    },
    {
      title: "Certified Data Science",
      issuer: "GRRAS Solutions Pvt. Ltd.",
      description: "Specialized certification in data science methodologies, statistical analysis, and machine learning fundamentals.",
      skills: ["Data Analysis", "Statistical Methods", "Machine Learning", "Data Visualization"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{cert.title}</h3>
                  <p className="text-blue-600 font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <ExternalLink size={16} />
                <span className="text-sm">View Certificate</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
