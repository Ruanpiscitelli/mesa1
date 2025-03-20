import React from 'react';
import { Award, CheckCircle, DollarSign, FileText, Shield, Users, Lock } from 'lucide-react';

const AprovacaoGarantidaCard = () => {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative aprovacao-garantida-card">
      {/* Círculos decorativos de fundo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-green-50 opacity-60 hidden md:block"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-green-50 opacity-50 hidden md:block"></div>
      
      {/* Header com gradiente e ícone de medalha */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-600 p-6 md:p-8 relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-400 opacity-20 blur-xl"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Ícone de medalha premium com efeitos */}
          <div className="relative">
            {/* Camada base do ícone */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 blur-md transform scale-110"></div>
            
            {/* Ícone principal */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-full relative z-10 shadow-lg inline-flex award-icon">
              <Award className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={1.5} />
            </div>
            
            {/* Reflexo/brilho */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/5 bg-white opacity-40 rounded-full blur-sm"></div>
            
            {/* Selo de garantia */}
            <div className="absolute -right-1 -bottom-1 h-5 w-5 bg-green-600 rounded-full flex items-center justify-center z-20">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">APROVAÇÃO GARANTIDA</h2>
            <p className="text-green-100 text-sm md:text-base mt-1">
              100% de aprovação garantida em contrato
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6 md:p-8 relative z-10">
        {/* Badge de mesa proprietária */}
        <div className="absolute -top-4 right-6 md:right-8 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center security-badge">
          <Users className="h-3 w-3 mr-1 text-white" />
          MESA PROPRIETÁRIA
        </div>
        
        {/* Destaque do valor */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 mb-6 relative overflow-hidden">
          <div className="flex items-center mb-2">
            <DollarSign className="h-6 w-6 text-green-700 mr-2" />
            <h3 className="text-base md:text-lg font-bold text-green-800">CAPITAL GARANTIDO</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-2">Acesso a:</p>
              <p className="text-2xl md:text-3xl font-bold text-green-700">US$ 500.000</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-green-100">
              <FileText className="h-8 w-8 text-green-600" />
              <p className="text-xs text-green-600 font-medium mt-1">Garantido em Contrato</p>
            </div>
          </div>
          
          {/* Elemento decorativo */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-green-200 opacity-30 blur-lg"></div>
        </div>
        
        {/* Benefícios */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm text-slate-500 uppercase font-medium tracking-wider mb-2">Benefícios exclusivos</h3>
          <div className="flex items-start benefits-item">
            <div className="mt-0.5">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Acesso a mesa proprietária profissional</span>
          </div>
          <div className="flex items-start benefits-item">
            <div className="mt-0.5">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Capital de US$ 500.000 garantido</span>
          </div>
          <div className="flex items-start benefits-item">
            <div className="mt-0.5">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Suporte técnico e estratégico especializado</span>
          </div>
          <div className="flex items-start benefits-item">
            <div className="mt-0.5">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 flex-shrink-0" />
            </div>
            <span className="text-sm md:text-base text-slate-700">Não utiliza recursos próprios</span>
          </div>
        </div>
        
        {/* Elemento de segurança */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center">
          <Lock className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <h4 className="text-sm font-medium text-slate-700">Contrato blindado</h4>
            <p className="text-xs text-slate-500">Aprovação garantida por instrumento jurídico</p>
          </div>
          <div className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
            100% Seguro
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-slate-100 to-green-50 border-t border-gray-200 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
            <Shield className="h-3 w-3 md:h-4 md:w-4 text-green-700 mr-2 opacity-70" />
            <p className="text-xs md:text-sm text-slate-600">Desenvolvido por <span className="font-semibold text-green-700">Willian Aksenen</span></p>
          </div>
          <p className="text-xs text-slate-500">Contrato #PTM500-2025</p>
        </div>
      </div>
    </div>
  );
};

export default AprovacaoGarantidaCard; 