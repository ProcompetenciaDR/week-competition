  import {  ArrowRight, Download, ExternalLink, Star, Globe, Zap} from 'lucide-react';
  import logo from '../../assets/img/logo.png';

  const renderHeroSection = () => (
    <div className="min-h-screen flex items-center justify-center text-white relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto pt-5">      
           <img src={logo} alt="" />
          <p className="text-2xl md:text-3xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
            El evento más importante de <span className="text-[#4eaf4f] font-bold">libre competencia</span> en 
            República Dominicana y el Caribe. Cinco días de conocimiento e innovación.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center mb-16">
            <button className="group bg-gradient-to-r from-cyan-600 via-sky-700 to-cyan-950 hover:from-cyan-950 hover:via-sky-700 hover:to-cyan-600 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 flex items-center gap-3 text-white shadow-2xl">
              <Zap className="w-12 h-6" />
              REGISTRARSE
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  export default renderHeroSection;