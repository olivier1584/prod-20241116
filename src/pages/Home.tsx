import { ArrowRight, FileSpreadsheet, FileText, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      icon: FileText,
      title: 'Dématérialisation de factures',
      description: 'Accompagnement dans la mise en conformité avec la réforme de la facture électronique',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: FileSpreadsheet,
      title: 'Tableaux de bord Excel',
      description: 'Création de solutions sur mesure avec Power Query, Power Pivot et 3D Map',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Brain,
      title: 'Conseil en IA',
      description: 'Audit et intégration de solutions d\'Intelligence Artificielle adaptées à vos besoins',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Solutions digitales pour votre entreprise
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert en dématérialisation, Excel avancé et Intelligence Artificielle
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
          >
            Commencer votre projet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-gray-600">Des solutions adaptées à tous les secteurs d'activité</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400'
            ].map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}