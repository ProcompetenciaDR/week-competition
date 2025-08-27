  const speakers = [
    {
      name: 'Nombre Apellido',
      title: 'Lorem ipsum dolor sit amet RD',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit cumque beatae tempore dicta nihil rerum, id inventore nesciunt',
      expertise: ['Derecho de Competencia', 'Regulación Digital', 'Política Económica'],
      country: '🇩🇴 República Dominicana',
    },
    {
      name: 'Nombre Apellido',
      title: 'Lorem ipsum dolor sit amet',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit cumque beatae tempore dicta nihil rerum, id inventore nesciunt',
      expertise: ['Economía Industrial', 'Análisis de Mercados', 'Política Antimonopolio'],
      country: '🇺🇸 Estados Unidos',
    },
    {
      name: 'Nombre Apellido',
      title: 'Lorem ipsum dolor sit amet',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit cumque beatae tempore dicta nihil rerum, id inventore nesciunt',
      expertise: ['Investigación de Carteles', 'Abuso de Posición Dominante', 'Derecho Sancionador'],
      country: '🇲🇽 México',
    },

  ];

const renderSpeakersSection = () => (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Conferencistas de Élite
          </h2>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Los mejores expertos mundiales en competencia compartirán su conocimiento y experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 hover:border-white/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-white">
                  {speaker.country}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-2">{speaker.name}</h3>
                <p className="text-orange-400 font-bold mb-4 text-lg">{speaker.title}</p>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">{speaker.bio}</p>
                
                <div className="space-y-2">
                  <div className="text-white font-semibold text-sm mb-2">Especialidades:</div>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-white text-xs px-3 py-1 rounded-full border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default renderSpeakersSection;