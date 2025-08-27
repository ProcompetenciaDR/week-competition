import {  MapPin, Users, Clock, Target} from 'lucide-react';

 const events = [
    {
      date: '00 de Mes',
      time: '00:00 AM - 00:00 PM',
      title: 'Titulo de la conferencia',
      speaker: 'Nombre del exponente',
      location: 'ubicación del evento',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit cumque beatae tempore dicta nihil rerum, id inventore nesciunt, optio quod nobis. Minus, dicta nulla.',
      type: 'Conferencia Magistral',
      capacity: 'xx personas',
      level: 'Básico',
    },
    {
      date: '00 de Mes',
      time: '00:00 PM - 00:00 PM',
      title: 'Titulo de la conferencia',
      speaker: 'Nombre del exponente',
      location: 'ubicación del evento',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit cumque beatae tempore dicta nihil rerum, id inventore nesciunt, optio quod nobis. Minus, dicta nulla.',
      type: 'Taller Práctico',
      capacity: 'xx personas',
      level: ' Intermedio',
    },

  ];

  const renderEventsSection = () => (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Programa de Eventos
        </h2>
        <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
        {events.map((event, index) => (
            <div
            key={index}
            className="group bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-white/40 transform hover:-translate-y-2"
            >
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-cyan-600 via-sky-700 to-cyan-950 p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                    <div className="text-center mb-6">
                    <div className="text-4xl font-black mb-3">{event.date}</div>
                    <div className="flex items-center justify-center gap-2 text-blue-100 text-lg">
                        <Clock size={20} />
                        {event.time}
                    </div>
                    </div>
                    
                    <div className="space-y-4">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-bold">
                        {event.type}
                    </div>
                    <div className="text-sm">
                        <div className="flex items-center gap-2 mb-2">
                        <Users size={16} />
                        <span>{event.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <Target size={16} />
                        <span>{event.level}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                <div className="lg:w-2/3 p-10">
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-600 transition-colors duration-300">
                    {event.title}
                </h3>
                
                <div className="flex flex-wrap gap-6 mb-6 text-blue-200">
                    <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span className="font-semibold">{event.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                    </div>
                </div>
                
                <p className="text-blue-100 leading-relaxed mb-8 text-lg">{event.description}</p>
                
                <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-sky-700  hover:to-cyan-950 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
                      Registrate
                    </button>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );

export default renderEventsSection;