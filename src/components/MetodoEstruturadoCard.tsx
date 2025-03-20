import React from 'react';
import { BookOpen, CheckSquare, TrendingUp, BarChart2, DollarSign, LineChart, Clock, Globe } from 'lucide-react';

const MetodoEstruturadoCard = () => {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-50 opacity-60 hidden md:block"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-blue-50 opacity-50 hidden md:block"></div>
      
      {/* Elementos gráficos de trading */}
      <div className="absolute top-32 right-6 w-20 h-20 opacity-5 md:opacity-10">
        <LineChart className="w-full h-full text-blue-900" />
      </div>
      <div className="absolute bottom-20 left-6 w-16 h-16 opacity-5 md:opacity-10">
        <BarChart2 className="w-full h-full text-blue-900" />
      </div>
      
      {/* Header com gradiente e ícone de livro integrado */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 p-6 md:p-8 relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
        
        {/* Gráfico de velas no fundo */}
        <div className="absolute bottom-0 right-0 w-full h-16 opacity-10">
          <div className="flex h-full items-end justify-end space-x-1 pr-4">
            {[5, 8, 4, 9, 6, 7, 5, 8, 9, 7, 6, 8, 10, 8].map((height, index) => (
              <div key={index} className="w-1 bg-white" style={{ height: `${height * 10}%` }}></div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Ícone de livro premium com elementos forex */}
          <div className="relative">
            {/* Camada base do ícone */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full opacity-30 blur-md transform scale-110"></div>
            
            {/* Ícone principal */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full relative z-10 shadow-lg inline-flex">
              <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={1.5} />
            </div>
            
            {/* Reflexo/brilho */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
            
            {/* Elemento forex */}
            <div className="absolute -right-1 -bottom-1 h-5 w-5 bg-white rounded-full flex items-center justify-center z-20">
              <DollarSign className="h-3 w-3 text-blue-600" />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">MÉTODO ESTRUTURADO</h2>
            <p className="text-blue-100 text-sm md:text-base mt-1">
              Sistema passo a passo sem complexidade
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 md:p-8 relative z-10">
        {/* Badge de trading */}
        <div className="absolute -top-4 right-6 md:right-8 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
          <TrendingUp className="h-3 w-3 mr-1 text-white" />
          TRADING FOREX
        </div>
        
        {/* Passos visuais com elementos forex */}
        <div className="flex justify-between items-center mb-6 px-2">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border-2 border-blue-200">
              <BookOpen className="h-4 w-4" />
            </div>
            <div className="w-16 text-center mt-1">
              <p className="text-xs text-slate-600">Estratégia</p>
            </div>
          </div>
          <div className="h-0.5 w-6 bg-gradient-to-r from-blue-200 to-blue-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border-2 border-blue-200">
              <BarChart2 className="h-4 w-4" />
            </div>
            <div className="w-16 text-center mt-1">
              <p className="text-xs text-slate-600">Análise</p>
            </div>
          </div>
          <div className="h-0.5 w-6 bg-gradient-to-r from-blue-200 to-blue-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border-2 border-blue-200">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="w-16 text-center mt-1">
              <p className="text-xs text-slate-600">Execução</p>
            </div>
          </div>
          <div className="h-0.5 w-6 bg-gradient-to-r from-blue-200 to-blue-300"></div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border-2 border-blue-200">
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="w-16 text-center mt-1">
              <p className="text-xs text-slate-600">Resultado</p>
            </div>
          </div>
        </div>
        
        {/* Mini gráfico de trading */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 relative overflow-hidden">
          <div className="flex items-center mb-2">
            <LineChart className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-sm font-semibold text-blue-800">Trading Sistemático</h3>
          </div>
          <p className="text-sm text-slate-700 relative z-10">Sistema de trading desenvolvido para identificar padrões de mercado e executar operações com precisão, independente da volatilidade.</p>
          
          {/* Mini gráfico de fundo */}
          <div className="absolute bottom-0 right-0 w-full h-full opacity-5">
            <div className="h-full w-full flex items-end">
              <svg viewBox="0 0 100 30" className="h-full w-full">
                <path d="M0,25 L5,20 L10,22 L15,15 L20,18 L25,10 L30,15 L35,8 L40,12 L45,7 L50,5 L55,10 L60,7 L65,12 L70,8 L75,15 L80,12 L85,18 L90,15 L95,10 L100,5" 
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="1.5" 
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Benefícios */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm text-slate-500 uppercase font-medium tracking-wider mb-2">Benefícios para traders</h3>
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Identificação precisa de pontos de entrada e saída</span>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Gestão de risco otimizada com stop-loss inteligente</span>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Estratégias adaptáveis para múltiplos pares de moedas</span>
          </div>
        </div>
        
        {/* Métricas de trading */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 md:p-3 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-center text-blue-800 mb-1">
              <TrendingUp className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-xs font-semibold">WIN RATE</span>
            </div>
            <p className="text-blue-900 text-base md:text-xl font-bold">76%</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 md:p-3 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-center text-blue-800 mb-1">
              <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-xs font-semibold">PROFIT</span>
            </div>
            <p className="text-blue-900 text-base md:text-xl font-bold">2.5:1</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 md:p-3 rounded-lg shadow-sm border border-blue-100">
            <div className="flex items-center text-blue-800 mb-1">
              <Clock className="h-4 w-4 mr-1 text-blue-600" />
              <span className="text-xs font-semibold">TIMEFRAMES</span>
            </div>
            <p className="text-blue-900 text-base md:text-xl font-bold">M15-D1</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-slate-100 to-blue-50 border-t border-gray-200 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
            <Globe className="h-3 w-3 md:h-4 md:w-4 text-blue-700 mr-2 opacity-70" />
            <p className="text-xs md:text-sm text-slate-600">Desenvolvido por <span className="font-semibold text-blue-700">Willian Aksenen</span></p>
          </div>
          <div className="flex items-center text-xs text-slate-500">
            <div className="flex space-x-1 mr-2">
              {['EUR/USD', 'GBP/USD', 'USD/JPY'].map((pair, index) => (
                <span key={index} className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">{pair}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoEstruturadoCard; 