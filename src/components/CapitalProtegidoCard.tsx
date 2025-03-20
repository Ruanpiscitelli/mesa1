import React from 'react';
import { Shield, TrendingUp, DollarSign, CheckCircle, Lock } from 'lucide-react';

const CapitalProtegidoCard = () => {
  return (
    <div className="w-full overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative md:col-span-1 capital-protegido-card">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-50 opacity-60 hidden md:block"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-blue-50 opacity-50 hidden md:block"></div>
      
      {/* Header com gradiente e escudo integrado */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 p-4 md:p-6 relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Escudo premium com efeitos */}
          <div className="relative">
            {/* Camada base do escudo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full opacity-30 blur-md transform scale-110"></div>
            
            {/* Escudo principal */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-full relative z-10 shadow-lg inline-flex shield-icon">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" strokeWidth={1.5} fill="rgba(255, 255, 255, 0.2)" />
            </div>
            
            {/* Reflexo/brilho */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
          </div>
          
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">CAPITAL PROTEGIDO</h2>
            <p className="text-blue-100 text-xs md:text-sm mt-1">
              Opere com até <span className="font-bold text-white">US$500K</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-4 md:p-6 relative z-10">
        {/* Badge de certificação */}
        <div className="absolute -top-3 right-4 md:right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md flex items-center verified-badge">
          <div className="w-1 h-1 rounded-full bg-white mr-1"></div>
          VERIFICADO
        </div>
        
        {/* Métricas */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 md:p-3 rounded-lg shadow-sm border border-blue-100 metrics-item">
            <div className="flex items-center text-blue-800 mb-1">
              <TrendingUp className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-xs font-semibold">ROAS MÉDIO</span>
            </div>
            <p className="text-blue-900 text-base md:text-lg font-bold">3.2x</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 md:p-3 rounded-lg shadow-sm border border-blue-100 metrics-item">
            <div className="flex items-center text-blue-800 mb-1">
              <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-xs font-semibold">ROI</span>
            </div>
            <p className="text-blue-900 text-base md:text-lg font-bold">+28%</p>
          </div>
        </div>
        
        {/* Benefícios - Ajustado para estilo de corretora */}
        <div className="space-y-2 mb-4">
          <h3 className="text-xs text-slate-500 uppercase font-medium tracking-wider mb-2">Benefícios</h3>
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-1.5 flex-shrink-0" />
            </div>
            <span className="text-xs md:text-sm text-slate-700">Proteção contra movimentos adversos</span>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-1.5 flex-shrink-0" />
            </div>
            <span className="text-xs md:text-sm text-slate-700">Acesso a mercados globais</span>
          </div>
        </div>
        
        {/* Barra de segurança */}
        <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center text-slate-700">
            <Lock className="h-3 w-3 md:h-4 md:w-4 text-blue-700 mr-1.5" />
            <span className="text-xs">Capital garantido</span>
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs font-medium px-1.5 py-0.5 rounded">
            100%
          </div>
        </div>
      </div>
      
      {/* Footer com elemento de segurança */}
      <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-slate-100 to-blue-50 border-t border-gray-200 relative z-10">
        <div className="flex items-center justify-between text-center">
          <div className="flex items-center">
            <Shield className="h-3 w-3 text-blue-700 mr-1.5 opacity-70" />
            <p className="text-xs text-slate-600">SecureInvest™</p>
          </div>
          <p className="text-[10px] text-slate-500">ID: BR82759404-S</p>
        </div>
      </div>
    </div>
  );
};

export default CapitalProtegidoCard; 