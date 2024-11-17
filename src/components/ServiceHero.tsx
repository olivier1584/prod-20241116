interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
}