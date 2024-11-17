import { FileSpreadsheet, BarChart, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceHero from '../../components/ServiceHero';

export default function Excel() {
  const features = [
    {
      icon: Database,
      title: 'Power Query',
      description: 'Automatisez la collecte et le traitement de vos données.',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=400',
      benefits: [
        'Import de données multi-sources',
        'Nettoyage automatique',
        'Actualisation en temps réel'
      ]
    },
    {
      icon: BarChart,
      title: 'Power Pivot',
      description: 'Créez des modèles de données complexes et des analyses avancées.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
      benefits: [
        'Modélisation relationnelle',
        'Calculs DAX avancés',
        'Analyses multidimensionnelles'
      ]
    },
    {
      icon: Zap,
      title: '3D Maps',
      description: 'Visualisez vos données géographiques de manière interactive.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=400',
      benefits: [
        'Cartographie interactive',
        'Analyses géospatiales',
        'Animations temporelles'
      ]
    }
  ];

  return (
    <div>
      <ServiceHero
        title="Tableaux de bord Excel"
        description="Solutions sur mesure pour l'analyse et la visualisation de vos données"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            Transformez vos données en insights actionnables grâce à nos solutions Excel avancées.
            Nous créons des tableaux de bord intelligents qui automatisent vos processus et facilitent la prise de décision.
          </p>
        </div>

        {/* Features with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <feature.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Example Projects */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exemples de réalisations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Dashboard Commercial',
                description: 'Suivi des ventes en temps réel avec KPIs personnalisés et prévisions automatisées.',
                image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Reporting Financier',
                description: 'Consolidation automatique des données financières multi-entités avec analyses comparatives.',
                image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Analyse Géographique',
                description: 'Visualisation des données de vente par région avec animations temporelles.',
                image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Tableau de Bord RH',
                description: 'Suivi des indicateurs RH clés et analyses prédictives des tendances.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}