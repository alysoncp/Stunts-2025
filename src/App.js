import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Menu, X, Truck, Car, User, Ruler, Shirt, Eye, Heart, PersonStanding, Cable, IdCard} from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('stunt-reel');

  // Constants moved to top for better organization
  const SECTIONS = [
    { id: 'stunt-reel', label: 'Stunt Reel' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' },
    { id: 'driving-reel', label: 'Driving Reel' },
    { id: 'photos', label: 'Photos' }
  ];

  const FILM_CREDITS = [
    {
      title: 'Backrooms',
      year: '2025',
      role: '"Mary" Stunt Double',
      coordinator: 'Trevor Addie'
    },
    {
      title: 'Casket Girls',
      year: '2024',
      role: '"La Mere" Stunt Double',
      coordinator: 'Rorelee Tio'
    },
    {
      title: 'Percy Jackson',
      year: '2024',
      role: 'ND Stunts',
      coordinator: 'Eli Zagoudakis / Trevor Addie'
    },
    {
      title: 'Motherland',
      year: '2022',
      role: 'Stunt Driver',
      coordinator: 'Rhys Williams / Sharon Simms'
    }
  ];

  const OTHER_CREDITS = [
    {
      title: 'Vesper - Run & Gun',
      year: '2025',
      role: 'Stunt Driver',
      coordinator: 'Andrew Prest / Rorelee Tio'
    },
    {
      title: 'DoorWarz - Live Stunt Show',
      year: '2022-2025',
      role: 'Stunt Driver',
      coordinator: 'Gaston Morrison'
    }
  ];

  const ULB_CREDITS = [
    { title: 'Flat Out', year: '2024', role: 'Stunt Driver', coordinator: 'Jovan' },
    { title: 'Love Me Or Not', year: '2024', role: 'Stunt Driver', coordinator: 'Cassandra Ebner' },
    { title: 'Safe Distance', year: '2024', role: 'Stunt Driver', coordinator: 'Jessica Firman' },
    { title: 'Dead Forest', year: '2023', role: 'Stunt Zombie', coordinator: 'Jessica Firman' },
    { title: 'Cafe Racer', year: '2022', role: 'Stunt Driver', coordinator: 'Gaston Morrison' },
    { title: 'Bleed the Future', year: '2022', role: 'ND Stunts', coordinator: 'Kelsi Chartrand' }
  ];

  const TRAINING = {
    martialArts: {
      title: 'Martial Arts',
      list: ['Boxing', 'Jeet Kune Do', 'Karate', 'BJJ', 'Kali/Escrima', 'Muay Thai'],
      icon: PersonStanding
    },
    precisionDriving: {
      title: 'Precision Driving Skills',
      list: ['J-turns', '360s', 'Drifting', 'Precision stops', 'Multi-car chase sequences', 'Car hits'],
      icon: Car
    },
    stunts: {
      title: 'Stunts',
      list: ['Aerial Wirework & Entertainment Rigging', 'High Falls', 'Squibs'],
      icon: Cable
    }
  };

  const CERTIFICATIONS = [
    {
      title: 'Class 1 Commercial Driver\'s License',
      list: [
        'Semi-truck / Tractor-trailers', 'Buses', 'Firetrucks', 'Ambulances', 'Cars', 
        'Trucks', 'SUVs', 'Military Vehicles', 'Vintage Vehicles', 'UTVs'
      ],
      icon: Truck
    },
    {
      title: 'PAL / RPAL Firearms License',
      list: [
        'Trained by former CAF members on CQB', 'Exceptional shotgun skills'
      ],
      icon: IdCard
    },
    {
      title: 'Occupational First Aid Level 1',
      icon: Heart
    }
  ];

  const PERSONAL_INFO = {
    basicInfo: [
      { label: 'Age:', value: '35' },
      { label: 'Gender:', value: 'Female' },
      { label: 'Ethnicity:', value: 'Caucasian' },
      { label: 'Nationality:', value: 'Canadian' }
    ],
    bodyMeasurements: [
      { label: 'Height:', value: '5\'11" / 180 cm' },
      { label: 'Weight:', value: '155 lbs / 69 kg' }
    ],
    clothingSizes: [
      { label: 'Dress Size:', value: '8' },
      { label: 'Pants:', value: '32W/34L' },
      { label: 'Shoe:', value: '10.5 US Wmn\'s' },
      { label: 'Hat:', value: '7 3/8' }
    ],
    features: [
      { label: 'Hair Color:', value: 'Brown' },
      { label: 'Hair Length:', value: 'Medium' },
      { label: 'Eye Color:', value: 'Blue' },
      { label: 'Skin Tone:', value: 'Fair' },
      { label: 'Tattoos:', value: 'None' }
    ]
  };

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = SECTIONS.map(section => section.id);
      const currentSection = sectionIds.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Component for rendering credit cards
  const CreditCard = ({ credit }) => (
    <div className="bg-gray-50 border rounded-lg p-5">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-gray-900">{credit.title}</span>
        <span className="text-gray-500 text-sm">{credit.year}</span>
      </div>
      <p className="text-gray-600 text-sm">{credit.role}</p>
      <p className="text-gray-900 font-medium">{credit.coordinator}</p>
    </div>
  );

  // Component for skill items
  const SkillItem = ({ skill }) => {
    const Icon = skill.icon;
    return (
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon size={20} className="text-blue-600" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {skill.title}
          </h4>
          {skill.description && (
            <p className="text-gray-600">{skill.description}</p>
          )}
          {skill.list && (
            <ul className="text-gray-600 space-y-1">
              {skill.list.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  // Component for measurement cards
  const MeasurementCard = ({ title, icon: Icon, items }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-8">
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-blue-100 rounded-full">
          <Icon size={32} className="text-blue-500" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-8">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-semibold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Component for video embed
  const VideoEmbed = ({ src, title = "Featured Video" }) => (
    <div className="relative rounded-xl overflow-hidden shadow-2xl mx-auto" style={{ width: '80%' }}>
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                Alyson Pickett
              </div>
              <a
                href="https://www.instagram.com/alysonpickett"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 ml-4"
              >
                <FaInstagram size={20} />
              </a>
            </div>
             
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-1 py-1 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Featured Video */}
      <section id="stunt-reel" className="pt-20 pb-5 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <VideoEmbed 
            src="https://www.youtube.com/embed/AqSD0Cly-7M?si=3kE3oPP0IgyyzwnT" 
            title="Stunt Reel"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Get In Touch
            </h2>
            <div className="mx-auto text-center" style={{ width: '80%' }}>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Mail size={20} className="text-blue-600 mr-4" />
                    <span className="text-gray-700">alyson.c.pickett@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone size={20} className="text-blue-600 mr-4" />
                    <span className="text-gray-700">+1 (780) 318-1762</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin size={20} className="text-blue-600 mr-4" />
                    <span className="text-gray-700">Vancouver, BC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-10 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
              Resume
            </h2>
            <div className="flex justify-center space-x-4 pt-2 mb-12">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors inline-block"
              >
                View Resume
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Film Credits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-2">🎬</span> Film & TV Credits
                </h3>
                <div className="space-y-4">
                  {FILM_CREDITS.map((credit, index) => (
                    <CreditCard key={index} credit={credit} />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center pt-6">
                  <span className="mr-2">🎞️</span> Other
                </h3>
                <div className="space-y-4">
                  {OTHER_CREDITS.map((credit, index) => (
                    <CreditCard key={index} credit={credit} />
                  ))}
                </div>
              </div>

              {/* ULB Credits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-2">📺</span> ULB
                </h3>
                <div className="space-y-4">
                  {ULB_CREDITS.map((credit, index) => (
                    <CreditCard key={index} credit={credit} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Skills
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skills Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills</h3>
                <div className="space-y-8">
                  <SkillItem skill={TRAINING.precisionDriving} />
                  <SkillItem skill={TRAINING.martialArts} />
                  <SkillItem skill={TRAINING.stunts} />
                </div>
              </div>

              {/* Certifications Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
                <div className="space-y-2">
                  {CERTIFICATIONS.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Icon size={20} className="text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {cert.title}
                            </h4>
                            {cert.list && (
                              <ul className="text-gray-600 space-y-1 mt-3">
                                {cert.list.map((vehicle, vehicleIndex) => (
                                  <li key={vehicleIndex} className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                                    {vehicle}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Measurements Section */}
        <div className="max-w-7xl pt-8 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Measurements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MeasurementCard 
                title="Basic Info" 
                icon={User} 
                items={PERSONAL_INFO.basicInfo} 
              />
              <MeasurementCard 
                title="Body Measurements" 
                icon={Ruler} 
                items={PERSONAL_INFO.bodyMeasurements} 
              />
              <MeasurementCard 
                title="Clothing Sizes" 
                icon={Shirt} 
                items={PERSONAL_INFO.clothingSizes} 
              />
              <MeasurementCard 
                title="Features" 
                icon={Eye} 
                items={PERSONAL_INFO.features} 
              />
            </div>  
          </div>
        </div>
      </section>


      {/* Driving Reel Section */}
      <section id="driving-reel" className="pt-8 pb-8 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Driving Reel
          </h2>
          <VideoEmbed 
            src="https://www.youtube.com/embed/a2Fm8b5MQ_4?si=Rb3qEbpl0yEKNqYv"
            title="Driving Reel"
          />
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Photos
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example images — replace with your actual files/links */}
            <img 
              src="/photos/alt_headshot.jpg" 
              alt="Stunt photo 1" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/soldier.jpg" 
              alt="Stunt photo 4" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/semitruck.jpg" 
              alt="Stunt photo 3" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/cop.jpg" 
              alt="Stunt photo 4" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/lovemeornot.jpg" 
              alt="Stunt photo 4" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/porche.jpg" 
              alt="Stunt photo 4" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/g35_wallride.jpg" 
              alt="Stunt photo 2" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/photos/motherland.jpg" 
              alt="Stunt photo 4" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Alyson Pickett. Built with React and ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;