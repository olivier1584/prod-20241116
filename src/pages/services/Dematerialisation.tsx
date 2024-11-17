import { FileText, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceHero from '../../components/ServiceHero';

export default function Dematerialisation() {
  const benefits = [
    {
      icon: FileText,
      title: 'Conformité réglementaire',
      description: 'Assurez votre conformité avec la réforme de la facture électronique 2024-2026.'
    },
    {
      icon: CheckCircle,
      title: 'Gain de temps',
      description: 'Automatisez vos processus de facturation et réduisez les tâches manuelles.'
    },
    {
      icon: TrendingUp,
      title: 'Réduction des coûts',
      description: 'Diminuez vos coûts de traitement et de stockage des factures.'
    }
  ];

  return (
    <div>
      <ServiceHero
        title="Dématérialisation de factures"
        description="Accompagnement complet dans votre transition vers la facture électronique"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            La réforme de la facture électronique représente un changement majeur pour toutes les entreprises françaises. 
            Notre expertise vous accompagne à chaque étape de cette transition, de l'audit initial jusqu'à la mise en production.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <benefit.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre approche</h2>
          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Audit et analyse',
                description: 'Évaluation de vos processus actuels et identification des besoins spécifiques.'
              },
              {
                step: '02',
                title: 'Choix de la solution',
                description: 'Sélection de la plateforme de dématérialisation adaptée à votre activité.'
              },
              {
                step: '03',
                title: 'Implémentation',
                description: 'Mise en place de la solution et intégration avec vos systèmes existants.'
              },
              {
                step: '04',
                title: 'Formation',
                description: 'Formation de vos équipes et accompagnement dans la prise en main.'
              }
            ].map((step) => (
              <div key={step.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
            Démarrer votre projet
          </Link>
        </div>
      </div>
    </div>
  );
}