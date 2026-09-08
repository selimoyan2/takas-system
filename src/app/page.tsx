"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Modern Creative Design */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            style={{ opacity, scale }}
            className="text-center"
          >
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">JetSwap v1.0 Live</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2">
                Para Yok.
              </span>
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent pb-2 animate-gradient-x">
                Takas Var.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Elindeki ürünleri para kullanmadan başkalarıyla takas et. 
              <br />
              <span className="font-semibold text-indigo-600">Global takas ağına</span> katılın.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="px-8 py-6 text-lg rounded-2xl shadow-xl shadow-indigo-500/30 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0">
                  <span className="mr-2">🚀</span>
                  Takasa Başla
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-2xl border-gray-300 hover:bg-white/50 transition-colors"
                  asChild
                >
                  <Link href="#how-it-works">
                    <span className="mr-2">💡</span>
                    Nasıl Çalışır?
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Stats Strip */}
            <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-gray-200 pt-12">
              {[
                { label: "Aktif Kullanıcı", value: "5K+", icon: "👥" },
                { label: "Ürün Eşleşmesi", value: "25K+", icon: "🤝" },
                { label: "Takas Başarı Oranı", value: "85%", icon: "📊" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xl">{stat.icon}</span>
                    <p className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-8 hidden lg:block animate-float-slow">
              <div className="text-6xl">📱</div>
            </div>
            <div className="absolute bottom-1/3 right-8 hidden lg:block animate-float-delayed">
              <div className="text-6xl">📦</div>
            </div>
          </motion.div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] data-[ready=true]:animate-fade-in" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-50 to-transparent opacity-50 pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              4 Adımda Takas Et
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Ekle",
                desc: "Takas etmek istediğin ürünü birkaç dakikada ekle",
                icon: "📦",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "2",
                title: "Belirt",
                desc: "Ne istediğini söyle - JetMatch sana eşleşsin",
                icon: "🎯",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "3",
                title: "Eşleş",
                desc: "Otomatik uygun takas buluyoruz",
                icon: "⚡",
                color: "from-amber-500 to-orange-500"
              },
              {
                step: "4",
                title: "Takas Et",
                desc: "Para kullanmadan değişimi tamamla",
                icon: "🤝",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Step Badge */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                  {/* Arrow */}
                  <div className={`absolute top-8 right-8 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Match Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Sana Uygun Takasları JetMatch Bulsun
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sistem, sahip olduğun ürünler ve isteklerine göre otomatik olarak 
              en uygun takas eşleşmelerini bulur.
            </p>
          </motion.div>

          {/* Match Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Card Header */}
              <div className="px-8 py-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">JetMatch Önerisi</h3>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold shadow-lg animate-pulse">
                  %94 Uyum
                </span>
              </div>

              {/* Swap Visualization */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  
                  {/* Left Side - Your Product */}
                  <div className="flex-1 text-center group">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-8xl">📱</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">iPhone 15 Pro</h4>
                    <p className="text-lg text-gray-600">Senin ürünün</p>
                  </div>

                  {/* Swap Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-indigo-500 z-10">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Side - Desired Product */}
                  <div className="flex-1 text-center group">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-8xl">💻</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">MacBook Air M3</h4>
                    <p className="text-lg text-gray-600">Almak istediğin ürün</p>
                  </div>

                </div>

                {/* Match Details */}
                <div className="mt-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Neden Eşleşti?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "iPhone arayanlar arasında MacBook sahibi",
                      "MacBook isteyenler arasında iPhone 15 Pro sahibi",
                      "Aynı kategori tercihleri (Elektronik)"
                    ].map((reason, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <p className="text-sm text-gray-700">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                  <Button size="lg" className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-bold shadow-xl shadow-purple-500/30">
                    <span className="mr-2">🔥</span>
                    HEMEN TEKLİF YAP
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Match Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { label: "Güçlü Eşleşmeler", value: "%90+", desc: "Karşılıklı ilgi" },
              { label: "Orta Eşleşmeler", value: "%75-89", desc: "Potansiyel uyum" },
              { label: "Zayıf Eşleşmeler", value: "%50-74", desc: "Farklı ihtiyaçlar" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="font-bold text-gray-900 mt-2">{stat.label}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Popüler Kategoriler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Binlerce ürün kategorisinden istediğin şeyi bul veya takas et
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Elektronik", icon: "📱", gradient: "from-blue-500 to-cyan-500" },
              { name: "Moda", icon: "👕", gradient: "from-pink-500 to-rose-500" },
              { name: "Ev & Yaşam", icon: "🏠", gradient: "from-amber-500 to-orange-500" },
              { name: "Hobi", icon: "🎮", gradient: "from-purple-500 to-indigo-500" },
              { name: "Araçlar", icon: "🚗", gradient: "from-gray-700 to-gray-900" },
              { name: "Koleksiyon", icon: "💎", gradient: "from-emerald-500 to-teal-500" },
              { name: "Kitaplar", icon: "📚", gradient: "from-red-500 to-pink-500" },
              { name: "Spor", icon: "⚽", gradient: "from-green-500 to-emerald-600" }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className={`relative overflow-hidden rounded-2xl p-8 h-full min-h-[200px] bg-gradient-to-br ${cat.gradient} text-white shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  {/* Icon */}
                  <span className="text-6xl absolute top-4 right-4 opacity-20 group-hover:scale-150 transition-transform duration-500">{cat.icon}</span>
                  
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{cat.name}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <span>2.4K+ ürün</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="px-10 py-4 rounded-full border-gray-300 hover:bg-gray-50 transition-colors">
              Tüm Kategorileri Gör
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600 rounded-[50%] blur-[120px] opacity-30" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Takas Etmenin Zamanı <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Geldi!</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Binlerce kullanıcı seni bekliyor. Hemen katılarak kullanmadığın ürünleri 
              istediğin ürünlerle değiştir. Para yok, sadece takas!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="px-12 py-6 rounded-full text-lg font-bold shadow-2xl shadow-purple-500/40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700">
                  <span className="mr-2">🚀</span>
                  Ürün Ekle - Başla
                </Button>
              </motion.div>

              <div className="flex items-center gap-3 text-sm font-medium text-gray-500 bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm border border-gray-200">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ücretsiz ve güvenli
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-500 mb-4">Binlerce mutlu kullanıcı</p>
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md transform hover:scale-110 transition-transform">
                    <img src={`https://i.pravatar.cc/40?img=${i}`} alt="User" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              JetSwap'in Özel Özellikleri
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Takas Ağı",
                desc: "Sadece Türkiye değil, dünya genelinde binlerce kullanıcıyla eşleşme şansı. Konum ve mesafe ayarlarını özelleştir.",
                icon: "🌐"
              },
              {
                title: "Akıllı Eşleştirme",
                desc: "JetMatch algoritması ile sana en uygun takasları otomatik buluyoruz. Karşılıklı ilgiye göre skorlar veriyoruz.",
                icon: "🧠"
              },
              {
                title: "Güvenli Takas",
                desc: "İletişim bilgileri güvenli şekilde paylaşılır ve takas süreci şeffaf olur. JetTrust güven puanı sistemi ile koruma.",
                icon: "🔒"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-4xl shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t pt-16 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-indigo-600 font-black">J</span>etSwap
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Para Yok. Takas Var.
                <br />
                Global takas ağına katılmak için bugün başla.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/products" className="hover:text-indigo-600 transition-colors">Ürünler</Link></li>
                <li><Link href="/match" className="hover:text-indigo-600 transition-colors">JetMatch</Link></li>
                <li><Link href="/categories" className="hover:text-indigo-600 transition-colors">Kategoriler</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Hakkında</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-indigo-600 transition-colors">Nasıl Çalışır?</Link></li>
                <li><Link href="/security" className="hover:text-indigo-600 transition-colors">Güvenlik</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Kullanım Şartları</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Bizi Takip Et</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Daha fazla bilgi için sosyal medya hesaplarımızı takip edin.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} JetSwap. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-500">Sistem Aktif</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
