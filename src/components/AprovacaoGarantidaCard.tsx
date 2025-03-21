import React from 'react';
import { CheckCircle, Award, Shield, BadgeCheck } from 'lucide-react';

const AprovacaoGarantidaCard = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 relative aprovacao-garantida-card flex flex-col">
      {/* Header com gradiente verde e ícone de medalha */}
      <div className="card-header bg-gradient-to-r from-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-400 opacity-20 blur-xl"></div>
        
        {/* Efeito de luz no topo */}
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white opacity-10"></div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ícone de medalha premium com efeitos */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 blur-md transform scale-125"></div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-2 sm:p-2.5 rounded-full relative z-10 shadow-lg inline-flex award-icon">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
          </div>
          
          <div>
            <h2 className="card-title text-white">APROVAÇÃO GARANTIDA</h2>
            <p className="card-subtitle text-green-100 mt-0.5 sm:mt-1">
              100% por contrato
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="card-body bg-white flex-1">
        {/* Badge de mesa */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md flex items-center security-badge">
          <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-white" />
          MESA
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Valor garantido */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">Acesso a:</div>
            <div className="text-sm sm:text-base font-bold text-emerald-700">US$ 500.000</div>
          </div>
          
          {/* Benefícios específicos */}
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-xs sm:text-sm text-slate-500 uppercase font-medium tracking-wider mb-1">Benefícios exclusivos</h3>
            <div className="flex items-start">
              <div className="mt-0.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Mesa proprietária profissional</span>
            </div>
            <div className="flex items-start">
              <div className="mt-0.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Sem uso de recursos próprios</span>
            </div>
          </div>
        </div>
        
        {/* Área de garantia */}
        <div className="p-2 sm:p-3 rounded-lg border border-emerald-200 mt-3 sm:mt-4 relative">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold text-emerald-800 text-sm">Garantia de Aprovação</h3>
          </div>
          <div className="mt-1.5 flex justify-between items-center">
            <div className="text-slate-600 text-xs sm:text-sm">Probabilidade de sucesso:</div>
            <div className="text-emerald-700 font-bold text-xs sm:text-sm">100%</div>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full w-full"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="card-footer bg-gradient-to-r from-slate-100 to-green-50 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-700 mr-1.5 sm:mr-2 opacity-70" />
            <p className="card-text text-slate-600">Certificado Oficial</p>
          </div>
          <div className="card-text text-slate-500 text-xs sm:text-sm">
            ID: APROV-100%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprovacaoGarantidaCard; 