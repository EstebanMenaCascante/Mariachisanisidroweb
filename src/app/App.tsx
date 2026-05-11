import { useState } from 'react';
import {
  Menu, X, Music, MessageCircle, Calendar, Award, Users, Music2,
  Search, Youtube, Play, Send, CheckCircle2, Phone, Instagram, Facebook
} from 'lucide-react';

/* ─────────────────────────────────────────────
   IMAGE WITH FALLBACK (inlined)
───────────────────────────────────────────── */
const ERROR_IMG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [err, setErr] = useState(false);
  const { src, alt, style, className, ...rest } = props;
  if (err) return (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  );
  return <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setErr(true)} />;
}

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const translations = {
  es: {
    'nav.inicio': 'Inicio', 'nav.nosotros': 'Nosotros', 'nav.integrantes': 'Integrantes',
    'nav.repertorio': 'Repertorio', 'nav.galeria': 'Galería', 'nav.cotizar': 'Cotizar',
    'hero.headline': 'Mariachi profesional para momentos inolvidables',
    'hero.subtitle': 'Serenatas, bodas, cumpleaños y eventos especiales',
    'hero.cta.quote': 'Cotizar evento', 'hero.cta.whatsapp': 'Escribir por WhatsApp',
    'about.title': 'Nuestra Historia',
    'about.description': 'Con más de 15 años de experiencia, Mariachi San Isidro se ha convertido en uno de los grupos más solicitados de Costa Rica. Nuestra pasión por la música tradicional mexicana y nuestro compromiso con la excelencia nos han llevado a ser parte de miles de eventos inolvidables. Cada presentación es única y especial, porque entendemos que tu momento merece la mejor música.',
    'about.values.title': 'Nuestros Valores',
    'about.values.tradition': 'Tradición', 'about.values.tradition.desc': 'Respetamos y honramos la auténtica música de mariachi',
    'about.values.professionalism': 'Profesionalismo', 'about.values.professionalism.desc': 'Puntualidad, presentación impecable y actitud profesional',
    'about.values.quality': 'Calidad', 'about.values.quality.desc': 'Músicos experimentados con equipos de alta calidad',
    'members.title': 'Nuestros Integrantes', 'members.subtitle': 'Un equipo de músicos profesionales con años de experiencia',
    'repertoire.title': 'Nuestro Repertorio', 'repertoire.subtitle': 'Más de 300 canciones para tu evento especial',
    'repertoire.search': 'Buscar canción...', 'repertoire.filter.occasion': 'Por Ocasión',
    'repertoire.filter.genre': 'Por Género', 'repertoire.filter.mood': 'Por Ambiente',
    'repertoire.occasion.mama': 'Mamá', 'repertoire.occasion.papa': 'Papá',
    'repertoire.occasion.wedding': 'Bodas', 'repertoire.occasion.proposal': 'Propuestas',
    'repertoire.occasion.birthday': 'Cumpleaños', 'repertoire.occasion.party': 'Fiestas',
    'repertoire.genre.romantic': 'Románticas', 'repertoire.genre.rancheras': 'Rancheras',
    'repertoire.genre.cumbias': 'Cumbias', 'repertoire.genre.corridos': 'Corridos', 'repertoire.genre.boleros': 'Boleros',
    'repertoire.mood.happy': 'Alegre', 'repertoire.mood.sentimental': 'Sentimental', 'repertoire.mood.party': 'Fiesta',
    'repertoire.listen': 'Escuchar',
    'gallery.title': 'Galería', 'gallery.subtitle': 'Momentos especiales capturados',
    'quote.title': 'Cotizar Evento', 'quote.subtitle': 'Cuéntanos sobre tu evento y te enviaremos una cotización personalizada',
    'quote.name': 'Nombre', 'quote.phone': 'Teléfono / WhatsApp',
    'quote.date': 'Fecha del evento', 'quote.time': 'Hora', 'quote.ampm': 'AM/PM',
    'quote.ampm.am': 'AM', 'quote.ampm.pm': 'PM', 'quote.duration': 'Duración',
    'quote.duration.30min': '30 minutos', 'quote.duration.1hour': '1 hora',
    'quote.duration.2hours': '2 horas', 'quote.duration.3hours': '3 horas',
    'quote.location': 'Ubicación', 'quote.eventType': 'Tipo de evento',
    'quote.eventType.serenade': 'Serenata', 'quote.eventType.wedding': 'Boda',
    'quote.eventType.birthday': 'Cumpleaños', 'quote.eventType.proposal': 'Propuesta',
    'quote.eventType.party': 'Fiesta', 'quote.eventType.corporate': 'Evento corporativo', 'quote.eventType.other': 'Otro',
    'quote.comments': 'Comentarios adicionales', 'quote.submit': 'Enviar cotización',
    'quote.trust': 'Nos pondremos en contacto por WhatsApp para confirmar disponibilidad',
    'contact.title': 'Contacto', 'contact.subtitle': '¿Listo para hacer tu evento inolvidable?',
    'contact.whatsapp': 'Escríbenos por WhatsApp', 'contact.call': 'Llamar ahora',
    'footer.tagline': '"La música es el alma de la fiesta"',
    'footer.location': 'San José, Costa Rica', 'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'nav.inicio': 'Home', 'nav.nosotros': 'About Us', 'nav.integrantes': 'Band Members',
    'nav.repertorio': 'Repertoire', 'nav.galeria': 'Gallery', 'nav.cotizar': 'Get Quote',
    'hero.headline': 'Professional Mariachi for unforgettable moments',
    'hero.subtitle': 'Serenades, weddings, birthdays and special events',
    'hero.cta.quote': 'Get a Quote', 'hero.cta.whatsapp': 'Message on WhatsApp',
    'about.title': 'Our Story',
    'about.description': 'With over 15 years of experience, Mariachi San Isidro has become one of the most requested groups in Costa Rica. Our passion for traditional Mexican music and our commitment to excellence have led us to be part of thousands of unforgettable events. Each performance is unique and special, because we understand that your moment deserves the best music.',
    'about.values.title': 'Our Values',
    'about.values.tradition': 'Tradition', 'about.values.tradition.desc': 'We respect and honor authentic mariachi music',
    'about.values.professionalism': 'Professionalism', 'about.values.professionalism.desc': 'Punctuality, impeccable presentation and professional attitude',
    'about.values.quality': 'Quality', 'about.values.quality.desc': 'Experienced musicians with high-quality equipment',
    'members.title': 'Our Band Members', 'members.subtitle': 'A team of professional musicians with years of experience',
    'repertoire.title': 'Our Repertoire', 'repertoire.subtitle': 'Over 300 songs for your special event',
    'repertoire.search': 'Search song...', 'repertoire.filter.occasion': 'By Occasion',
    'repertoire.filter.genre': 'By Genre', 'repertoire.filter.mood': 'By Mood',
    'repertoire.occasion.mama': 'Mother', 'repertoire.occasion.papa': 'Father',
    'repertoire.occasion.wedding': 'Weddings', 'repertoire.occasion.proposal': 'Proposals',
    'repertoire.occasion.birthday': 'Birthdays', 'repertoire.occasion.party': 'Parties',
    'repertoire.genre.romantic': 'Romantic', 'repertoire.genre.rancheras': 'Rancheras',
    'repertoire.genre.cumbias': 'Cumbias', 'repertoire.genre.corridos': 'Corridos', 'repertoire.genre.boleros': 'Boleros',
    'repertoire.mood.happy': 'Happy', 'repertoire.mood.sentimental': 'Sentimental', 'repertoire.mood.party': 'Party',
    'repertoire.listen': 'Listen',
    'gallery.title': 'Gallery', 'gallery.subtitle': 'Special moments captured',
    'quote.title': 'Get a Quote', 'quote.subtitle': "Tell us about your event and we'll send you a personalized quote",
    'quote.name': 'Name', 'quote.phone': 'Phone / WhatsApp',
    'quote.date': 'Event date', 'quote.time': 'Time', 'quote.ampm': 'AM/PM',
    'quote.ampm.am': 'AM', 'quote.ampm.pm': 'PM', 'quote.duration': 'Duration',
    'quote.duration.30min': '30 minutes', 'quote.duration.1hour': '1 hour',
    'quote.duration.2hours': '2 hours', 'quote.duration.3hours': '3 hours',
    'quote.location': 'Location', 'quote.eventType': 'Event type',
    'quote.eventType.serenade': 'Serenade', 'quote.eventType.wedding': 'Wedding',
    'quote.eventType.birthday': 'Birthday', 'quote.eventType.proposal': 'Proposal',
    'quote.eventType.party': 'Party', 'quote.eventType.corporate': 'Corporate event', 'quote.eventType.other': 'Other',
    'quote.comments': 'Additional comments', 'quote.submit': 'Send Quote Request',
    'quote.trust': 'We will contact you via WhatsApp to confirm availability',
    'contact.title': 'Contact', 'contact.subtitle': 'Ready to make your event unforgettable?',
    'contact.whatsapp': 'Message us on WhatsApp', 'contact.call': 'Call now',
    'footer.tagline': '"Music is the soul of the party"',
    'footer.location': 'San José, Costa Rica', 'footer.rights': 'All rights reserved',
  },
} as const;

type Lang = 'es' | 'en';
type TKey = keyof typeof translations.es;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const members = [
  { name: 'Andrés Mora', instrument: 'Vihuela', image: 'https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=600&q=80' },
  { name: 'Gustavo Blanco', instrument: 'Guitarrón', image: 'https://images.unsplash.com/photo-1712709895347-21b980921fe2?w=600&q=80' },
  { name: 'Cristian Hidalgo', instrument: 'Guitarra', image: 'https://images.unsplash.com/photo-1759899520708-b036689715c0?w=600&q=80' },
  { name: 'Gerardo Barrantes', instrument: 'Acordeón', image: 'https://images.unsplash.com/photo-1585639557135-abe9aaf7c925?w=600&q=80' },
  { name: 'Esteban Mena', instrument: 'Trompeta', image: 'https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=600&q=80' },
  { name: 'Sebastian Monge', instrument: 'Trompeta', image: 'https://images.unsplash.com/photo-1712709895347-21b980921fe2?w=600&q=80' },
];

const songs = [
  { title: 'Cielito Lindo', tags: ['romantic', 'party'], occasion: 'party', genre: 'rancheras', mood: 'happy' },
  { title: 'Las Mañanitas', tags: ['birthday'], occasion: 'birthday', genre: 'traditional', mood: 'happy' },
  { title: 'Bésame Mucho', tags: ['romantic', 'wedding'], occasion: 'wedding', genre: 'boleros', mood: 'sentimental' },
  { title: 'El Rey', tags: ['party'], occasion: 'party', genre: 'rancheras', mood: 'party' },
  { title: 'La Bamba', tags: ['party'], occasion: 'party', genre: 'cumbias', mood: 'party' },
  { title: 'Amor Eterno', tags: ['romantic'], occasion: 'mama', genre: 'romantic', mood: 'sentimental' },
  { title: 'Si Nos Dejan', tags: ['romantic', 'wedding'], occasion: 'wedding', genre: 'romantic', mood: 'sentimental' },
  { title: 'Volver Volver', tags: ['party'], occasion: 'party', genre: 'rancheras', mood: 'happy' },
  { title: 'Hermoso Cariño', tags: ['romantic', 'proposal'], occasion: 'proposal', genre: 'romantic', mood: 'sentimental' },
  { title: 'México Lindo y Querido', tags: ['party'], occasion: 'party', genre: 'rancheras', mood: 'happy' },
  { title: 'Cucurrucucú Paloma', tags: ['romantic'], occasion: 'wedding', genre: 'boleros', mood: 'sentimental' },
  { title: 'La Bikina', tags: ['party'], occasion: 'party', genre: 'rancheras', mood: 'party' },
  { title: 'Te Quiero Dijiste', tags: ['romantic', 'proposal'], occasion: 'proposal', genre: 'boleros', mood: 'sentimental' },
  { title: 'El Mariachi Loco', tags: ['party'], occasion: 'party', genre: 'corridos', mood: 'party' },
  { title: 'Contigo Aprendí', tags: ['romantic', 'wedding'], occasion: 'wedding', genre: 'romantic', mood: 'sentimental' },
  { title: 'Adiós Mi Chaparrita', tags: ['party'], occasion: 'party', genre: 'cumbias', mood: 'happy' },
  { title: 'El Son de la Negra', tags: ['party'], occasion: 'party', genre: 'rancheras', mood: 'party' },
  { title: 'Para Morir Iguales', tags: ['romantic'], occasion: 'wedding', genre: 'romantic', mood: 'sentimental' },
];

const gallery = [
  { type: 'image', url: 'https://images.unsplash.com/photo-1769230364868-a3c7588ed628?w=800&q=80', title: 'Presentación tradicional' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1768243356319-490d4c19773c?w=800&q=80', title: 'Presentación en vivo' },
  { type: 'video', url: 'https://images.unsplash.com/photo-1662392228425-92ba6109dc8f?w=800&q=80', title: 'Video del grupo' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1460556890169-1b7b050615ec?w=800&q=80', title: 'Boda especial' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1585639557135-abe9aaf7c925?w=800&q=80', title: 'Detalle de guitarra' },
  { type: 'video', url: 'https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=800&q=80', title: 'Video en serenata' },
];

const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
const WA = 'https://wa.me/50685676230';
const inputCls = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent';
const selectCls = inputCls;

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>('es');
  const t = (k: TKey) => translations[lang][k] ?? k;

  /* Header state */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Repertoire state */
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  /* Gallery state */
  const [lightbox, setLightbox] = useState<number | null>(null);

  /* Quote form state */
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', ampm: 'AM', duration: '1hour', location: '', eventType: 'serenade', comments: '' });
  const [sent, setSent] = useState(false);

  const toggleFilter = (val: string) => setActiveFilter(prev => prev === val ? null : val);
  const filtered = songs.filter(s => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = !activeFilter || s.occasion === activeFilter || s.genre === activeFilter || s.mood === activeFilter;
    return matchSearch && matchFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `¡Hola! Me gustaría cotizar un evento:\n\nNombre: ${form.name}\nTeléfono: ${form.phone}\nFecha: ${form.date}\nHora: ${form.time} ${form.ampm}\nDuración: ${form.duration}\nUbicación: ${form.location}\nTipo de evento: ${form.eventType}\nComentarios: ${form.comments}`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const chip = (val: string) =>
    `px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${activeFilter === val ? 'bg-[#D4AF37] text-black' : 'bg-white/10 hover:bg-white/20 text-white'}`;

  return (
    <div className="min-h-screen">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-['Playfair_Display'] font-bold text-white">Mariachi San Isidro</h1>
                <p className="text-xs text-[#D4AF37]">Costa Rica</p>
              </div>
            </div>
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {(['inicio','nosotros','integrantes','repertorio','galeria'] as const).map(id => (
                <button key={id} onClick={() => scroll(id)} className="text-white hover:text-[#D4AF37] transition-colors">
                  {t(`nav.${id}` as TKey)}
                </button>
              ))}
              <button onClick={() => scroll('cotizar')} className="bg-[#D4AF37] hover:bg-[#FFD700] text-black px-6 py-2 rounded-full transition-colors">
                {t('nav.cotizar')}
              </button>
            </nav>
            {/* Lang + hamburger */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1.5">
                {(['es','en'] as Lang[]).map((l, i) => (
                  <span key={l} className="flex items-center gap-1">
                    {i > 0 && <span className="text-white/30">|</span>}
                    <button onClick={() => setLang(l)} className={`px-2 py-1 rounded-full text-sm transition-colors ${lang === l ? 'bg-[#D4AF37] text-black' : 'text-white hover:text-[#D4AF37]'}`}>
                      {l.toUpperCase()}
                    </button>
                  </span>
                ))}
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden py-4 border-t border-[#D4AF37]/20">
              <nav className="flex flex-col gap-4">
                {(['inicio','nosotros','integrantes','repertorio','galeria'] as const).map(id => (
                  <button key={id} onClick={() => { scroll(id); setMenuOpen(false); }} className="text-white hover:text-[#D4AF37] transition-colors text-left">
                    {t(`nav.${id}` as TKey)}
                  </button>
                ))}
                <button onClick={() => { scroll('cotizar'); setMenuOpen(false); }} className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-center">
                  {t('nav.cotizar')}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Img src="https://images.unsplash.com/photo-1769230364868-a3c7588ed628?w=1920&q=80" alt="Mariachi band" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-xl sm:text-2xl text-[#D4AF37] mb-12">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scroll('cotizar')} className="bg-[#D4AF37] hover:bg-[#FFD700] text-black px-8 py-4 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <Calendar className="w-5 h-5" /><span className="font-medium">{t('hero.cta.quote')}</span>
            </button>
            <button onClick={() => window.open(WA, '_blank')} className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <MessageCircle className="w-5 h-5" /><span className="font-medium">{t('hero.cta.whatsapp')}</span>
            </button>
          </div>
          <div className="mt-16 flex justify-center gap-2">
            {[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />)}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-black mb-4">{t('about.title')}</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Img src="https://images.unsplash.com/photo-1662392228425-92ba6109dc8f?w=800&q=80" alt="Mariachi group" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.description')}</p>
          </div>
          <h3 className="font-['Playfair_Display'] text-3xl font-bold text-center text-black mb-12">{t('about.values.title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Music2, key: 'tradition' },
              { icon: Users, key: 'professionalism' },
              { icon: Award, key: 'quality' },
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="font-['Playfair_Display'] text-xl font-bold text-black mb-2">{t(`about.values.${key}` as TKey)}</h4>
                <p className="text-gray-600">{t(`about.values.${key}.desc` as TKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAND MEMBERS ── */}
      <section id="integrantes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-black mb-4">{t('members.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">{t('members.subtitle')}</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((m, i) => (
              <div key={m.name} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <Img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-1">{m.name}</h3>
                  <p className="text-[#D4AF37]">{m.instrument}</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-black font-bold">{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPERTOIRE ── */}
      <section id="repertorio" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold mb-4">{t('repertoire.title')}</h2>
            <p className="text-lg text-gray-400 mb-4">{t('repertoire.subtitle')}</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder={t('repertoire.search')} value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors" />
            </div>
          </div>
          {/* Filters */}
          <div className="space-y-6 mb-12">
            {[
              { label: t('repertoire.filter.occasion'), items: ['mama','papa','wedding','proposal','birthday','party'], prefix: 'repertoire.occasion.' },
              { label: t('repertoire.filter.genre'),    items: ['romantic','rancheras','cumbias','corridos','boleros'], prefix: 'repertoire.genre.' },
              { label: t('repertoire.filter.mood'),     items: ['happy','sentimental','party'], prefix: 'repertoire.mood.' },
            ].map(group => (
              <div key={group.label}>
                <h3 className="text-sm font-medium text-gray-400 mb-3">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(val => (
                    <button key={val} onClick={() => toggleFilter(val)} className={chip(val)}>
                      {t((group.prefix + val) as TKey)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Songs */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(song => (
                <div key={song.title} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group">
                  <h4 className="font-medium text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{song.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {song.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-400">{tag}</span>)}
                  </div>
                  <button className="flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors">
                    <Youtube className="w-4 h-4" />{t('repertoire.listen')}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12"><p className="text-gray-400 text-lg">No se encontraron canciones</p></div>
          )}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="galeria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-black mb-4">{t('gallery.title')}</h2>
            <p className="text-lg text-gray-600 mb-4">{t('gallery.subtitle')}</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <div key={item.title} onClick={() => setLightbox(i)} className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all">
                <Img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4"><p className="text-white font-medium">{item.title}</p></div>
                </div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#D4AF37]/90 rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-colors">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"><X className="w-8 h-8" /></button>
            <div className="max-w-5xl max-h-[90vh] w-full">
              <Img src={gallery[lightbox].url} alt={gallery[lightbox].title} className="w-full h-full object-contain" />
              <p className="text-white text-center mt-4 text-lg">{gallery[lightbox].title}</p>
            </div>
          </div>
        )}
      </section>

      {/* ── QUOTE ── */}
      <section id="cotizar" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-black mb-4">{t('quote.title')}</h2>
            <p className="text-lg text-gray-600 mb-4">{t('quote.subtitle')}</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.name')} *</label>
                <input type="text" name="name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.phone')} *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputCls} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.date')} *</label>
                  <input type="date" name="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} className={inputCls} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.time')} *</label>
                    <input type="time" name="time" required value={form.time} onChange={e => setForm({...form, time: e.target.value})} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.ampm')} *</label>
                    <select name="ampm" value={form.ampm} onChange={e => setForm({...form, ampm: e.target.value})} className={selectCls}>
                      <option value="AM">{t('quote.ampm.am')}</option>
                      <option value="PM">{t('quote.ampm.pm')}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.duration')} *</label>
                <select name="duration" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className={selectCls}>
                  <option value="30min">{t('quote.duration.30min')}</option>
                  <option value="1hour">{t('quote.duration.1hour')}</option>
                  <option value="2hours">{t('quote.duration.2hours')}</option>
                  <option value="3hours">{t('quote.duration.3hours')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.location')} *</label>
                <input type="text" name="location" required value={form.location} onChange={e => setForm({...form, location: e.target.value})} className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.eventType')} *</label>
                <select name="eventType" value={form.eventType} onChange={e => setForm({...form, eventType: e.target.value})} className={selectCls}>
                  {['serenade','wedding','birthday','proposal','party','corporate','other'].map(v => (
                    <option key={v} value={v}>{t(`quote.eventType.${v}` as TKey)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('quote.comments')}</label>
                <textarea name="comments" rows={4} value={form.comments} onChange={e => setForm({...form, comments: e.target.value})} className={`${inputCls} resize-none`} />
              </div>
              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#FFD700] text-black font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-lg">
                {sent ? <><CheckCircle2 className="w-5 h-5" /><span>¡Enviado!</span></> : <><Send className="w-5 h-5" /><span>{t('quote.submit')}</span></>}
              </button>
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2 text-center">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />{t('quote.trust')}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-gray-400 mb-4">{t('contact.subtitle')}</p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#25D366] hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">{t('contact.whatsapp')}</h3>
                <p className="text-[#D4AF37]">+506 8567-6230</p>
              </div>
            </a>
            <a href="tel:+50685676230" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">{t('contact.call')}</h3>
                <p className="text-[#D4AF37]">+506 8567-6230</p>
              </div>
            </a>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-medium mb-6">Síguenos en redes sociales</h3>
            <div className="flex justify-center gap-6">
              {[
                { href: 'https://instagram.com', Icon: Instagram },
                { href: 'https://facebook.com', Icon: Facebook },
                { href: 'https://youtube.com', Icon: Youtube },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 transition-all">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-white py-12 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center">
                <Music className="w-7 h-7 text-black" />
              </div>
              <div className="text-left">
                <h3 className="font-['Playfair_Display'] text-xl font-bold">Mariachi San Isidro</h3>
                <p className="text-sm text-[#D4AF37]">{t('footer.location')}</p>
              </div>
            </div>
            <p className="font-['Playfair_Display'] text-lg italic text-gray-400 mb-6">{t('footer.tagline')}</p>
            <div className="border-t border-white/10 pt-6 w-full">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mariachi San Isidro. {t('footer.rights')}.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}