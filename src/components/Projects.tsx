
import React from 'react';
import { Github, ExternalLink, Code, Database, BarChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Glassdoor Job Postings Analysis",
      description: "Comprehensive exploratory data analysis of Kaggle dataset providing insights and conclusions on job market trends. Built interactive visualizations and data preprocessing pipelines.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      github: "https://github.com/Jaideepsaini21",
      demo: "#",
      category: "Data Analysis"
    },
    {
      title: "Banking Application System",
      description: "Developed a Python program that allows users to create bank accounts, login securely, and manage banking operations including credit/debit transactions and password management.",
      technologies: ["Python", "OOP", "File Handling", "Security"],
      icon: <Code className="w-8 h-8 text-green-600" />,
      github: "https://github.com/Jaideepsaini21",
      demo: "#",
      category: "Application Development"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard built with Flask framework for visualizing complex datasets. Features real-time data updates and multiple chart types for comprehensive analysis.",
      technologies: ["Python", "Flask", "HTML/CSS", "JavaScript", "Chart.js"],
      icon: <Database className="w-8 h-8 text-purple-600" />,
      github: "https://github.com/Jaideepsaini21",
      demo: "#",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating practical application of data science and development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Jaideepsaini21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
