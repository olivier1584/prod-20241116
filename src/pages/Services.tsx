import { FileText, FileSpreadsheet, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceHero from '../components/ServiceHero';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Dématérialisation de factures',
      description: 'Accompagnement complet dans la mise en conformité avec la réforme de la facture électronique 2024-2026.',
      features: [
        'Audit de votre système actuel',
        'Choix de la plateforme adaptée',
        'Accompagnement dans la mise en conformité',
        'Formation de vos équipes',
        'Support technique'
      ],
      link: '/services/dematerialisation',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: FileSpreadsheet,
      title: 'Tableaux de bord Excel',
      description: 'Création de solutions Excel avancées pour optimiser votre gestion et analyse de données.',
      features: [
        'Automatisation avec Power Query',
        'Modélisation avec Power Pivot',
        'Visualisations 3D Map',
        'Tableaux de bord dynamiques',
        'Formation sur mesure'
      ],
      link: '/services/excel',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Brain,
      title: 'Conseil en Intelligence Artificielle',
      description: 'Intégration de solutions d\'IA pour optimiser vos processus métier.',
      features: [
        'Audit de vos besoins en IA',
        'Sélection des technologies adaptées',
        'Proof of Concept (POC)',
        'Intégration et déploiement',
        'Suivi et optimisation'
      ],
      link: '/services/ia',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-6">Nos Services</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Des solutions sur mesure pour digitaliser et optimiser votre entreprise
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      </span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}