import React from 'react';
import { Headphones, Globe, Clock, MessageCircle, PhoneCall, Video, CheckCircle, Users } from 'lucide-react';

const SuporteInternacionalCard = () => {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
      {/* Fundo estilizado tipo mapa-múndi */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <path d="M10,25 Q15,23 20,25 T30,25 T40,20 T50,25 T60,23 T70,25 T80,20 T90,25" 
                fill="none" 
                stroke="#4338ca" 
                strokeWidth="0.5" />
          <circle cx="20" cy="20" r="0.8" fill="#4338ca" />
          <circle cx="30" cy="15" r="0.8" fill="#4338ca" />
          <circle cx="50" cy="22" r="0.8" fill="#4338ca" />
          <circle cx="65" cy="18" r="0.8" fill="#4338ca" />
          <circle cx="80" cy="23" r="0.8" fill="#4338ca" />
        </svg>
      </div>
      
      {/* Header com gradiente e ícone de headphones */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-700 p-6 md:p-8 relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-400 opacity-20 blur-xl"></div>
        
        {/* Mini relógios do mundo no fundo */}
        <div className="absolute bottom-3 right-3 flex space-x-1.5 opacity-30">
          {[3, 8, 12, 18, 22].map((hour, idx) => (
            <div key={idx} className="h-5 w-5 rounded-full border border-white flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white relative">
                <div className="absolute h-1.5 w-0.5 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-bottom" 
                     style={{ transform: `translateX(-50%) rotate(${hour * 30}deg)` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Ícone de headphones com globo integrado */}
          <div className="relative">
            {/* Globo giratório na base */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-full opacity-60 transform scale-125"></div>
            
            {/* Ícone principal */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-4 rounded-full relative z-10 shadow-lg inline-flex">
              <div className="relative">
                <Headphones className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-white opacity-50" strokeWidth={1} />
                </div>
              </div>
            </div>
            
            {/* Indicador 24H mais proeminente */}
            <div className="absolute -right-2 -bottom-2 h-7 w-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center z-20 shadow-md border-2 border-white">
              <span className="text-white text-xs font-bold">24H</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">SUPORTE COMPLETO</h2>
              <div className="ml-2 px-1.5 py-0.5 bg-indigo-400 bg-opacity-30 rounded text-xs text-white border border-indigo-300 border-opacity-30">24/7</div>
            </div>
            <p className="text-indigo-100 text-sm md:text-base mt-1">
              Acompanhamento personalizado durante toda jornada
            </p>
          </div>
        </div>
      </div>
      
      {/* Badge tridimensional */}
      <div className="absolute top-20 -right-5 transform rotate-45">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-xs font-bold px-8 py-1 shadow-lg border-t border-b border-indigo-300 border-opacity-30">
          INTERNACIONAL
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 md:p-8 relative z-10">
        {/* Seção de disponibilidade global com relógios reais */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100 mb-6 relative overflow-hidden">
          <div className="flex items-center mb-3">
            <Clock className="h-5 w-5 text-indigo-700 mr-2" />
            <h3 className="text-base font-bold text-indigo-800">SUPORTE GLOBAL 24/7</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mb-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 mb-1 relative">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-200"></div>
                <span className="text-indigo-800 text-xs font-mono">03:00</span>
                <span className="absolute -bottom-4 text-xs text-indigo-600">NYC</span>
              </div>
              <div className="inline-flex items-center mt-4">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-indigo-700">Online</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 mb-1 relative">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-200"></div>
                <span className="text-indigo-800 text-xs font-mono">08:00</span>
                <span className="absolute -bottom-4 text-xs text-indigo-600">LON</span>
              </div>
              <div className="inline-flex items-center mt-4">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-indigo-700">Online</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 mb-1 relative">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-200"></div>
                <span className="text-indigo-800 text-xs font-mono">16:00</span>
                <span className="absolute -bottom-4 text-xs text-indigo-600">TYO</span>
              </div>
              <div className="inline-flex items-center mt-4">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-indigo-700">Online</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 mb-1 relative">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-200"></div>
                <span className="text-indigo-800 text-xs font-mono">18:00</span>
                <span className="absolute -bottom-4 text-xs text-indigo-600">SYD</span>
              </div>
              <div className="inline-flex items-center mt-4">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-indigo-700">Online</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Canais de suporte modernos */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <MessageCircle className="h-5 w-5 text-indigo-600" />
            </div>
            <h4 className="text-xs font-medium text-slate-700 text-center">Chat 24/7</h4>
            <p className="text-xs text-slate-500 text-center mt-1">3 min resposta</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <PhoneCall className="h-5 w-5 text-indigo-600" />
            </div>
            <h4 className="text-xs font-medium text-slate-700 text-center">Chamada</h4>
            <p className="text-xs text-slate-500 text-center mt-1">12+ idiomas</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <Video className="h-5 w-5 text-indigo-600" />
            </div>
            <h4 className="text-xs font-medium text-slate-700 text-center">Vídeo</h4>
            <p className="text-xs text-slate-500 text-center mt-1">Tela compartilhada</p>
          </div>
        </div>
        
        {/* Como funciona o suporte personalizado */}
        <div className="mb-6">
          <h3 className="text-sm text-indigo-800 font-semibold mb-3">COMO FUNCIONA O SUPORTE PERSONALIZADO</h3>
          
          <div className="space-y-0">
            {/* Linha de tempo vertical */}
            <div className="ml-2 border-l-2 border-indigo-200 pl-4 pb-1 relative">
              <div className="absolute w-4 h-4 rounded-full bg-indigo-600 top-0 -left-2 border-2 border-white"></div>
              <h4 className="text-sm font-medium text-slate-700">Diagnóstico inicial</h4>
              <p className="text-xs text-slate-500">Entendimento profundo das suas necessidades específicas</p>
            </div>
            <div className="ml-2 border-l-2 border-indigo-200 pl-4 pb-1 relative">
              <div className="absolute w-4 h-4 rounded-full bg-indigo-500 top-0 -left-2 border-2 border-white"></div>
              <h4 className="text-sm font-medium text-slate-700">Especialista dedicado</h4>
              <p className="text-xs text-slate-500">Profissional fluente no seu idioma com expertise técnica</p>
            </div>
            <div className="ml-2 border-l-2 border-indigo-200 pl-4 pb-1 relative">
              <div className="absolute w-4 h-4 rounded-full bg-indigo-400 top-0 -left-2 border-2 border-white"></div>
              <h4 className="text-sm font-medium text-slate-700">Acompanhamento contínuo</h4>
              <p className="text-xs text-slate-500">Check-ins regulares e ajustes conforme necessário</p>
            </div>
            <div className="ml-2 pl-4 relative">
              <div className="absolute w-4 h-4 rounded-full bg-indigo-300 top-0 -left-2 border-2 border-white"></div>
              <h4 className="text-sm font-medium text-slate-700">Evolução estratégica</h4>
              <p className="text-xs text-slate-500">Adaptação constante às suas metas em evolução</p>
            </div>
          </div>
        </div>
        
        {/* Idiomas disponíveis */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-5">
          <h3 className="text-xs text-slate-500 uppercase font-medium mb-2">Idiomas principais</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { code: 'PT', name: 'Português' },
              { code: 'EN', name: 'English' },
              { code: 'ES', name: 'Español' },
              { code: 'FR', name: 'Français' },
              { code: 'DE', name: 'Deutsch' },
              { code: '中文', name: 'Chinês' }
            ].map((lang, idx) => (
              <div key={idx} className="inline-flex items-center px-2 py-1 bg-white rounded border border-slate-200">
                <span className="text-xs font-medium text-indigo-700 mr-1.5">{lang.code}</span>
                <span className="text-xs text-slate-600">{lang.name}</span>
              </div>
            ))}
            <div className="inline-flex items-center px-2 py-1 bg-white rounded border border-slate-200">
              <span className="text-xs text-slate-600">+6 mais</span>
            </div>
          </div>
        </div>
        
        {/* Indicador de pessoa online */}
        <div className="bg-indigo-50 p-2 rounded-lg border border-indigo-100 flex items-center">
          <div className="relative mr-3">
            <div className="h-10 w-10 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="h-6 w-6 text-indigo-700" />
              </div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h4 className="text-sm font-medium text-slate-700">98 especialistas online</h4>
              <div className="ml-auto inline-flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-1"></div>
                <span className="text-xs text-green-600 font-medium">AGORA</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">Tempo médio de resposta: 3 minutos</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-slate-100 to-indigo-50 border-t border-gray-200 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
            <Globe className="h-3 w-3 md:h-4 md:w-4 text-indigo-700 mr-2 opacity-70" />
            <p className="text-xs md:text-sm text-slate-600">Desenvolvido por <span className="font-semibold text-indigo-700">Willian Aksenen</span></p>
          </div>
          <div className="inline-flex items-center text-xs text-indigo-600 bg-white px-2 py-1 rounded-full shadow-sm border border-indigo-100">
            <span className="mr-1 font-medium">ID: </span>
            <span>SUPP-INT-24H</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuporteInternacionalCard; 