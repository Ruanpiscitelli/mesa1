import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  Shield,
  DollarSign,
  BookOpen,
  CheckCircle,
  Headphones,
  ChevronRight,
  Award,
  LineChart,
  Users,
  Lock,
  TrendingUp,
  Briefcase,
  Target,
  AlertTriangle,
  FileCheck,
  Hourglass,
  UserCheck,
  Star,
  ArrowUpRight,
  BadgeCheck,
  Timer,
  Wallet,
  BarChart,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Mail,
  Phone,
  Calculator
} from './components/icons';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { classNames } from 'primereact/utils';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import { OptimizedImage } from './components/OptimizedImage';
import CapitalProtegidoCard from './components/CapitalProtegidoCard';
import RendaDolarCard from './components/RendaDolarCard';
import MetodoEstruturadoCard from './components/MetodoEstruturadoCard';
import AprovacaoGarantidaCard from './components/AprovacaoGarantidaCard';
import SuporteInternacionalCard from './components/SuporteInternacionalCard';
import { validateForm, type FormData } from './utils/validation';

// Lazy load components
const ScrollToTop = lazy(() => import('./components/common/ScrollToTop'));
const BenefitCard = lazy(() => import('./components/BenefitCard'));

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos
  const [spotsLeft, setSpotsLeft] = useState(7); // Vagas restantes
  const [recentSignup, setRecentSignup] = useState({
    name: 'Maria S.',
    time: '3 minutos atrás'
  });

  // Função para scroll suave até o formulário
  const scrollToForm = () => {
    const formElement = document.querySelector('.consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateWhatsApp = (whatsapp: string) => {
    const cleaned = whatsapp.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 11;
  };

  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    let formattedValue = value;
    let fieldError = '';

    if (field === 'whatsapp') {
      formattedValue = formatWhatsApp(value);
      if (value && !validateWhatsApp(value)) {
        fieldError = 'WhatsApp inválido';
      }
    } else if (field === 'email') {
      if (value && !validateEmail(value)) {
        fieldError = 'Email inválido';
      }
    } else if (field === 'name') {
      if (value && value.length < 3) {
        fieldError = 'Nome muito curto';
      }
    }

    setFormData((prev: FormData) => ({ ...prev, [field]: formattedValue }));
    setErrors((prev: Record<string, string>) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = validateForm(formData);
    
    if (!validation.success) {
      setErrors(validation.errors as Record<string, string>);
      setIsSubmitting(false);
      return;
    }

    try {
      if (validation.success && validation.data) {
        const { whatsapp, name } = validation.data;
        
        const whatsappNumber = whatsapp.replace(/\D/g, '');
        
        const message = encodeURIComponent(
          `Olá! Me chamo ${name} e gostaria de saber mais sobre o método.`
        );
        
        window.location.href = `https://wa.me/55${whatsappNumber}?text=${message}`;
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Simular inscrições recentes
  useEffect(() => {
    const names = ['Maria', 'José', 'Ana', 'Pedro', 'Paulo', 'Carla', 'Lucas'];
    const times = ['30 segundos', '1 minuto', '2 minutos', '3 minutos'];
    
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomTime = times[Math.floor(Math.random() * times.length)];
      
      setRecentSignup({
        name: randomName,
        time: randomTime
      });
    }, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  // Formatar tempo restante
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-3 consultation-form" aria-label="Formulário de contato">
        <div className="p-field">
          <div className="bg-gray-50 p-2 rounded-lg">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-user text-xl" aria-hidden="true" />
              <InputText
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={classNames('w-full py-2', { 'p-invalid': errors.name })}
                placeholder="Nome completo"
                aria-label="Nome completo"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </span>
          </div>
          {errors.name && (
            <div id="name-error" className="mt-1 flex items-center gap-2 text-red-600" role="alert">
              <i className="pi pi-exclamation-circle" aria-hidden="true" />
              <small>{errors.name}</small>
            </div>
          )}
        </div>

        <div className="p-field">
          <div className="bg-gray-50 p-2 rounded-lg">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-envelope text-xl" aria-hidden="true" />
              <InputText
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={classNames('w-full py-2', { 'p-invalid': errors.email })}
                placeholder="Seu melhor e-mail"
                aria-label="Endereço de e-mail"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </span>
          </div>
          {errors.email && (
            <div id="email-error" className="mt-1 flex items-center gap-2 text-red-600" role="alert">
              <i className="pi pi-exclamation-circle" aria-hidden="true" />
              <small>{errors.email}</small>
            </div>
          )}
        </div>

        <div className="p-field">
          <div className="bg-gray-50 p-2 rounded-lg">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-phone text-xl" aria-hidden="true" />
              <InputText
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className={classNames('w-full py-2', { 'p-invalid': errors.whatsapp })}
                placeholder="WhatsApp com DDD"
                aria-label="Número de WhatsApp"
                aria-invalid={!!errors.whatsapp}
                aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
              />
            </span>
          </div>
          {errors.whatsapp && (
            <div id="whatsapp-error" className="mt-1 flex items-center gap-2 text-red-600" role="alert">
              <i className="pi pi-exclamation-circle" aria-hidden="true" />
              <small>{errors.whatsapp}</small>
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="cta-button cta-button-animate button-shine"
          loading={isSubmitting}
          disabled={isSubmitting}
          aria-label={isSubmitting ? 'Enviando formulário...' : 'Quero Saber Mais'}
        >
          <span className="cta-button-text">
            <ArrowRight className="w-5 h-5" />
            {isSubmitting ? 'Enviando...' : 'Quero Saber Mais'}
          </span>
        </Button>

        {timeLeft > 0 && (
          <div className="text-center text-sm text-gray-600" role="timer" aria-label="Tempo restante">
            <i className="pi pi-clock mr-2" aria-hidden="true" /> 
            Oferta expira em: {formatTime(timeLeft)}
          </div>
        )}

        {spotsLeft > 0 && (
          <div className="text-center text-sm text-gray-600" role="status" aria-label="Vagas restantes">
            <i className="pi pi-users mr-2" aria-hidden="true" />
            Apenas {spotsLeft} vagas restantes
          </div>
        )}
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              CONQUISTE SEGURANÇA FINANCEIRA COM RENDA EXTRA EM DÓLAR
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Descubra como brasileiros próximos da aposentadoria estão protegendo seu patrimônio e gerando de 
              <span className="financial-numbers font-bold bg-accent/20 px-2 py-1 rounded-md mx-1">US$ 1.200 a US$ 6.000</span>
              mensais sem arriscar 1 centavo do próprio bolso.
            </p>
            
            {/* Enhanced Form with Modern Design */}
            <div className="relative">
              <Card className="bg-white shadow-2xl max-w-2xl mx-auto transform hover:scale-[1.01] transition-all">
                {/* Floating Social Proof */}
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 animate-bounce">
                    <Users className="w-4 h-4" />
                    <span>8 pessoas se inscreveram nos últimos 30 min</span>
                  </div>
                </div>

                {/* Timer de Urgência */}
                <div className="bg-warning/10 text-warning-dark p-3 rounded-t-lg flex items-center justify-center gap-2 font-semibold">
                  <Timer className="w-5 h-5" />
                  <span className="countdown-timer">Oferta expira em: {formatTime(timeLeft)}</span>
                </div>

                {/* Cabeçalho do Form */}
                <div className="text-center mb-6 p-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Fale agora com um especialista
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Descubra como gerar renda extra em dólar sem riscos
                  </p>
                </div>

                {renderForm()}

                {/* Trust Badges */}
                <div className="border-t border-gray-100 mt-6 pt-6">
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <i className="pi pi-lock text-success text-xl" />
                      <div>
                        <div className="font-semibold text-gray-700">Dados Protegidos</div>
                        <div className="text-xs text-gray-500">SSL 256-bits</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="pi pi-shield text-success text-xl" />
                      <div>
                        <div className="font-semibold text-gray-700">100% Gratuito</div>
                        <div className="text-xs text-gray-500">Sem compromisso</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="pi pi-check-circle text-success text-xl" />
                      <div>
                        <div className="font-semibold text-gray-700">Satisfação Garantida</div>
                        <div className="text-xs text-gray-500">100% de aprovação garantida em contrato</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Proof Dinâmico */}
                <div className="mt-6 bg-success/5 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src={`https://i.pravatar.cc/32?img=${Math.floor(Math.random() * 10)}`} 
                        className="w-8 h-8 rounded-full border-2 border-white" 
                        alt="Recent signup" 
                        width={32}
                        height={32}
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-700">{recentSignup.name} acabou de se inscrever</p>
                        <p className="text-gray-500 text-xs">há {recentSignup.time}</p>
                      </div>
                    </div>
                    <div className="text-success font-semibold flex items-center gap-1">
                      <i className="pi pi-check-circle" />
                      <span className="text-sm">Verificado</span>
                    </div>
                  </div>
                </div>

                {/* Contador de Vagas */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <i className="pi pi-users text-warning animate-pulse" />
                    Apenas <span className="font-bold text-warning">{spotsLeft}</span> vagas restantes para hoje
                  </p>
                </div>
              </Card>

              {/* Enhanced Social Proof Outside Form */}
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Professional man"
                      width={40}
                      height={40}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Professional woman"
                      width={40}
                      height={40}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=150&h=150&fit=crop"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Senior professional"
                      width={40}
                      height={40}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Business woman"
                      width={40}
                      height={40}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Senior businessman"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-light text-sm">
                    <span className="font-bold">+15.000</span> brasileiros já aprovados
                    <span className="block text-xs text-white/80">100% dos inscritos são aprovados garantido por contrato</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits Bar */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Principais Benefícios</h2>
            <p className="text-gray-600 mt-2">Descubra as vantagens exclusivas do nosso método</p>
          </div>
          
          <div className="card-container">
            <Suspense fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="loading-skeleton h-72"></div>
                ))}
              </div>
            }>
              <div className="card">
                <CapitalProtegidoCard />
              </div>
              
              <div className="card">
                <RendaDolarCard />
              </div>
              
              <div className="card">
                <MetodoEstruturadoCard />
              </div>
              
              <div className="card">
                <AprovacaoGarantidaCard />
              </div>
              
              <div className="card">
                <SuporteInternacionalCard />
              </div>
            </Suspense>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <button 
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-accent/30 inline-flex items-center gap-2" 
              onClick={scrollToForm}
            >
              <Shield className="w-5 h-5" />
              QUERO PROTEGER MEU PATRIMÔNIO
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section 
        className="relative py-20 bg-cover bg-[95%] md:bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/src/components/features/large.webp")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              POR QUE SERVIDORES PÚBLICOS E PROFISSIONAIS CONSERVADORES ESTÃO MIGRANDO PARA MESAS PROPRIETÁRIAS
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Desenvolvido especialmente para quem valoriza segurança financeira e busca proteção para a aposentadoria
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-all group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                    <Lock className="w-12 h-12 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="font-merriweather text-xl font-bold text-primary mb-4">
                  Operação Sem Risco Patrimonial
                </h3>
                <ul className="text-left space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0 stroke-[2]" />
                    <span className="text-gray-700">Utilize capital de terceiros sem comprometer suas economias</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0 stroke-[2]" />
                    <span className="text-gray-700">Ideal para quem já teve experiências frustrantes na B3</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-all group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                    <TrendingUp className="w-12 h-12 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="font-merriweather text-xl font-bold text-primary mb-4">
                  Proteção em Dólar
                </h3>
                <ul className="text-left space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0 stroke-[2]" />
                    <span className="text-gray-700">Blindagem contra desvalorização do real e inflação brasileira</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0 stroke-[2]" />
                    <span className="text-gray-700">Renda complementar em moeda forte para sua aposentadoria</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-all group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                    <Target className="w-12 h-12 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="font-merriweather text-xl font-bold text-primary mb-4">
                  Método Conservador
                </h3>
                <ul className="text-left space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0 stroke-[2]" />
                    <span className="text-gray-700">Ganhos consistentes de 1% a 3% ao mês</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-accent mt-1 flex-shrink-0 stroke-[2]" />
                    <span className="text-gray-700">Abordagem racional sem promessas irrealistas</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="mt-12 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-accent/30 inline-flex items-center gap-2" onClick={scrollToForm}>
              <BookOpen className="w-5 h-5" />
              QUERO CONHECER O MÉTODO COMPLETO
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              COMPARE O POTENCIAL DE RENDIMENTOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Capital Próprio */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/5">
                      <Wallet className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-merriweather text-xl font-bold text-primary">Capital Próprio</h3>
                  </div>
                  <div className="text-sm font-semibold text-gray-500">Capital: US$ 1.000</div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Rendimento Diário (1%)</span>
                      <span className="text-xl font-bold text-primary">US$ 10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Rendimento Mensal</span>
                      <span className="text-lg font-bold text-primary">US$ 200</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Equivalente a <span className="font-bold text-primary">US$ 10</span> por dia
                    </p>
                  </div>
                </div>
              </div>

              {/* Mesa Proprietária */}
              <div className="bg-gradient-to-br from-primary to-primary/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                  RECOMENDADO
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-white/10">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-merriweather text-xl font-bold text-white">Mesa Proprietária</h3>
                  </div>
                  <div className="text-sm font-semibold text-white/90">Capital: US$ 500.000</div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90">Rendimento Diário (1%)</span>
                      <span className="text-xl font-bold text-white">US$ 5.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90">Rendimento Mensal</span>
                      <span className="text-lg font-bold text-white">US$ 100.000</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-white/80">
                      Equivalente a <span className="font-bold text-white">US$ 5.000</span> por dia
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-accent" />
                    <span className="text-white font-bold">500x mais rendimentos</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1">
                    Com o mesmo percentual de rendimento
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              * Valores em dólar americano (USD)
            </div>

            <div className="mt-12 text-center">
              <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-accent/30 inline-flex items-center gap-2" onClick={scrollToForm}>
                <Calculator className="w-5 h-5" />
                CALCULAR MEU POTENCIAL DE RENDIMENTOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              O CAMINHO SEGURO PARA COMPLEMENTAR SUA APOSENTADORIA EM 3 PASSOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/10 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-all"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                      <Award className="w-12 h-12 text-accent stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-primary mb-4">
                    APROVAÇÃO GARANTIDA
                  </h3>
                  <p className="text-gray-700">
                    100% de aprovação garantida em contrato ou seu dinheiro de volta
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-accent/10 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-all"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                      <LineChart className="w-12 h-12 text-accent stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-primary mb-4">
                    OPERACIONAL SIMPLIFICADO
                  </h3>
                  <p className="text-gray-700">
                    Método estruturado que elimina a complexidade do mercado
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-accent/10 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-all"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                      <Timer className="w-12 h-12 text-accent stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-primary mb-4 text-center">
                    RENDA EXTRA PREVISÍVEL
                  </h3>
                  <p className="text-gray-700 text-center">
                    Saques mensais de US$ 1.200 a US$ 6.000 sem comprometer seu patrimônio
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-accent/30 inline-flex items-center gap-2" onClick={scrollToForm}>
              <Briefcase className="w-5 h-5" />
              QUERO ENTENDER COMO ISSO FUNCIONA PARA MEU CASO
            </button>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              VEJA QUEM ESTÁ CONQUISTANDO SEGURANÇA FINANCEIRA COM NOSSO MÉTODO
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=150&h=150&fit=crop"
                    alt="Carlos M."
                    className="w-16 h-16 rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="font-merriweather text-lg font-bold text-primary">Carlos M., 62 anos</h3>
                    <p className="text-sm text-gray-600">Servidor público aposentado</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Depois de perder dinheiro na B3 por anos, encontrei a segurança que buscava. Faço 2% ao mês sem arriscar minhas economias e já saquei US$ 5.000 em 4 meses."
                </p>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?w=150&h=150&fit=crop"
                    alt="Roberto S."
                    className="w-16 h-16 rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="font-merriweather text-lg font-bold text-primary">Roberto S., 57 anos</h3>
                    <p className="text-sm text-gray-600">Professor universitário</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Sempre fui conservador com investimentos e tinha medo de perder o que construí. Com a mesa proprietária, mantenho meu patrimônio intacto e gero US$ 2.500 mensais adicionais."
                </p>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=150&h=150&fit=crop"
                    alt="Maria L."
                    className="w-16 h-16 rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="font-merriweather text-lg font-bold text-primary">Maria L., 59 anos</h3>
                    <p className="text-sm text-gray-600">Funcionária pública estadual</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Queria proteger minha aposentadoria da inflação. Hoje opero com $200K da mesa, faço apenas 1,5% ao mês e isso já representa US$ 3.000 extras todo mês."
                </p>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="mt-12 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-primary/30 inline-flex items-center gap-2" onClick={scrollToForm}>
                <UserCheck className="w-5 h-5" />
                QUERO SABER SE POSSO TER RESULTADOS SIMILARES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              O QUE ACONTECERÁ COM SUA SEGURANÇA FINANCEIRA NA APOSENTADORIA?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem Cards */}
              <div className="space-y-6">
                <Card className="border-left-3 border-red-500 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-red-100">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-merriweather text-lg font-bold text-red-800 ml-4">
                      Aposentadoria Insuficiente
                    </h3>
                  </div>
                  <Message severity="error" className="mb-4" text="A realidade de quem depende apenas da previdência oficial para manter seu padrão de vida" />
                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                      <span className="text-red-700 font-semibold">Perda de 40% da renda na aposentadoria</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Timer className="w-5 h-5 text-red-600" />
                      <span className="text-red-700 font-semibold">Aumento constante do custo de vida</span>
                    </div>
                  </div>
                </Card>

                <Card className="border-left-3 border-orange-500 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-orange-100">
                      <Wallet className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-merriweather text-lg font-bold text-orange-800 ml-4">
                      Corrosão do Poder de Compra
                    </h3>
                  </div>
                  <Message severity="warn" className="mb-4" text="Suas economias em reais perdem valor constantemente frente à inflação brasileira" />
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart className="w-5 h-5 text-orange-600" />
                      <span className="text-orange-700 font-semibold">Inflação média de 5% ao ano</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-orange-600" />
                      <span className="text-orange-700 font-semibold">Desvalorização constante do Real</span>
                    </div>
                  </div>
                </Card>

                <Card className="border-left-3 border-yellow-500 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-yellow-100">
                      <BarChart className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-merriweather text-lg font-bold text-yellow-800 ml-4">
                      Limitações da B3
                    </h3>
                  </div>
                  <Message severity="warn" className="mb-4" text="Retornos baixos, volatilidade alta e frustração constante no mercado brasileiro" />
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <LineChart className="w-5 h-5 text-yellow-600" />
                      <span className="text-yellow-700 font-semibold">Alta volatilidade e riscos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-yellow-600" />
                      <span className="text-yellow-700 font-semibold">Retornos abaixo da inflação</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Solution */}
              <Card className="bg-primary/5 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-primary ml-4">
                    A Solução: Método Comprovado
                  </h3>
                </div>

                <Message severity="success" className="mb-6" text="Descubra como proteger seu patrimônio e gerar renda extra em dólar" />

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start">
                      <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-800 mb-1">Capital 100% Protegido</h4>
                        <p className="text-gray-600">Opere com capital da mesa, protegendo todo seu patrimônio</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start">
                      <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-800 mb-1">Renda em Dólar</h4>
                        <p className="text-gray-600">Proteção contra desvalorização do real e inflação</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start">
                      <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-800 mb-1">Resultados Previsíveis</h4>
                        <p className="text-gray-600">Método conservador com ganhos de 1% a 3% ao mês</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Message severity="info" className="mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">+15.000 pessoas já aprovadas</span>
                    </div>
                  </Message>

                  <Button
                    label="GARANTIR MINHA SEGURANÇA FINANCEIRA"
                    icon="pi pi-shield"
                    className="w-full p-button-raised p-button-success text-lg py-3 button-shine"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Not For You Section */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              ATENÇÃO: ESTE PROGRAMA NÃO É PARA VOCÊ SE...
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Red Flags */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4 text-red-600">
                    <AlertTriangle className="w-8 h-8" />
                    <h3 className="font-merriweather text-lg font-bold ml-4">
                      Busca Ganhos Irrealistas
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 ml-2">
                        Está procurando fazer 50% ou 100% ao mês com day trade
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 ml-2">
                        Acredita em "fórmulas mágicas" de enriquecimento
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4 text-red-600">
                
                    <AlertTriangle className="w-8 h-8" />
                    <h3 className="font-merriweather text-lg font-bold ml-4">
                      Não Valoriza Segurança
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 ml-2">
                        Prefere apostar alto e perder tudo a construir ganhos consistentes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 ml-2">
                        Não se importa em operar com seu próprio capital
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Perfect For You */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-full bg-success/10">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-success ml-4">
                    POR OUTRO LADO, ESTE PROGRAMA É PERFEITO PARA VOCÊ SE:
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">
                      Está próximo da aposentadoria e busca segurança financeira adicional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">
                      Valoriza métodos comprovados com riscos calculados
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">
                      Prefere ganhos consistentes de 1% a 3% ao mês
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">
                      Busca uma forma de proteger seu patrimônio da inflação
                    </span>
                  </li>
                </ul>

                <button className="mt-8 w-full bg-success hover:bg-success/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-success/30 inline-flex items-center justify-center gap-2" onClick={scrollToForm}>
                  <FileCheck className="w-5 h-5" />
                  VERIFICAR SE ESSE MÉTODO É PARA MIM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              O CAMINHO PARA DESCOBRIR SE O ALAVANCAGEM PATROCINADA É PARA VOCÊ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative group">
                <div className="absolute -top-4 -right-4 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                    <FileCheck className="w-12 h-12 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="font-merriweather text-lg font-bold text-primary mb-4 text-center">
                  DIAGNÓSTICO INICIAL
                </h3>
                <p className="text-gray-700 text-center">
                  15 minutos para entender sua situação atual e objetivos
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative group">
                <div className="absolute -top-4 -right-4 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                    <GraduationCap className="w-12 h-12 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="font-merriweather text-lg font-bold text-primary mb-4 text-center">
                  APRESENTAÇÃO PERSONALIZADA
                </h3>
                <p className="text-gray-700 text-center">
                  30 minutos demonstrando como o método se aplica ao seu caso
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md relative group">
                <div className="absolute -top-4 -right-4 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all">
                    <ArrowUpRight className="w-12 h-12 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="font-merriweather text-lg font-bold text-primary mb-4 text-center">
                  PLANO DE AÇÃO
                </h3>
                <p className="text-gray-700 text-center">
                  Cronograma claro para implementação do método
                </p>
              </div>
            </div>

            {/* Scarcity Elements */}
            <div className="bg-primary/5 p-8 rounded-lg mb-8">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex items-center gap-3">
                  <Timer className="w-6 h-6 text-accent" />
                  <span className="text-primary font-semibold">
                    Apenas 5 consultorias gratuitas disponíveis hoje
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-accent" />
                  <span className="text-primary font-semibold">
                    Diagnóstico completo sem custo apenas nesta semana
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-accent/30 inline-flex items-center gap-2" onClick={scrollToForm}>
                <Headphones className="w-5 h-5" />
                QUERO AGENDAR MINHA CONSULTORIA GRATUITA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Expert */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src="/src/components/features/willtrade.webp"
                    alt="William Aksenen"
                    className="rounded-lg shadow-md w-full"
                    width={400}
                    height={500}
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    WILLIAM AKSENEN: DE ENTREGADOR DE GÁS A ESPECIALISTA EM SEGURANÇA FINANCEIRA
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/5">
                        <Timer className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-gray-700">
                        <strong>6 anos</strong> de experiência
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/5">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-gray-700">
                        <strong>+15.000</strong> aprovações
                      </span>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 mb-6 italic text-gray-700">
                    "Minha maior satisfação é ver pessoas conservadoras, que fizeram tudo certo na vida, finalmente conquistando a segurança financeira que merecem sem precisar arriscar o patrimônio que construíram com tanto esforço."
                  </blockquote>

                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] focus:ring-4 focus:ring-primary/30 inline-flex items-center justify-center gap-2" onClick={scrollToForm}>
                    <Headphones className="w-5 h-5" />
                    QUERO CONVERSAR COM UM CONSULTOR ESPECIALIZADO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso Importante */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          {/* Aviso de Riscos */}
          <div className="footer-accordion-item" data-important>
            <div 
              className="footer-accordion-toggle"
              role="button"
              tabIndex={0}
              aria-expanded="true"
            >
              <span className="icon-importante" aria-hidden="true"></span>
              <h4></h4>
              <button 
                aria-label="Ver Menos"
                className="button-accordion"
              >
                −
              </button>
            </div>
            <div 
              className="footer-accordion-box"
              aria-hidden="false"
            >
              <p>
                Investimentos envolvem riscos e podem causar perdas ao investidor. Certifique-se dos riscos e se o investimento faz sentido para o seu perfil antes de investir. Não há garantia de retorno. Retornos passados não garantem retornos futuros.
              </p>
            </div>
          </div>

          {/* Aviso Legal */}
          <div className="footer-accordion-item" data-important>
            <div 
              className="footer-accordion-toggle"
              role="button"
              tabIndex={0}
              aria-expanded="true"
            >
              <span className="icon-importante" aria-hidden="true">ℹ️</span>
              <h4>Importante</h4>
              <button 
                aria-label="Ver Menos"
                className="button-accordion"
              >
                −
              </button>
            </div>
            <div 
              className="footer-accordion-box"
              aria-hidden="false"
            >
              <p>
                Este conteúdo é oferecido pela <strong>WILLTRADER CONSULTORIA E ANÁLISES</strong>. 
                Os materiais são fornecidos "como estão", sem garantias sobre precisão, resultados ou confiabilidade. 
                A <strong>WILLTRADER</strong> não oferece aconselhamento financeiro pessoal, sendo apenas um recurso informativo. 
                Os retornos financeiros apresentados são excepcionais e não devem ser esperados pelo investidor médio, 
                sendo sempre proporcionais ao tamanho do seu investimento. A expertise do profissional em sua área de 
                atuação não implica necessariamente o sucesso da estratégia veiculada na campanha, não devendo ser 
                interpretada como uma promessa de retorno financeiro. Os riscos são inerentes a qualquer operação financeira.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-merriweather-sans text-xl mb-4 flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                Contato
              </h4>
              <p>consultoria@dolartodosantodia.com.br</p>
              <p>WhatsApp: (XX) XXXXX-XXXX</p>
            </div>
            <div>
              <h4 className="font-merriweather-sans text-xl mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Legal
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm">
                Aviso de Risco: Investimentos no mercado financeiro envolvem riscos. Resultados passados não garantem resultados futuros.
              </p>
              <p className="text-sm mt-4">
                Copyright © 2025 William Aksenen. Todos os direitos reservados.
              </p>
              <p className="text-sm mt-2">
                CNPJ: XX.XXX.XXX/0001-XX
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;