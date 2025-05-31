
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              JS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Jaideep Saini
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Python Developer & Data Science Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 7385865</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>jaideepdev@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Jaideepsaini21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jaideep-saini-039300286/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Enthusiastic and motivated Python data science student with a passion for leveraging data-driven insights to 
            solve complex problems. Possessing a strong foundation in Python programming, data analysis, and machine 
            learning. I am eager to apply my skills in a dynamic and collaborative environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
