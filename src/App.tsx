import React from 'react';
import { Star, Code, Zap, Shield, MessageCircle, ChevronRight, MapIcon as WhatsappIcon, Globe, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { guitarImage, servicesImage, dashboardImage } from './assets/portfolio';

function App() {
  const [showSuccess, setShowSuccess] = React.useState(false);

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header/Banner */}
      <header className="relative pt-16 pb-24 overflow-hidden" id="inicio">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight px-4 text-white">
              Transforme sua Presença Digital com Sites Profissionais
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100 px-4">
              Desenvolvimento de sites otimizados, rápidos e seguros que convertem visitantes em clientes.
            </p>
            <div className="bg-yellow-400 inline-block text-blue-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transform hover:scale-105 transition-transform duration-200 mb-8 mx-4">
              Oferta por Tempo Limitado: 20% de desconto no primeiro projeto
            </div>
            <div className="flex justify-center gap-4 px-4">
              <a href="#contato" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg">
                Solicitar Orçamento <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-bottom-right z-20"></div>
      </header>

      {/* Serviços */}
      <section className="py-20 bg-white" id="servicos">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Desenvolvimento Web</h3>
              <p className="text-gray-600 text-center">
                Sites modernos e responsivos com as melhores tecnologias do mercado.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Otimização SEO</h3>
              <p className="text-gray-600 text-center">
                Melhore seu ranking nos buscadores e atraia mais visitantes.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Segurança</h3>
              <p className="text-gray-600 text-center">
                Proteção avançada para seu site e dados dos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section className="py-20 bg-gray-50" id="portfolio">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Portfólio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={guitarImage}
                className="w-full h-48 object-cover bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Curso de Guitarra</h3>
                <p className="text-gray-600">Plataforma completa de ensino musical com área de membros.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={servicesImage}
                alt="Sistema de Serviços"
                className="w-full h-48 object-cover bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Serviços Domésticos</h3>
                <p className="text-gray-600">Sistema completo de agendamento para serviços residenciais.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={dashboardImage}
                alt="Sistema de Gestão"
                className="w-full h-48 object-cover bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Salão de Beleza</h3>
                <p className="text-gray-600">Website profissional com sistema de agendamento integrado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white" id="depoimentos">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">O que Nossos Clientes Dizem</h2>
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
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{depoimento.text}</p>
                <div>
                  <p className="font-semibold">{depoimento.name}</p>
                  <p className="text-sm text-gray-500">{depoimento.role}</p>
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
            <div className="bg-white p-8 rounded-xl shadow-lg">
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
                <input type="hidden" name="_next" value="https://gosite.pt/#contato" />
                <input type="hidden" name="_subject" value="Novo contato do site GoSite" />
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
  );
}

export default App;
