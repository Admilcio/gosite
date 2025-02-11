import React from 'react';
import { Star, Code, Zap, Shield, MessageCircle, ChevronRight, MapPin as WhatsappIcon, Globe, CheckCircle2, Plus, Minus, Palette, Users, Layout, Search, Headphones, ChevronDown, ChevronLeft, MoveDown, Cloud } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { guitarImage, servicesImage, dashboardImage } from './assets/portfolio';

function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [activeProcess, setActiveProcess] = React.useState<number | null>(null);
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
      // Reset button state after scrolling
      setTimeout(() => setIsButtonClicked(false), 1000);
    }
  };

const slides = [
  {
    title: "NÓS ESTAMOS SÉRIOS",
    subtitle: "SOBRE O SEU NEGÓCIO",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "TRANSFORME SUA",
    subtitle: "PRESENÇA DIGITAL",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "SOLUÇÕES INOVADORAS",
    subtitle: "PARA O SEU SUCESSO",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80",
  }
];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const processos = [
    { fase: "Fase 1", titulo: "Descoberta e Planejamento", icon: Search },
    { fase: "Fase 2", titulo: "Estratégia e Arquitetura", icon: Layout },
    { fase: "Fase 3", titulo: "Design Visual", icon: Palette },
    { fase: "Fase 4", titulo: "Desenvolvimento e Otimização", icon: Code },
    { fase: "Fase 5", titulo: "Testes e Ajustes", icon: Shield },
    { fase: "Fase 6", titulo: "Lançamento e Suporte Contínuo", icon: Headphones },
  ];

  const processosCompletos = processos.map((p, index) => ({
    ...p,
    descricao: [
      "Compreender profundamente as necessidades, metas e público-alvo do cliente para criar uma base sólida para o projeto",
      "Estruturar a navegação e o conteúdo do site de forma lógica e intuitiva para uma experiência do usuário excepcional",
      "Criar um visual em sintonia com a identidade da marca e proporcionar uma experiência agradável ao utilizador",
      "Transformar o design em um site funcional e responsivo, utilizando as mais recentes tecnologias web",
      "Garantir que o site funcione perfeitamente em todos os dispositivos e navegadores",
      "Publicar o site e fornecer suporte contínuo para manter atualizado, seguro e eficiente"
    ][index],
    detalhes: [
      "• Análise detalhada do mercado e concorrência\n• Definição clara dos objetivos do projeto\n• Identificação do público-alvo e suas necessidades\n• Levantamento de requisitos técnicos e funcionais",
      "• Desenvolvimento de wireframes detalhados\n• Planejamento da estrutura de navegação\n• Definição da arquitetura da informação\n• Mapeamento da jornada do usuário",
      "• Criação de layouts responsivos e modernos\n• Desenvolvimento da paleta de cores\n• Seleção de tipografia e elementos visuais\n• Design de componentes interativos",
      "• Codificação com tecnologias modernas\n• Implementação de recursos interativos\n• Otimização de performance\n• Integração com APIs e sistemas",
      "• Testes em múltiplos dispositivos\n• Verificação de compatibilidade\n• Testes de usabilidade\n• Otimização de velocidade e performance",
      "• Configuração de servidores\n• Implementação de análise de dados\n• Monitoramento de segurança\n• Atualizações e melhorias contínuas"
    ][index]
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Submit the form data
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
    }).then(() => {
      setShowSuccess(true);
      form.reset();
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // Hide after 5 seconds
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const faqs = [
    {
      pergunta: "Quais serviços de design e desenvolvimento são oferecidos?",
      resposta: "Oferecemos uma gama completa de serviços, incluindo design personalizado de sites, desenvolvimento web, otimização SEO, integração com sistemas, e-commerce, área de membros e muito mais."
    },
    {
      pergunta: "Quanto tempo leva para criar um site?",
      resposta: "O prazo varia de acordo com o tipo e complexidade do projeto: Landing pages em 7 dias, sites institucionais de 1 a 4 semanas, lojas virtuais (Shopify) de 2 a 8 semanas, e projetos mais complexos de 6 a 12 semanas."
    },
    {
      pergunta: "Como é determinado o preço de um site?",
      resposta: "O preço é calculado com base na complexidade do projeto, funcionalidades necessárias, prazo de entrega e escopo do trabalho. Fazemos um orçamento personalizado para cada cliente."
    },
    {
      pergunta: "Posso atualizar meu site depois de pronto?",
      resposta: "Sim! Desenvolvemos sites com painéis administrativos intuitivos que permitem você atualizar conteúdo facilmente. Também oferecemos pacotes de manutenção mensal."
    },
    {
      pergunta: "Meu site será responsivo e otimizado para SEO?",
      resposta: "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo e seguem as melhores práticas de SEO para garantir boa visibilidade nos mecanismos de busca."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div>
        <Navbar />
        
        {/* Header/Banner - Reduced height */}
        <header className="relative h-[75vh] md:h-[85vh] overflow-hidden" id="inicio">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  filter: 'brightness(0.3)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 transform transition-all duration-1000">
                  <h2 className="text-gray-400 text-xl md:text-2xl mb-2 tracking-wider">
                    {slide.title}
                  </h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                    {slide.subtitle}
                  </h1>
                  <div className="mt-16">
                    <button 
                      className={`p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 
                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer
                        ${isButtonClicked ? 'scale-95' : ''} 
                        group relative`}
                      aria-label="Scroll to next section"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        scrollToSection('#servicos');
                      }}
                    >
                      <MoveDown className="w-8 h-8 text-white group-hover:text-white/90 floating-arrow" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/75 text-sm 
                        opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Explorar
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </header>

        {/* Serviços */}
        <section className="py-20 bg-[#1A0B2E]" id="servicos">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#F5B453] mb-4">Serviços que Oferecemos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Soluções personalizadas para impulsionar seu negócio no mundo digital
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group p-8 rounded-2xl border border-[#F5B453]/20 hover:border-[#F5B453]/40 bg-[#2D1B4E]/50 transition-all duration-300">
                <div className="w-16 h-16 mb-6">
                  <Code className="w-full h-full text-[#F5B453]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F5B453]">Desenvolvimento Web</h3>
                <p className="text-gray-400">
                  Sites modernos e responsivos com as melhores tecnologias do mercado.
                </p>
              </div>
              {/* Card 2 */}
              <div className="group p-8 rounded-2xl border border-[#F5B453]/20 hover:border-[#F5B453]/40 bg-[#2D1B4E]/50 transition-all duration-300">
                <div className="w-16 h-16 mb-6">
                  <Globe className="w-full h-full text-[#F5B453]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F5B453]">Web Hosting</h3>
                <p className="text-gray-400">
                  Hospedagem confiável e segura para seu site com suporte 24/7.
                </p>
              </div>
              {/* Card 3 */}
              <div className="group p-8 rounded-2xl border border-[#F5B453]/20 hover:border-[#F5B453]/40 bg-[#2D1B4E]/50 transition-all duration-300">
                <div className="w-16 h-16 mb-6">
                  <Users className="w-full h-full text-[#F5B453]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F5B453]">Social Media</h3>
                <p className="text-gray-400">
                  Estratégias eficientes para aumentar sua presença nas redes sociais.
                </p>
              </div>
              {/* Card 4 */}
              <div className="group p-8 rounded-2xl border border-[#F5B453]/20 hover:border-[#F5B453]/40 bg-[#2D1B4E]/50 transition-all duration-300">
                <div className="w-16 h-16 mb-6">
                  <Zap className="w-full h-full text-[#F5B453]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F5B453]">SEO Optimization</h3>
                <p className="text-gray-400">
                  Melhore sua visibilidade nos mecanismos de busca e atraia mais tráfego.
                </p>
              </div>
              {/* Card 5 */}
              <div className="group p-8 rounded-2xl border border-[#F5B453]/20 hover:border-[#F5B453]/40 bg-[#2D1B4E]/50 transition-all duration-300">
                <div className="w-16 h-16 mb-6">
                  <Cloud className="w-full h-full text-[#F5B453]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F5B453]">Cloud Server</h3>
                <p className="text-gray-400">
                  Soluções em nuvem escaláveis e seguras para seu negócio.
                </p>
              </div>
              {/* Card 6 */}
              <div className="group p-8 rounded-2xl border border-[#F5B453]/20 hover:border-[#F5B453]/40 bg-[#2D1B4E]/50 transition-all duration-300">
                <div className="w-16 h-16 mb-6">
                  <Shield className="w-full h-full text-[#F5B453]" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F5B453]">Data Security</h3>
                <p className="text-gray-400">
                  Proteção avançada para seus dados e informações sensíveis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processo de Desenvolvimento */}
        <section className="py-20 bg-[#111] mt-12" id="processo">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
            <div className="relative z-10">
            <h2 className="text-center mb-4">
              <span className="text-4xl font-bold">
                <span className="text-[#999]">Transforma  Ideia à </span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold glow-text">Realidade</span>
              </span>
            </h2>
            <p className="text-[#666] text-center max-w-2xl mx-auto mb-16">
              O processo de criação em seis etapas
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processosCompletos.map((processo, index) => (
                <div 
                  key={index}
                  className={`process-card p-6 rounded-xl cursor-pointer relative overflow-hidden
                    ${activeProcess === index ? 'ring-2 ring-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] scale-[1.02]' : 'hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'}`}
                  onClick={() => setActiveProcess(activeProcess === index ? null : index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm animate-gradient" />
                  <div className="relative z-10">
                  <div className="flex flex-col gap-4">
                    <span className={`text-sm font-medium px-4 py-1 rounded-full w-fit
                      bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white shadow-lg`}>
                      {processo.fase}
                    </span>
                    <div className="flex-grow">
                      <h3 className="text-xl font-medium text-white mb-2">{processo.titulo}</h3>
                      <p className="text-[#999] mb-4">Objetivo:</p>
                      <p className="text-[#ccc]">{processo.descricao}</p>
                      
                      <div className={`process-details overflow-hidden ${
                        activeProcess === index ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="text-[#ccc] bg-black/30 p-4 rounded-lg border border-gray-700 space-y-2 whitespace-pre-line">
                          {processo.detalhes}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section className="py-20 bg-[#111]" id="portfolio">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-16">
                <span className="text-4xl font-bold">
                  <span className="text-[#999]">Nosso </span>
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold glow-text">Portfólio</span>
                </span>
              </h2>
              
              {/* Project 1 */}
              <div className="mb-24">
                <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
                  <div className="relative p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Curso de Guitarra</h3>
                        <p className="text-gray-300 mb-6">Plataforma completa de ensino musical com área de membros.</p>
                        <ul className="space-y-2 text-sm text-gray-400 mb-8">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Sistema de aulas em vídeo
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Área de membros personalizada
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Integração com pagamentos
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <img 
                          src={guitarImage}
                          alt="Curso de Guitarra"
                          className="rounded-lg shadow-2xl transform transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="mb-24">
                <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
                  <div className="relative p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="order-2 md:order-1 relative">
                        <img 
                          src={servicesImage}
                          alt="Sistema de Serviços"
                          className="rounded-lg shadow-2xl transform transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Serviços Domésticos</h3>
                        <p className="text-gray-300 mb-6">Sistema completo de agendamento para serviços residenciais.</p>
                        <ul className="space-y-2 text-sm text-gray-400 mb-8">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Agendamento online
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Gestão de profissionais
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Sistema de avaliações
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div>
                <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
                  <div className="relative p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Salão de Beleza</h3>
                        <p className="text-gray-300 mb-6">Website profissional com sistema de agendamento integrado.</p>
                        <ul className="space-y-2 text-sm text-gray-400 mb-8">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Design responsivo moderno
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Agendamento online
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            Galeria de serviços
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <img 
                          src={dashboardImage}
                          alt="Sistema de Gestão"
                          className="rounded-lg shadow-2xl transform transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-[#111]" id="depoimentos">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">
              <span className="text-4xl font-bold">
                <span className="text-[#999]">O que Nossos </span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold glow-text">Clientes Dizem</span>
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Silva",
                  role: "Proprietária, Boutique Online",
                  text: "O site ficou exatamente como eu precisava. Desde o lançamento, notei uma melhora nas vendas e na interação com os clientes. Estou muito satisfeita com o resultado."
                },
                {
                  name: "João Santos",
                  role: "CEO, Startup de Tecnologia",
                  text: "Profissionais extremamente competentes. Entregaram o projeto no prazo e com qualidade excepcional."
                },
                {
                  name: "Ana Costa",
                  role: "Gerente de Marketing",
                  text: "O suporte pós-lançamento é excelente. Sempre respondem rapidamente quando precisamos."
                }
              ].map((depoimento, index) => (
                <div key={index} className="process-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-[#ccc] mb-4">{depoimento.text}</p>
                  <div>
                    <p className="font-semibold text-white">{depoimento.name}</p>
                    <p className="text-sm text-[#999]">{depoimento.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-20 bg-gray-50" id="contato">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-gray-100">
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <p className="text-green-800">
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </p>
                  </div>
                )}
                <form 
                  className="space-y-6"
                  action="https://formsubmit.co/ajax/gositept@gmail.com"
                  method="POST" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_next" value="https://your-new-domain.com/#contato" />
                  <input type="hidden" name="_subject" value="Novo contato do site GoSite" />
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-100 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-100 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                      placeholder="Descreva seu projeto..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      
        {/* FAQ */}
        <section className="py-20 bg-[#111]" id="faq">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-100">{faq.pergunta}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-48 py-4' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-300">{faq.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Fixo */}
        <a
          href="https://wa.me/351920790625?text=Olá! Gostaria de um orçamento para meu site."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
        >
          <WhatsappIcon size={24} />
          <span className="hidden md:inline">Solicitar Orçamento</span>
        </a>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-2">
                <Globe className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-bold">GoSite</span>
              </div>
              <div className="text-right">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} GoSite. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
                