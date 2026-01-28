
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Code, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Download, 
  ChevronRight,
  Menu,
  X,
  Award,
  BarChart3,
  Building2,
  ArrowRight,
  FileCheck,
  Target,
  Globe,
  Zap,
  Star,
  Layers,
  PieChart as PieIcon,
  MousePointer2,
  Quote
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { 
  EXPERIENCES, 
  SKILLS, 
  EDUCATION, 
  CERTIFICATIONS, 
  STAT_CARDS,
  COUNTRIES,
  PROFESSIONAL_SUMMARY
} from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CATEGORY_COLORS: Record<string, string> = {
    Operations: '#10b981', // Emerald
    Strategy: '#6366f1',   // Indigo
    Procurement: '#0ea5e9', // Azure
    Technical: '#f59e0b',   // Amber
    'Soft Skills': '#f43f5e' // Rose
  };

  const skillsData = SKILLS.map(s => ({ 
    name: s.name, 
    proficiency: s.proficiency,
    fill: CATEGORY_COLORS[s.category] || '#4f46e5'
  }));

  const countryDistribution = COUNTRIES.map((c, i) => ({
    name: c.name,
    value: 1,
    fill: ['#4f46e5', '#10b981', '#0ea5e9', '#f59e0b', '#f43f5e'][i % 5]
  }));

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 via-blue-600 to-emerald-500 flex items-center justify-center text-white font-extrabold text-xl rounded-xl shadow-lg shadow-indigo-100 group-hover:rotate-6 transition-transform">
              MM
            </div>
            <div className="hidden sm:block">
              <p className="font-extrabold text-xl tracking-tighter leading-none text-slate-900">Mir Mustak</p>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mt-1">Senior Operations Executive</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['About', 'Summary', 'Experience', 'Expertise', 'Education'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="px-5 py-2 text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-all hover:bg-indigo-50/50 rounded-xl"
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="ml-6 px-7 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-black uppercase tracking-[0.15em] rounded-xl hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95 shadow-lg">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900 bg-white shadow-sm rounded-lg border border-slate-100">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-nav border-b border-slate-100 py-8 px-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top duration-300">
            {['About', 'Summary', 'Experience', 'Expertise', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block text-2xl font-black text-slate-900 hover:text-indigo-600 tracking-tighter">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-44 pb-32 px-6 lg:px-12 bg-white overflow-hidden">
        {/* Colorful Blobs */}
        <div className="floating-blob w-[500px] h-[500px] bg-indigo-200 -top-24 -right-24"></div>
        <div className="floating-blob w-[400px] h-[400px] bg-emerald-100 top-1/2 -left-32" style={{ animationDelay: '2s' }}></div>
        <div className="floating-blob w-[300px] h-[300px] bg-rose-100 bottom-0 right-1/4" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-indigo-50 border border-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                  <Star size={14} className="fill-indigo-600 animate-pulse" />
                  <span>24+ Years Operational Excellence</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight">
                  Driving Scale <br/>
                  <span className="gradient-text">Through Mastery</span> <br/>
                  & Precision.
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                  Accomplished Senior Operations & Procurement leader specializing in <span className="text-indigo-600 font-bold">multi-million dollar</span> project delivery and global supply chain orchestration.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 pt-4">
                <a href="#contact" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all flex items-center group shadow-2xl shadow-slate-200 uppercase tracking-widest text-[11px]">
                  Let's Talk <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:border-indigo-200 hover:text-indigo-600 transition-all flex items-center shadow-sm uppercase tracking-widest text-[11px]">
                  <Download className="mr-3 w-4 h-4 text-indigo-600" /> Executive CV
                </button>
              </div>
            </div>
            
            <div className="relative lg:block hidden">
              <div className="relative z-10 p-5 bg-white rounded-[4rem] shadow-2xl border border-slate-100 rotate-1">
                <div className="rounded-[3.5rem] overflow-hidden aspect-square border-[1px] border-slate-100">
                  <img 
                    src="https://picsum.photos/seed/mir-mustak-professional/1200/1200" 
                    alt="Mir Mustak" 
                    className="w-full h-full object-cover saturate-110"
                  />
                </div>
                {/* Overlay Badge */}
                <div className="absolute -bottom-12 -left-12 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 border border-emerald-50 flex items-center gap-5 card-colorful">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl">
                    <Target size={32} />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">Rs. 2.27 Cr</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Savings Delivered</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl -rotate-12 shadow-xl flex items-center justify-center text-white">
                   <Zap size={40} className="fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section id="summary" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Quote size={200} className="text-indigo-600" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px]">
              <div className="w-10 h-px bg-indigo-600"></div>
              Professional Statement
              <div className="w-10 h-px bg-indigo-600"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Executive <span className="text-indigo-600">Summary</span>
            </h2>
            <div className="relative p-10 lg:p-16 bg-white rounded-[3rem] shadow-2xl shadow-indigo-100/50 border border-indigo-50 group">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                <Quote size={24} fill="white" />
              </div>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium italic">
                {PROFESSIONAL_SUMMARY}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Vibrant Grid) */}
      <section className="bg-slate-50/50 py-32 border-y border-slate-100 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STAT_CARDS.map((stat, i) => {
              const isDark = i === 0;
              return (
                <div key={i} className={`p-10 rounded-[2.5rem] border ${isDark ? 'bg-slate-900 border-slate-900 shadow-2xl shadow-slate-200' : 'bg-white border-slate-100 shadow-sm'} card-colorful flex flex-col items-center text-center space-y-5`}>
                  <div className={`w-14 h-14 ${isDark ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/40' : 'bg-slate-50 text-slate-900'} flex items-center justify-center rounded-2xl`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className={`text-5xl font-black tracking-tighter mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                    <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Timeline (Colorful Accent) */}
      <section id="experience" className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-28 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase">Career Trajectory</h2>
            <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Two Decades of Impactful Leadership</p>
            <div className="w-20 h-2 bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-500 rounded-full mt-4"></div>
          </div>

          <div className="space-y-20 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block -translate-x-1/2"></div>
            
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const accentColor = isEven ? 'bg-indigo-600' : 'bg-emerald-500';
              const shadowColor = isEven ? 'shadow-indigo-100' : 'shadow-emerald-100';
              
              return (
                <div key={idx} className="relative group lg:grid lg:grid-cols-2 gap-20">
                  <div className={`lg:flex ${isEven ? 'lg:justify-end lg:text-right' : 'lg:order-2'}`}>
                    <div className="space-y-4 lg:max-w-md">
                       <span className={`px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest ${accentColor} shadow-lg ${shadowColor}`}>
                         {exp.period}
                       </span>
                       <h3 className="text-3xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                       <div className={`flex items-center gap-3 font-bold text-slate-500 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                         <Building2 size={18} className="text-slate-300" />
                         <span>{exp.company}</span>
                       </div>
                       <div className={`flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                         <MapPin size={16} className="text-slate-300" />
                         <span>{exp.location}</span>
                       </div>
                    </div>
                  </div>
                  
                  <div className={`mt-10 lg:mt-0 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 card-colorful ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex gap-5">
                          <div className={`mt-2.5 w-2 h-2 rounded-full flex-shrink-0 ${accentColor}`}></div>
                          <p className="text-lg text-slate-600 leading-relaxed font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                    {exp.achievements && (
                      <div className="mt-10 pt-10 border-t border-slate-200">
                        <div className={`flex items-center gap-3 mb-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                           <Award size={22} className="text-emerald-500" />
                           <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Key Achievements</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white shadow-sm border border-slate-100">
                              <Target size={18} className="text-indigo-400 mt-1 flex-shrink-0" />
                              <p className="text-sm font-bold text-slate-800 leading-tight">{ach}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Matrix (Prism Style) */}
      <section id="expertise" className="py-32 px-6 lg:px-12 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 bg-white p-14 rounded-[3.5rem] shadow-2xl shadow-indigo-50 border border-white">
              <div className="flex items-center justify-between mb-16">
                <div>
                   <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Technical Proficiency</h2>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Skill Performance Analysis</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl">
                  <BarChart3 size={24} />
                </div>
              </div>
              
              <div className="h-[520px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={180} 
                      tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc', radius: 15 }}
                      contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="proficiency" radius={[0, 15, 15, 0]} barSize={26}>
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div className="grid gap-5">
                {SKILLS.slice(0, 5).map((skill, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm card-colorful group">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black text-white px-4 py-1.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: CATEGORY_COLORS[skill.category] }}>
                        {skill.category}
                      </span>
                      <span className="text-2xl font-black text-slate-900">{skill.proficiency}%</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{skill.name}</h4>
                    <div className="w-full bg-slate-50 h-3 mt-6 rounded-full overflow-hidden">
                      <div className="h-full transition-all duration-1000 origin-left scale-x-105" style={{ width: `${skill.proficiency}%`, backgroundColor: CATEGORY_COLORS[skill.category] }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-900 p-14 text-white rounded-[3.5rem] relative group overflow-hidden shadow-2xl shadow-indigo-900/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <Layers className="text-emerald-400" size={28} />
                    <h3 className="text-xl font-black uppercase tracking-[0.2em]">Tech Infrastructure</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['SAP S/4HANA', 'GeM Portal Pro', 'Excel PowerQuery', 'BIS Certification', 'PLI Compliance', 'BEE Standards', 'ISO 9001/14001'].map((t, i) => (
                      <span key={i} className="px-5 py-3 bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.1em] rounded-xl hover:bg-white/20 transition-all cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Global Reach (Vivid) */}
      <section id="education" className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div className="space-y-20">
            <div>
              <div className="flex flex-col space-y-4 mb-16">
                 <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Academic Credentials</h2>
                 <div className="w-16 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div className="space-y-16">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="flex gap-10 group">
                    <div className="w-20 h-20 bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600 rounded-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm rotate-3 group-hover:rotate-0">
                      <GraduationCap size={40} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-3 block">{edu.period}</span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">{edu.degree}</h3>
                      <p className="text-slate-600 font-bold text-lg mb-4">{edu.institution}</p>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl inline-block">Major: {edu.field}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-20 border-t border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-12 uppercase tracking-widest flex items-center gap-4">
                 <Award className="text-emerald-500" /> Professional Certifications
               </h3>
               <div className="grid gap-6">
                 {CERTIFICATIONS.map((cert, i) => (
                   <div key={i} className="flex items-center gap-6 p-8 rounded-[2rem] border-2 border-slate-50 bg-white hover:border-indigo-100 hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600 rounded-2xl group-hover:rotate-12 transition-transform">
                       <FileCheck size={28} />
                     </div>
                     <div>
                       <h4 className="font-black text-slate-900 leading-tight text-xl group-hover:text-indigo-600 transition-colors">{cert.name}</h4>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{cert.institution} <span className="text-slate-200 mx-2">/</span> {cert.date}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col space-y-4 mb-16">
               <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Linguistic & Global Mapping</h2>
               <div className="w-16 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-indigo-500"></div>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 h-[320px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={countryDistribution}
                        innerRadius={90}
                        outerRadius={115}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                      >
                        {countryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', fontWeight: 'bold', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                     <Globe className="text-indigo-100 mb-2" size={40} />
                     <p className="text-4xl font-black text-slate-900 tracking-tighter">5+</p>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nations</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                   {COUNTRIES.map((c, i) => (
                     <div key={i} className="flex justify-between items-center p-4 rounded-2xl border border-slate-50 hover:bg-indigo-50 transition-colors group/item">
                       <span className="font-bold text-slate-700 group-hover/item:text-indigo-700">{c.name}</span>
                       <span className="text-[9px] font-black text-white bg-slate-900 px-3 py-1.5 rounded-full">{c.years}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-12 bg-slate-50 p-14 rounded-[3.5rem] border border-slate-100">
               {[
                 { name: 'Urdu', level: 'Native', color: 'bg-indigo-600' },
                 { name: 'English', level: 'Full Professional', color: 'bg-emerald-500' },
                 { name: 'Hindi', level: 'Full Professional', color: 'bg-azure-500' },
                 { name: 'Bengali', level: 'Fluent', color: 'bg-rose-500' },
                 { name: 'Nepali', level: 'Fluent', color: 'bg-amber-500' },
                 { name: 'Odiya', level: 'Professional', color: 'bg-slate-400' }
               ].map((lang, i) => (
                 <div key={i} className="space-y-4">
                   <div className="flex justify-between items-baseline">
                      <p className="text-2xl font-black text-slate-900 tracking-tighter">{lang.name}</p>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{lang.level}</p>
                   </div>
                   <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color} transition-all duration-1000`} style={{ width: lang.level.includes('Native') ? '100%' : lang.level.includes('Professional') ? '90%' : '75%' }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action / Contact Section (Rich Colorful Background) */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-slate-900 relative overflow-hidden">
        {/* Animated gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.15)_0,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1)_0,transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                Initiate <br/><span className="text-indigo-400">Collaboration.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-md leading-relaxed">
                Currently available for strategic leadership roles and high-impact operational mandates.
              </p>
            </div>
            
            <div className="space-y-10">
              {[
                { icon: <Mail size={24}/>, label: 'Enterprise Email', value: 'mmustak77@gmail.com', href: 'mailto:mmustak77@gmail.com', color: 'bg-indigo-600' },
                { icon: <Phone size={24}/>, label: 'Direct Line', value: '+91 8527293571', color: 'bg-emerald-600' },
                { icon: <Linkedin size={24}/>, label: 'LinkedIn Professional', value: 'Mir Mustak', href: 'https://linkedin.com/in/mir-mustak-69b75115/', color: 'bg-azure-600' },
                { icon: <MapPin size={24}/>, label: 'Operational Hub', value: 'New Delhi, India', color: 'bg-rose-500' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group cursor-pointer">
                  <div className={`w-16 h-16 ${item.color} flex items-center justify-center text-white rounded-2xl shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-6`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-2xl font-black text-white hover:text-indigo-400 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-2xl font-black text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/10 space-y-10 shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-500"></div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Identity</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-white placeholder-slate-600 font-bold" placeholder="Name" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Correspondence</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-white placeholder-slate-600 font-bold" placeholder="Email" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject of Mandate</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-white placeholder-slate-600 font-bold" placeholder="Opportunity Type" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Executive Summary</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-white placeholder-slate-600 font-bold resize-none" placeholder="Provide a brief overview..."></textarea>
            </div>
            <button type="button" className="w-full py-7 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl shadow-xl shadow-indigo-900/40 hover:shadow-indigo-500/40 hover:scale-[1.01] transition-all active:scale-95 group flex items-center justify-center">
               Transmit Inquiry <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer (Colorful Accents) */}
      <footer className="py-24 bg-slate-900 border-t border-white/5 px-6 text-center mt-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex items-center justify-center space-x-4">
             <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-black text-2xl rounded-2xl shadow-2xl">M</div>
             <span className="font-black text-4xl tracking-tighter text-white uppercase">Mir Mustak</span>
          </div>
          <div className="flex justify-center flex-wrap gap-12">
            {['Strategic Sourcing', 'Operational Excellence', 'Project Leadership', 'Vendor Mastery'].map((link) => (
              <span key={link} className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] hover:text-indigo-400 transition-colors cursor-default">{link}</span>
            ))}
          </div>
          <div className="space-y-4">
             <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em] leading-relaxed">
               © {new Date().getFullYear()} Mir Mustak | Senior Executive Operations Portfolio <br/>
               Global Leadership Mandate • Noida • Delhi • India
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
