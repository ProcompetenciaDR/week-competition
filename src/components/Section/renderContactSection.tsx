import { MapPin, Users, ExternalLink} from 'lucide-react';
  
  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-white mb-8">Información y Contacto</h3>
            <p className="text-xl text-blue-200">¿Preguntas? Estamos aquí para ayudarte</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-black text-white mb-4 text-2xl">Ubicaciones</h4>
              <p className="text-blue-200 leading-relaxed">
                <strong>Sede Principal:</strong><br />
                Hotel Sheraton Santo Domingo<br />
                Av. George Washington 365
              </p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-lime-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-black text-white mb-4 text-2xl">Registro</h4>
              <p className="text-blue-200 leading-relaxed">
                <strong>Email:</strong><br />
                eventos@procompetencia.gob.do<br />
                <strong>Teléfono:</strong><br />
                (809) 567-4567 Ext. 2245
              </p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ExternalLink className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-black text-white mb-4 text-2xl">Síguenos</h4>
              <p className="text-blue-200 leading-relaxed">
                <strong>Web:</strong><br />
                www.procompetencia.gob.do<br />
                <strong>Redes Sociales:</strong><br />
                @ProCompetenciaRR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  export default renderContactSection;  