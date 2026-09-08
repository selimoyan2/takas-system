"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-600 to-purple-700 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Para Yok. Takas Var.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Elindeki ürünleri para kullanmadan başkalarıyla takas et. 
            JetSwap ile global bir takas ağına katılın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products/create">Takasa Başla</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#how-it-works">Nasıl Çalışır?</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-1">5K+</p>
              <p className="text-sm opacity-80">Aktif Kullanıcı</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">25K+</p>
              <p className="text-sm opacity-80">Ürün Eşleşmesi</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">85%</p>
              <p className="text-sm opacity-80">Takas Başarı Oranı</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
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
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sana Uygun Takasları JetMatch Bulsun
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Sistem, sahip olduğun ürünler ve isteklerine göre otomatik olarak 
            en uygun takas eşleşmelerini bulur.
          </p>

          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">iPhone 15 Pro</p>
                <p className="text-sm text-gray-500">Senin ürünün</p>
              </div>
              <span className="text-purple-600 font-bold text-xl">↓</span>
              <div className="text-right">
                <p className="font-semibold">MacBook Air M3</p>
                <p className="text-sm text-gray-500">İstediğin ürün</p>
              </div>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block font-bold">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Popüler Kategoriler</h2>
          
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
              <div key={cat.name} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-4xl block mb-3">{cat.icon}</span>
                <h3 className="font-semibold">{cat.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/categories">Tüm Kategoriler</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Takas Etmenin Zamanı Geldi!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Binlerce kullanıcı seni bekliyor. Hemen katılarak kullanmadığın ürünleri 
            istediğin ürünlerle değiştir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <div key={feature.title} className="text-center p-6">
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
