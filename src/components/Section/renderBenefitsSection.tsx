import {  Users, Globe, BookOpen, Trophy} from 'lucide-react';
  
    const benefits = [
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: 'Experticia',
        description: 'Conocimiento Especializado en mejores prácticas en derecho de la competencia.',
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: 'Networking',
        description: 'Conecta con profesionales, autoridades y líderes empresariales del sector.',
      },
      {
        icon: <Trophy className="w-8 h-8" />,
        title: 'Certificación',
        description: 'Certificado de participación avalado por ProCompetencia.',
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: 'Tendencias',
        description: 'Explora los enfoques más recientes y su impacto en el entorno empresarial y regulatorio.',
      },
    ];
    
  const renderBenefitsSection = () => (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            ¿Por Qué Participar?
          </h2>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Una experiencia transformadora que elevará tu expertise en competencia al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-4 border border-white/20 hover:border-white/40"
            >
              <div className="text-yellow-600 mb-6 group-hover:scale-120 group-hover:text-yellow-700 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{benefit.title}</h4>
              <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  export default renderBenefitsSection;