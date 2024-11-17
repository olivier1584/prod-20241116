import { Brain, Lightbulb, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceHero from '../../components/ServiceHero';

export default function IA() {
  const solutions = [
    {
      icon: Lightbulb,
      title: 'Analyse prédictive',
      description: 'Anticipez les tendances et optimisez vos décisions business.'
    },
    {
      icon: Target,
      title: 'Automatisation intelligente',
      description: 'Automatisez vos processus grâce à l\'IA et au Machine Learning.'
    },
    {
      icon: Rocket,
      title: 'Innovation produit',
      description: 'Intégrez l\'IA dans vos produits et services existants.'
    }
  ];

  return (
    <div>
      <ServiceHero
        title="Conseil en Intelligence Artificielle"
        description="Exploitez le potentiel de l'IA pour transformer votre entreprise"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            L'Intelligence Artificielle représente une opportunité majeure pour les entreprises.
            Notre expertise vous aide à identifier et mettre en œuvre les solutions d'IA les plus pertinentes pour votre activité.
          </p>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <solution.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cas d'utilisation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Analyse de données clients',
                description: 'Segmentation client avancée et prédiction des comportements d\'achat.',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Maintenance prédictive',
                description: 'Anticipation des pannes et optimisation de la maintenance.',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies maîtrisées</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Machine Learning',
              'Deep Learning',
              'Natural Language Processing',
              'Computer Vision',
              'Predictive Analytics',
              'Neural Networks',
              'Reinforcement Learning',
              'Time Series Analysis'
            ].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center shadow-md">
                <span className="text-gray-800 font-medium">{tech}</span>
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
            Discuter de votre projet
          </Link>
        </div>
      </div>
    </div>
  );
}