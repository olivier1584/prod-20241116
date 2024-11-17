import { Award, BookOpen, Users, Briefcase } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

export default function About() {
  const experiences = [
    {
      year: '2020-2024',
      title: 'Expert en Transformation Digitale',
      description: 'Accompagnement de plus de 50 entreprises dans leur transition numérique',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2015-2020',
      title: 'Consultant Senior Excel & BI',
      description: 'Développement de solutions de Business Intelligence pour grands comptes',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2010-2015',
      title: 'Analyste Financier',
      description: 'Expertise en modélisation financière et automatisation des processus',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-6">À propos</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Plus de 15 ans d'expertise au service de votre transformation digitale
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Parcours avec images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Parcours</h2>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="text-blue-600 font-semibold mb-2">{exp.year}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{exp.title}</h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications avec fond d'image */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80"
              alt="Certifications background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative bg-gradient-to-r from-blue-600/90 to-blue-800/90 p-12">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Microsoft Certified: Power BI Data Analyst',
                  year: '2023'
                },
                {
                  icon: Award,
                  title: 'Certified Scrum Master',
                  year: '2022'
                },
                {
                  icon: Award,
                  title: 'AWS Certified Solutions Architect',
                  year: '2021'
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                  <cert.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}