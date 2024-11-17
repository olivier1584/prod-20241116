import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Map Background */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574"
            alt="Contact background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discutons de votre projet et trouvons ensemble la meilleure solution
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <ContactInfo />
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1333"
                  alt="Location"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="ml-2 text-sm text-gray-600">
                  Situé à proximité de Troyes, nous intervenons dans toute la France
                </p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ils nous font confiance</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200',
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=200',
                  'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=200',
                  'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=200'
                ].map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <img
                      src={image}
                      alt={`Client ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}