import React from 'react';
import { Shield, TrendingUp, DollarSign, CheckCircle, Lock } from 'lucide-react';

const CapitalProtegidoCard = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 relative capital-protegido-card flex flex-col">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-50 opacity-60 hidden lg:block"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-blue-50 opacity-50 hidden lg:block"></div>
      
      {/* Header com gradiente e escudo integrado */}
      <div className="card-header bg-gradient-to-r from-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Escudo premium com efeitos */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full opacity-30 blur-md transform scale-110"></div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 sm:p-2.5 rounded-full relative z-10 shadow-lg inline-flex shield-icon">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} fill="rgba(255, 255, 255, 0.2)" />
            </div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
          </div>
          
          <div>
            <h2 className="card-title text-white">CAPITAL PROTEGIDO</h2>
            <p className="card-subtitle text-blue-100 mt-0.5 sm:mt-1">
              Opere com até <span className="font-bold text-white">US$500K</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="card-body bg-white flex-1">
        {/* Badge de certificação */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md flex items-center verified-badge">
          <div className="w-1 h-1 rounded-full bg-white mr-1"></div>
          VERIFICADO
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Métricas */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 sm:p-3 rounded-lg shadow-sm border border-blue-100 metrics-item">
              <div className="flex items-center text-blue-800 mb-0.5 sm:mb-1">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-600" />
                <span className="font-semibold text-xs sm:text-sm">ROAS MÉDIO</span>
              </div>
              <p className="text-blue-900 text-sm sm:text-base font-bold">3.2x</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 sm:p-3 rounded-lg shadow-sm border border-blue-100 metrics-item">
              <div className="flex items-center text-blue-800 mb-0.5 sm:mb-1">
                <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-600" />
                <span className="font-semibold text-xs sm:text-sm">ROI</span>
              </div>
              <p className="text-blue-900 text-sm sm:text-base font-bold">+28%</p>
            </div>
          </div>
          
          {/* Benefícios */}
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-xs sm:text-sm text-slate-500 uppercase font-medium tracking-wider mb-1">Benefícios</h3>
            <div className="flex items-start">
              <div className="mt-0.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Proteção contra movimentos adversos</span>
            </div>
            <div className="flex items-start">
              <div className="mt-0.5">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Acesso a mercados globais</span>
            </div>
          </div>
        </div>
        
        {/* Barra de segurança */}
        <div className="flex items-center justify-between p-2 sm:p-3 bg-slate-50 rounded-lg border border-slate-200 mt-3 sm:mt-4">
          <div className="flex items-center text-slate-700">
            <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-700 mr-1.5 sm:mr-2" />
            <span className="card-text">Capital garantido</span>
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-1.5 sm:px-2 py-0.5 rounded">
            100%
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="card-footer bg-gradient-to-r from-slate-100 to-blue-50 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-700 mr-1.5 sm:mr-2 opacity-70" />
            <p className="card-text text-slate-600">SecureInvest™</p>
          </div>
          <p className="card-text text-slate-500 text-xs sm:text-sm">ID: BR82759404-S</p>
        </div>
      </div>
    </div>
  );
};

export default CapitalProtegidoCard;