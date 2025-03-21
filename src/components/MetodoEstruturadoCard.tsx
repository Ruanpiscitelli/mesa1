import React from 'react';
import { BookOpen, CheckSquare, TrendingUp, BarChart2, DollarSign, Clock } from 'lucide-react';

const MetodoEstruturadoCard = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-300 relative flex flex-col">
      {/* Header com gradiente e ícone de livro integrado */}
      <div className="card-header bg-gradient-to-r from-blue-700 to-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
        
        {/* Gráfico de velas estilizado no fundo */}
        <div className="absolute bottom-0 right-0 w-full h-12 opacity-10">
          <div className="flex h-full items-end justify-end space-x-1 pr-4">
            {[5, 8, 4, 9, 6, 7, 5, 8, 9, 7].map((height, index) => (
              <div key={index} className="w-1 bg-white" style={{ height: `${height * 10}%` }}></div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ícone de livro premium com elementos forex */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full opacity-30 blur-md transform scale-110"></div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 sm:p-2.5 rounded-full relative z-10 shadow-lg inline-flex">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
            <div className="absolute -right-1 -bottom-1 h-4 sm:h-5 w-4 sm:w-5 bg-white rounded-full flex items-center justify-center z-20">
              <DollarSign className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-blue-600" />
            </div>
          </div>
          
          <div>
            <h2 className="card-title text-white">MÉTODO ESTRUTURADO</h2>
            <p className="card-subtitle text-blue-100 mt-0.5 sm:mt-1">
              Sistema passo a passo
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="card-body bg-white flex-1">
        {/* Badge de trading */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md flex items-center">
          <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-white" />
          TRADING
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Passos visuais com elementos forex */}
          <div className="flex justify-between items-center px-1 sm:px-2 mb-1 sm:mb-2">
            <div className="flex flex-col items-center">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs border border-blue-200">
                <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <p className="text-xs text-center mt-1 text-slate-600">Estratégia</p>
            </div>
            <div className="h-0.5 w-3 sm:w-4 bg-gradient-to-r from-blue-200 to-blue-300"></div>
            <div className="flex flex-col items-center">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs border border-blue-200">
                <BarChart2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <p className="text-xs text-center mt-1 text-slate-600">Análise</p>
            </div>
            <div className="h-0.5 w-3 sm:w-4 bg-gradient-to-r from-blue-200 to-blue-300"></div>
            <div className="flex flex-col items-center">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs border border-blue-200">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <p className="text-xs text-center mt-1 text-slate-600">Execução</p>
            </div>
          </div>
          
          {/* Benefícios para traders - Versão condensada */}
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-xs sm:text-sm text-slate-500 uppercase font-medium tracking-wider mb-1">Benefícios</h3>
            <div className="flex items-start">
              <div className="mt-0.5">
                <CheckSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Identificação precisa de pontos de entrada</span>
            </div>
            <div className="flex items-start">
              <div className="mt-0.5">
                <CheckSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500 mr-1.5 sm:mr-2 flex-shrink-0" />
              </div>
              <span className="card-text text-slate-700">Gestão de risco otimizada</span>
            </div>
          </div>
        </div>
        
        {/* Métricas simplificadas */}
        <div className="bg-blue-50 p-2 sm:p-3 rounded-lg border border-blue-100 mt-3 sm:mt-4">
          <div className="flex items-center mb-0.5 sm:mb-1">
            <BarChart2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 mr-1.5 sm:mr-2" />
            <h3 className="font-semibold text-blue-800 text-xs sm:text-sm">Trading Sistemático</h3>
          </div>
          <p className="card-text text-slate-700">Sistema para identificar padrões e executar operações com precisão.</p>
        </div>
      </div>
      
      {/* Footer simplificado */}
      <div className="card-footer bg-gradient-to-r from-slate-100 to-blue-50 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 mr-1.5 sm:mr-2" />
            <p className="card-text text-slate-600">Operações 24/5</p>
          </div>
          <div className="card-text text-slate-500 text-xs sm:text-sm">
            <span className="text-blue-600 font-medium">ID:</span> FX-METHOD
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoEstruturadoCard; 