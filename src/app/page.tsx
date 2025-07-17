"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.3
        parallaxRef.current.style.transform = `translate3d(0px, ${rate}px, 0px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitMessage('¡Gracias por contactarnos! Te responderemos pronto.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="text-white px-6 py-4" style={{ backgroundColor: '#000c12' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Pointech Logo" className="h-12" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicios" className="hover:text-gray-300 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-gray-300 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-gray-300 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        {/* Parallax Background */}
        <div 
          ref={parallaxRef}
          className="absolute opacity-20"
          style={{
            backgroundImage: 'url("/parallax.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            willChange: 'transform',
            top: '-20%',
            left: '0',
            right: '0',
            height: '120%'
          }}
        />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Pointech</h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delay">Soluciones Tecnológicas a tu Alcance</p>
          </div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in-delay-2">
            Especialistas en reparación, mantenimiento e instalación de hardware y software, 
            seguridad informática y sistemas de alarmas. Tu socio tecnológico de confianza.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3 animate-fade-in-delay-3"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conoce Nuestros Servicios
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para empresas y particulares
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <img src="/reparacionhardware.jpg" alt="Reparación de Hardware" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">Reparación de Hardware</CardTitle>
                <CardDescription>
                  Diagnóstico y reparación de equipos informáticos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reparación de computadoras</li>
                  <li>• Mantenimiento preventivo</li>
                  <li>• Actualización de componentes</li>
                  <li>• Recuperación de datos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <img src="/soportesoftware.png" alt="Soporte de Software" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">Soporte de Software</CardTitle>
                <CardDescription>
                  Instalación y configuración de sistemas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Instalación de sistemas operativos</li>
                  <li>• Configuración de software</li>
                  <li>• Migración de datos</li>
                  <li>• Soporte técnico remoto</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <img src="/seguridadinformatica.jpg" alt="Seguridad Informática" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">Seguridad Informática</CardTitle>
                <CardDescription>
                  Protección integral de sistemas y datos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Auditorías de seguridad</li>
                  <li>• Instalación de antivirus</li>
                  <li>• Configuración de firewalls</li>
                  <li>• Backup y recuperación</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <img src="/sistemadealarmas.jpg" alt="Sistemas de Alarmas" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">Sistemas de Alarmas</CardTitle>
                <CardDescription>
                  Instalación y mantenimiento de alarmas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Alarmas residenciales</li>
                  <li>• Sistemas comerciales</li>
                  <li>• Cámaras de seguridad</li>
                  <li>• Monitoreo 24/7</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <img src="/redesyconectividad.jpg" alt="Redes y Conectividad" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">Redes y Conectividad</CardTitle>
                <CardDescription>
                  Configuración de redes empresariales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Instalación de redes</li>
                  <li>• Configuración WiFi</li>
                  <li>• Servidores empresariales</li>
                  <li>• Optimización de conexiones</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <img src="/consultoriatecnologica.jpg" alt="Consultoría Tecnológica" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">Consultoría Tecnológica</CardTitle>
                <CardDescription>
                  Asesoramiento especializado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Análisis de necesidades</li>
                  <li>• Planificación tecnológica</li>
                  <li>• Capacitación de usuarios</li>
                  <li>• Soporte continuo</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/parallax2.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            willChange: 'transform',
            top: '-20%',
            left: '0',
            right: '0',
            height: '120%'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">¿Por qué elegir Pointech?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa especializada en brindar soluciones tecnológicas integrales, 
                con años de experiencia en el sector y un equipo de profesionales altamente capacitados.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-black">Experiencia Comprobada</h3>
                    <p className="text-gray-600">Años de experiencia en el sector tecnológico</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-black">Atención Personalizada</h3>
                    <p className="text-gray-600">Cada cliente recibe un servicio adaptado a sus necesidades</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-black">Soporte 24/7</h3>
                    <p className="text-gray-600">Disponibilidad completa para emergencias tecnológicas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-black">Precios Competitivos</h3>
                    <p className="text-gray-600">Tarifas justas y transparentes sin sorpresas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-300 mb-6">
                Democratizar el acceso a la tecnología, ofreciendo soluciones innovadoras 
                y accesibles que impulsen el crecimiento de nuestros clientes.
              </p>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-gray-300">
                Ser la empresa líder en soluciones tecnológicas, reconocida por nuestra 
                excelencia en el servicio y compromiso con la innovación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ¿Necesitas ayuda con tu tecnología? Estamos aquí para ayudarte
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img src="/icons8-teléfono-100.png" alt="Teléfono" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="text-lg font-semibold">Teléfono</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400">Lunes a Viernes: 8:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <img src="/icons8-correo-100.png" alt="Email" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-300">info@pointech.com</p>
                    <p className="text-sm text-gray-400">Respuesta en 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <img src="/icons8-marcador-100.png" alt="Ubicación" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="text-lg font-semibold">Ubicación</h4>
                    <p className="text-gray-300">Centro de la Ciudad</p>
                    <p className="text-sm text-gray-400">Servicio a domicilio disponible</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Formulario de Contacto</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-600 text-white mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-white mb-2 block">Servicio de interés</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border-gray-600 text-white rounded-md px-3 py-2 mt-1"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="hardware">Reparación de Hardware</option>
                    <option value="software">Soporte de Software</option>
                    <option value="security">Seguridad Informática</option>
                    <option value="alarms">Sistemas de Alarmas</option>
                    <option value="networks">Redes y Conectividad</option>
                    <option value="consulting">Consultoría Tecnológica</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-gray-800 border-gray-600 text-white mt-1"
                    placeholder="Describe tu necesidad..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-100"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
                
                {submitMessage && (
                  <div className={`p-3 rounded-md text-center ${
                    submitMessage.includes('Error') 
                      ? 'bg-red-900 text-red-100' 
                      : 'bg-green-900 text-green-100'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pointech</h3>
              <p className="text-gray-400">
                Soluciones Tecnológicas a tu Alcance. Tu socio de confianza en tecnología.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Reparación Hardware</li>
                <li>Soporte Software</li>
                <li>Seguridad Informática</li>
                <li>Sistemas de Alarmas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Contacto</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@pointech.com</li>
                <li>Centro de la Ciudad</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pointech. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
