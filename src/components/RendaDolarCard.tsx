import React from 'react';
import { DollarSign, TrendingUp, Shield, LineChart, Globe, Lock } from 'lucide-react';

const RendaDolarCard = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 relative renda-dolar-card flex flex-col">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-green-50 opacity-60 hidden lg:block"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-green-50 opacity-50 hidden lg:block"></div>
      
      {/* Header com gradiente verde e ícone de dólar integrado */}
      <div className="card-header bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-400 opacity-20 blur-xl"></div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ícone de dólar premium com efeitos de segurança */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-500 rounded-full opacity-30 blur-md transform scale-125"></div>
            <div className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-110"></div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 sm:p-2.5 rounded-full relative z-10 shadow-lg inline-flex border-2 border-white border-opacity-20 dollar-icon">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
            <div className="absolute -right-1 -bottom-1 h-4 sm:h-5 w-4 sm:w-5 bg-white rounded-full flex items-center justify-center z-20">
              <Lock className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-emerald-600" />
            </div>
          </div>
          
          <div>
            <h2 className="card-title text-white">RENDA EM DÓLAR</h2>
            <p className="card-subtitle text-green-100 mt-0.5 sm:mt-1">
              Proteção contra inflação
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="card-body bg-white flex-1">
        {/* Badge de segurança */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md flex items-center protection-badge">
          <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-white" />
          PROTEÇÃO
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Métricas */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-slate-50 to-green-50 p-2 sm:p-3 rounded-lg shadow-sm border border-green-100 metrics-item">
              <div className="flex items-center text-emerald-800 mb-0.5 sm:mb-1">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-emerald-600" />
                <span className="font-semibold text-xs sm:text-sm">RETORNO</span>
              </div>
              <p className="text-emerald-900 text-sm sm:text-base font-bold">6.8%</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-green-50 p-2 sm:p-3 rounded-lg shadow-sm border border-green-100 metrics-item">
              <div className="flex items-center text-emerald-800 mb-0.5 sm:mb-1">
                <LineChart className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-emerald-600" />
                <span className="font-semibold text-xs sm:text-sm">VOLATILIDADE</span>
              </div>
              <p className="text-emerald-900 text-sm sm:text-base font-bold">Baixa</p>
            </div>
          </div>
          
          {/* Benefícios */}
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-xs sm:text-sm text-slate-500 uppercase font-medium tracking-wider mb-1">Benefícios exclusivos</h3>
            <div className="flex items-start">
              <div className="mt-0.5">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Proteção contra desvalorização</span>
            </div>
            <div className="flex items-start">
              <div className="mt-0.5">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Renda previsível indexada</span>
            </div>
          </div>
        </div>
        
        {/* Área de segurança */}
        <div className="bg-green-50 p-2 sm:p-3 rounded-lg border border-green-100 mt-3 sm:mt-4">
          <div className="flex items-center mb-0.5 sm:mb-1">
            <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600 mr-1.5 sm:mr-2" />
            <h3 className="font-semibold text-emerald-800 text-xs sm:text-sm">Segurança Garantida</h3>
          </div>
          <p className="card-text text-slate-700">Investimentos protegidos contra desvalorização cambial.</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="card-footer bg-gradient-to-r from-slate-100 to-green-50 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-700 mr-1.5 sm:mr-2 opacity-70" />
            <p className="card-text text-slate-600">SecureDollar™</p>
          </div>
          <div className="card-text text-slate-500 text-xs sm:text-sm">
            <span className="text-emerald-700 font-medium">ISIN:</span> US037833AK68
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendaDolarCard; 