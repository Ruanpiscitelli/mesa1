import React from 'react';
import { Headphones, MessageCircle, PhoneCall, Video, Globe } from 'lucide-react';

const SuporteInternacionalCard = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 relative flex flex-col">
      {/* Header com gradiente e ícone de headphones */}
      <div className="card-header bg-gradient-to-r from-indigo-700 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-400 opacity-20 blur-xl"></div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ícone de headphones premium */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-full opacity-30 blur-md transform scale-110"></div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-2 sm:p-2.5 rounded-full relative z-10 shadow-lg inline-flex">
              <Headphones className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
          </div>
          
          <div>
            <h2 className="card-title text-white">SUPORTE GLOBAL</h2>
            <p className="card-subtitle text-indigo-100 mt-0.5 sm:mt-1">
              Atendimento 24/7
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="card-body bg-white flex-1">
        {/* Opções de comunicação simplificadas */}
        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
              <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-indigo-100 flex items-center justify-center mb-1">
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
              </div>
              <h4 className="font-medium text-slate-700 text-center text-xs sm:text-sm">Chat 24/7</h4>
            </div>
            <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
              <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-indigo-100 flex items-center justify-center mb-1">
                <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
              </div>
              <h4 className="font-medium text-slate-700 text-center text-xs sm:text-sm">Chamada</h4>
            </div>
            <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
              <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-indigo-100 flex items-center justify-center mb-1">
                <Video className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600" />
              </div>
              <h4 className="font-medium text-slate-700 text-center text-xs sm:text-sm">Vídeo</h4>
            </div>
          </div>
          
          {/* Benefícios do suporte simplificados */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xs sm:text-sm text-slate-500 uppercase font-medium tracking-wider mb-1 sm:mb-2">Idiomas disponíveis</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Inglês', 'Espanhol', 'Português', 'Francês'].map((lang, index) => (
                <div key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-50 text-indigo-600 rounded text-xs sm:text-sm">
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Benefícios adicionais */}
        <div className="bg-indigo-50 p-2 sm:p-3 rounded-lg border border-indigo-100 mt-3 sm:mt-4">
          <div className="flex items-center mb-0.5 sm:mb-1">
            <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600 mr-1.5 sm:mr-2" />
            <h3 className="font-semibold text-indigo-800 text-xs sm:text-sm">Suporte Internacional</h3>
          </div>
          <p className="card-text text-slate-700">Disponível 24 horas por dia, 7 dias por semana.</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="card-footer bg-gradient-to-r from-slate-100 to-indigo-50 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-600 mr-1.5 sm:mr-2" />
            <p className="card-text text-slate-600">Cobertura Global</p>
          </div>
          <div className="card-text text-slate-500 text-xs sm:text-sm">
            <span className="text-indigo-600 font-medium">ID:</span> SUPP-INT-24H
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuporteInternacionalCard; 