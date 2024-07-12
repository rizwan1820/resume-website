"use client";

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: false, // Remove dots if not needed
  infinite: true,
  speed: 5000, // Adjust the speed for continuous slow movement
  slidesToShow: 7, // Adjust to fit more logos close together
  slidesToScroll: 1, // Adjust to scroll one logo at a time
  autoplay: true,
  autoplaySpeed: 0, // Set to 0 for continuous movement
  cssEase: 'linear', // Ensure smooth linear transition
  arrows: false, // Remove side arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [projects, setProjects] = useState<any[]>([]);


  useEffect(() => {
    // Fetch the projects data from the JSON file
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };



  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <div id="home" className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center font-mono mx-auto mb-8">
          <h1 className="text-5xl font-bold mb-8">Hey My name is RIZWAN</h1>
          <h2 className="text-2xl ml-4 mb-8">A<strong className="inline-block bg-yellow-300 px-2 py-1 rounded-md ml-2">passionate Full Stack Developer</strong> with expertise in creating robust and scalable web applications.
            I specialize in delivering seamless user experiences and innovative solutions tailored to meet your unique needs.</h2>
          <a href="#projects" className="bg-gray-700 text-white text-lg md:text-xl px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out font-bold">
            Projects <span className="ml-2">→</span>
          </a>
        </div>
        <div>
          <img src="/undraw_career_progress_ivdb.svg" alt="" />
        </div>
      </div>

      {/* About Me Section */}

      <div id="about" className="max-w-6xl py-10 mx-auto font-mono">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:basis-1/2 flex items-center justify-center p-5">
            <div className="text-center">
              <img src="logo.png" alt="Profile" className="rounded-full shadow-xl w-full md:w-3/4 lg:w-2/3 h-auto object-cover border-4 border-yellow-500 mb-4" />
            </div>
          </div>
          <div className="md:basis-1/2 flex items-center p-5">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-800">About Me</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">Specializing in high-quality web and mobile applications for startups, individuals, and small to medium-sized businesses. With a team of expert developers, designers, and engineers, we deliver tailored software solutions to meet your specific needs.</p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">Since our establishment in 2021, we have been dedicated to providing outstanding value and staying ahead of emerging technologies and trends. Our comprehensive services include website development, app development, UI/UX design, automation tools, AI/ChatGPT, Chrome extensions, and AWS/cloud services.</p>
              <a href="https://www.upwork.com/services/consultation/development-it-muhammmad-rizwan-1767561332313657344" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out mt-4">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>





      {/* Categories Section */}
      <h2 className="text-5xl font-extrabold mt-8 mb-8 text-center text-gray-800">Projects</h2>
      <div className="w-full max-w-4xl mx-auto mt-8 px-4">
        <div className="flex justify-center mb-8">
          <button onClick={() => handleCategoryClick('all')} className={`px-4 py-2 mx-2 rounded-lg font-bold ${selectedCategory === 'all' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            All
          </button>
          <button onClick={() => handleCategoryClick('mobile apps')} className={`px-4 py-2 mx-2 rounded-lg font-bold ${selectedCategory === 'mobile apps' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            Mobile Apps
          </button>
          <button onClick={() => handleCategoryClick('web app')} className={`px-4 py-2 mx-2 rounded-lg font-bold ${selectedCategory === 'web app' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            Web App
          </button>
          <button onClick={() => handleCategoryClick('desktop app')} className={`px-4 py-2 mx-2 rounded-lg font-bold ${selectedCategory === 'desktop app' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            Desktop App
          </button>
          <button onClick={() => handleCategoryClick('other')} className={`px-4 py-2 mx-2 rounded-lg font-bold ${selectedCategory === 'other' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
            Other
          </button>
        </div>

        {/* Projects Section */}
        <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} className="w-full h-32 object-cover mb-4 rounded-lg" />

              </a>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>

              {/* Description Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1 border-b-2 border-gray-300 pb-1">Description</h4>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* My Role Section */}
              <div className="mb-6 p-4 bg-gray-300 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-black-200 mb-2">My Role <span className="ml-2">&#9660;</span></h4>
                <p className="text-black-500 text-base">{project.role} </p>
              </div>



              {/* Technologies Section */}
              <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2"><span className="text-yellow-500">&#128187;</span>
                  Technologies
                </h4>
                <ul className="flex flex-wrap gap-4">
                  {project.technologies.map((tech: string, index: number) => (

                    <li key={index} className="text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-black-200 transition-colors duration-300 ease-in-out">{tech}</li>
                  ))}

                </ul>
              </div>

              {/* Link Section */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out ml-9">
                View Project
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* Slider Section */}
      <div className="py-12 mt-10 bg-white border-2 border-yellow-500">
        <div className="max-w-10xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8 mfont-mono">My Expertise </h2>
          <Slider {...sliderSettings}>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/react.jpg" alt="React" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp" alt="Next.js" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp" alt="Node.js" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/azure-sql-database6354.jpg" alt="Azure SQL Database" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/css3-html51661.jpg" alt="CSS3 & HTML5" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/javascript.jpg" alt="JavaScript" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/bootstrap-new725.logowik.com.webp" alt="Bootstrap" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/tailwind-css7675.logowik.com.webp" alt="Tailwind CSS" className="h-16" />
              </a>
            </div>
            <div className="px-2">
              <a>
                <img src="https://logowik.com/content/uploads/images/github9775.jpg" alt="GitHub" className="h-16" />
              </a>
            </div>
          </Slider>
        </div>
      </div>
      {/* footer Section */}
      <div className="bg-gray-900 text-white h-[500px] w-full flex flex-col items-center justify-center p-6 mt-10">
        <button className="border-2 border-yellow-500 rounded-full p-2 mb-4 flex items-center">
          <span className="text-yellow-500">⚡</span>
          <span className="ml-2">Available Now</span>
        </button>
        <h2 className="text-3xl font-bold mb-2 text-center">Let's work together 🚀</h2>
        <p className="text-center max-w-lg mb-6">
          If you thrive on enhancing WordPress websites, whether it's refining existing features or building from scratch, to deliver a 'WOW' factor that impresses clients and users alike.
        </p>
        <button className="bg-green-500 text-white text-lg md:text-xl px-3 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out font-bold">
          HIRE ME ON UPWORK
        </button>
        <div className="flex items-center mb-6 mt-5">
          <img src="logo.png" alt="Logo" className="w-12 h-12 mx-4 rounded-full" />
          <span>Usually replies <br />within 12 hours</span>
        </div>
        <p>All rights reserved, made with <span className="text-red-500">❤️</span></p>
      </div>


    </>
  );
};

export default Home;
