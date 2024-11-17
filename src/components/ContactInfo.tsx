import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations de contact</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Adresse</p>
            <p className="mt-1 text-sm text-gray-600">
              10, rue de la fosse Mathieu<br />
              10300 Montgueux, France
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Téléphone</p>
            <a 
              href="tel:+33618129101" 
              className="mt-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              +33 6 18 12 91 01
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Email</p>
            <a 
              href="mailto:contact@ogconsulting.fr" 
              className="mt-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              contact@ogconsulting.fr
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Horaires</p>
            <p className="mt-1 text-sm text-gray-600">
              Lundi - Vendredi : 9h00 - 18h00<br />
              Weekend : Fermé
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}