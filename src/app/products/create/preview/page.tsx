"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCreatePreviewPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    // Load saved data
    const categories = localStorage.getItem("jetSwap_selected_categories");
    const wants = localStorage.getItem("jetSwap_wants");

    if (!categories || !wants) {
      router.push("/products/create");
      return;
    }

    setFormData({
      categories: JSON.parse(categories),
      wants: JSON.parse(wants)
    });
  }, [router]);

  const handleSubmit = () => {
    // Burada gerçek API çağrısı yapılacak
    console.log("Form submitted:", formData);
    
    // LocalStorage'dan temizle
    localStorage.removeItem("jetSwap_selected_categories");
    localStorage.removeItem("jetSwap_wants");

    router.push("/");
  };

  if (!formData) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Ürününüzü Kontrol Edin</h1>

      <div className="space-y-6">
        {/* Categories */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📦</span> Kategoriler
          </h2>
          <div className="flex flex-wrap gap-2">
            {formData.categories.map((cat: string) => (
              <Badge key={cat} variant="secondary" className="px-3 py-1 text-sm">
                {cat}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Wants */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">❤️</span> Ne İstersin?
          </h2>
          
          {formData.wants.selectedProductIds.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Seçilen ürünler:</p>
              <ul className="space-y-1">
                <li>iPhone 15 Pro</li>
                <li>MacBook Air M3</li>
                {/* Burada ürün ID'lerden gerçek isimler çekilebilir */}
              </ul>
            </div>
          )}

          {formData.wants.customWants && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Özel istekler:</p>
              <p className="font-medium">{formData.wants.customWants}</p>
            </div>
          )}

          {formData.wants.openToOtherOffers && (
            <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded">
              <span className="text-green-600">✓</span>
              <span className="font-medium text-sm">Diğer tekliflere açık</span>
            </div>
          )}
        </Card>

        {/* JetMatch Preview */}
        <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span> JetMatch Sizi Bekliyor!
          </h2>
          <p className="mb-4 text-gray-700">
            Ürününüz yayınlandığında JetMatch otomatik olarak size uygun takas eşleşmelerini bulacak.
          </p>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm font-medium">Örnek: "iPhone 15 Pro + MacBook Air M3" arayanları buluyoruz...</p>
          </div>
        </Card>

        {/* Product Photo Upload (Placeholder) */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Fotoğraflar</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer bg-gray-50">
            <p className="font-medium">Ürün fotoğraflarını buraya yükleyin (minimum 1, maksimum 6)</p>
            <p className="text-sm text-gray-500 mt-2">JPG, PNG formatında, max 5MB</p>
          </div>
        </Card>

        {/* Location */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Konum Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Ülke</label>
              <select className="w-full p-2 border rounded-md bg-white">
                <option>Türkiye</option>
                <option>Almanya</option>
                <option>Fransa</option>
                <option>Diğer...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Şehir</label>
              <input type="text" placeholder="Örn: İstanbul" className="w-full p-2 border rounded-md" />
            </div>
          </div>
        </Card>

        {/* Submit */}
        <Button 
          size="lg"
          onClick={handleSubmit}
          className="w-full text-lg py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        >
          ✨ TAKASA AÇ
        </Button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Takasa açtıktan sonra JetMatch hemen çalışmaya başlayacak!
        </p>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={() => router.push("/products/create/what-do-you-want")}>
          ← Geri
        </Button>
      </div>
    </div>
  );
}
