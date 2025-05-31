
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background that laid the foundation for my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Bachelor's of Computer Applications
                    </h3>
                    <h4 className="text-xl text-blue-600 font-medium">
                      Jaipur National University
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>2019 - 2022</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>Jaipur, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Areas of Study</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        Computer Programming
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        Database Management Systems
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        Software Engineering
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        Data Structures & Algorithms
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        Web Technologies
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        System Analysis & Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
