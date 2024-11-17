import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Icon className="h-12 w-12 text-blue-600 mb-6" />
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        En savoir plus
      </Link>
    </div>
  );
}