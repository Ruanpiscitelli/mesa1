import React from 'react';
import { DollarSign, TrendingUp, Shield, LineChart, Globe, Lock } from 'lucide-react';

const RendaDolarCard = () => {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative renda-dolar-card">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-green-50 opacity-60 hidden md:block"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-green-50 opacity-50 hidden md:block"></div>
      
      {/* Header com gradiente verde e ícone de dólar integrado */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 md:p-8 relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-400 opacity-20 blur-xl"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Ícone de dólar premium com efeitos de segurança */}
          <div className="relative">
            {/* Camada externa de segurança */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-500 rounded-full opacity-30 blur-md transform scale-125"></div>
            
            {/* Escudo de proteção sob o dólar */}
            <div className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-110"></div>
            
            {/* Ícone principal reforçado */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full relative z-10 shadow-lg inline-flex border-2 border-white border-opacity-20 dollar-icon">
              <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={2.5} />
            </div>
            
            {/* Reflexo/brilho */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
            
            {/* Efeito de segurança - mini escudo */}
            <div className="absolute -right-1 -bottom-1 h-5 w-5 bg-white rounded-full flex items-center justify-center z-20">
              <Lock className="h-3 w-3 text-emerald-600" />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">RENDA EM DÓLAR</h2>
            <p className="text-green-100 text-sm md:text-base mt-1">
              Proteção contra inflação e desvalorização do real
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 md:p-8 relative z-10">
        {/* Badge de segurança */}
        <div className="absolute -top-4 right-6 md:right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center protection-badge">
          <Shield className="h-3 w-3 mr-1 text-white" />
          PROTEÇÃO GARANTIDA
        </div>
        
        {/* Métricas */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
          <div className="bg-gradient-to-br from-slate-50 to-green-50 p-3 md:p-4 rounded-lg shadow-sm border border-green-100 metrics-item">
            <div className="flex items-center text-emerald-800 mb-1">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 mr-2 text-emerald-600" />
              <span className="text-xs md:text-sm font-semibold">RETORNO ANUAL</span>
            </div>
            <p className="text-emerald-900 text-lg md:text-2xl font-bold">6.8%</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-green-50 p-3 md:p-4 rounded-lg shadow-sm border border-green-100 metrics-item">
            <div className="flex items-center text-emerald-800 mb-1">
              <LineChart className="h-4 w-4 md:h-5 md:w-5 mr-2 text-emerald-600" />
              <span className="text-xs md:text-sm font-semibold">VOLATILIDADE</span>
            </div>
            <p className="text-emerald-900 text-lg md:text-2xl font-bold">Baixa</p>
          </div>
        </div>
        
        {/* Área de segurança */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-6">
          <div className="flex items-center mb-3">
            <Lock className="h-5 w-5 text-emerald-600 mr-2" />
            <h3 className="text-sm font-semibold text-emerald-800">Segurança Garantida</h3>
          </div>
          <p className="text-sm text-slate-700">Seus investimentos em dólar são protegidos contra desvalorização cambial e preservam seu poder de compra ao longo do tempo.</p>
        </div>
        
        {/* Benefícios */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm text-slate-500 uppercase font-medium tracking-wider mb-2">Benefícios exclusivos</h3>
          <div className="flex items-start">
            <div className="mt-0.5">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-emerald-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Proteção contra desvalorização da moeda local</span>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-emerald-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Renda previsível indexada ao dólar americano</span>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-emerald-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Diversificação internacional da carteira</span>
          </div>
        </div>
        
        {/* Perfil de investimento */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <h3 className="text-xs text-slate-500 uppercase font-medium mb-2">Perfil do investimento</h3>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-600">Conservador</span>
            <div className="h-1.5 w-36 md:w-48 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
            </div>
            <span className="text-xs text-slate-600">Arrojado</span>
          </div>
        </div>
      </div>
      
      {/* Footer com elemento de segurança */}
      <div className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-slate-100 to-green-50 border-t border-gray-200 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
            <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-emerald-700 mr-2 opacity-70" />
            <p className="text-xs md:text-sm text-slate-600">Oferecido por <span className="font-semibold text-emerald-700">SecureDollar™</span></p>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <Shield className="h-3 w-3 md:h-4 md:w-4 text-emerald-700 mr-1 opacity-70" />
            <p className="text-xs text-slate-500">ISIN: US037833AK68</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendaDolarCard; 