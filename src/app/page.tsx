"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-700 to-purple-800 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
            Para Yok. Takas Var.
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95 max-w-2xl mx-auto">
            Elindeki ürünleri para kullanmadan başkalarıyla takas et. 
            JetSwap ile global bir takas ağına katılın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/products/create">Takasa Başla</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#how-it-works">Nasıl Çalışır?</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center border-t border-white/20 pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5K+</p>
              <p className="text-sm md:text-base opacity-90">Aktif Kullanıcı</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">25K+</p>
              <p className="text-sm md:text-base opacity-90">Ürün Eşleşmesi</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">85%</p>
              <p className="text-sm md:text-base opacity-90">Takas Başarı Oranı</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            4 Adımda Takas Et
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Ekle",
                desc: "Takas etmek istediğin ürünü birkaç dakikada ekle",
                icon: "📦"
              },
              {
                step: "2",
                title: "Belirt",
                desc: "Ne istediğini söyle - JetMatch sana eşleşsin",
                icon: "🎯"
              },
              {
                step: "3",
                title: "Eşleş",
                desc: "Otomatik uygun takas buluyoruz",
                icon: "⚡"
              },
              {
                step: "4",
                title: "Takas Et",
                desc: "Para kullanmadan değişimi tamamla",
                icon: "🤝"
              }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 md:text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sana Uygun Takasları JetMatch Bulsun
          </h2>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed">
            Sistem, sahip olduğun ürünler ve isteklerine göre otomatik olarak 
            en uygun takas eşleşmelerini bulur.
          </p>

          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto mb-8 transform hover:scale-[1.02] transition-transform">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="font-bold text-xl text-gray-900">iPhone 15 Pro</p>
                <p className="text-sm text-gray-500">Senin ürünün</p>
              </div>
              <span className="text-purple-600 font-bold text-3xl">↓</span>
              <div className="text-right">
                <p className="font-bold text-xl text-gray-900">MacBook Air M3</p>
                <p className="text-sm text-gray-500">İstediğin ürün</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full inline-block font-bold text-xl shadow-lg">
              %94 Uyum
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="/products/create">İlk Ürünümü Ekle</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Popüler Kategoriler</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Elektronik", icon: "📱" },
              { name: "Moda", icon: "👕" },
              { name: "Ev & Yaşam", icon: "🏠" },
              { name: "Hobi", icon: "🎮" },
              { name: "Araçlar", icon: "🚗" },
              { name: "Koleksiyon", icon: "💎" },
              { name: "Kitaplar", icon: "📚" },
              { name: "Spor", icon: "⚽" }
            ].map((cat) => (
              <Link 
                key={cat.name} 
                href="/products"
                className="text-center p-6 border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer group"
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">{cat.name}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/categories">Tüm Kategoriler</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Takas Etmenin Zamanı Geldi!
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Binlerce kullanıcı seni bekliyor. Hemen katılarak kullanmadığın ürünleri 
            istediğin ürünlerle değiştir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/products/create">Ürün Ekle - Başla</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#features">Daha Fazlası</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Takas Ağı",
                desc: "Sadece Türkiye değil, dünya genelinde binlerce kullanıcıyla eşleşme şansı.",
                icon: "🌐"
              },
              {
                title: "Akıllı Eşleştirme",
                desc: "JetMatch algoritması ile sana en uygun takasları otomatik buluyoruz.",
                icon: "🧠"
              },
              {
                title: "Güvenli Takas",
                desc: "İletişim bilgileri güvenli şekilde paylaşılır ve takas süreci şeffaf olur.",
                icon: "🔒"
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-5xl block mb-6">{feature.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t pt-12 pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">JetSwap</h3>
              <p className="text-sm text-gray-600">
                Para Yok. Takas Var.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/products" className="hover:text-indigo-600">Ürünler</Link></li>
                <li><Link href="/match" className="hover:text-indigo-600">JetMatch</Link></li>
                <li><Link href="/categories" className="hover:text-indigo-600">Kategoriler</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Hakkında</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-indigo-600">Nasıl Çalışır?</Link></li>
                <li><Link href="/security" className="hover:text-indigo-600">Güvenlik</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-600">Kullanım Şartları</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Bizi Takip Et</h3>
              <p className="text-sm text-gray-600">
                Daha fazla bilgi için bizi takip edin.
              </p>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} JetSwap. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
