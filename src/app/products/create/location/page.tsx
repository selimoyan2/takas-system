"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductCreateLocationPage() {
  const router = useRouter();
  
  const [country, setCountry] = useState("Turkey");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");

  // Load previous step data
  React.useEffect(() => {
    const savedDetails = localStorage.getItem("jetSwap_product_details");
    const savedImages = localStorage.getItem("jetSwap_product_images");
    
    if (!savedDetails || !savedImages) {
      router.push("/products/create/details");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    localStorage.setItem("jetSwap_product_location", JSON.stringify({
      country,
      city,
      region,
      address,
    }));

    router.push("/products/create/preview");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step === 3 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
              <span className="text-xs font-medium">
                {step === 1 && "Kategori"}
                {step === 2 && "Fotoğraflar"}
                {step === 3 && "Konum"}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600 w-full" />
        </div>
      </div>

      <Card className="p-8 shadow-xl border-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Konum Bilgileri</h1>
        <p className="text-gray-600 mb-8">Takas için konumunuzu belirtin (Tam adres gösterilmez)</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Country */}
          <div>
            <Label htmlFor="country" className="font-bold text-gray-900">
              Ülke * 
            </Label>
            <Input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-2 py-3 bg-gray-50"
              disabled
            />
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city" className="font-bold text-gray-900">
              Şehir * 
            </Label>
            <Input
              id="city"
              placeholder="Örn: İstanbul, Ankara, İzmir..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-2 py-3 text-lg bg-gray-50"
            />
          </div>

          {/* Region */}
          <div>
            <Label htmlFor="region" className="font-bold text-gray-900">
              İlçe / Bölge (Opsiyonel)
            </Label>
            <Input
              id="region"
              placeholder="Örn: Kadıköy, Beşiktaş..."
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-2 py-3 bg-gray-50"
            />
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="font-bold text-gray-900">
              Tam Adres (Opsiyonel - Gösterilmez)
            </Label>
            <p className="text-sm text-gray-500 mb-2">
              Takas için içeri girerken kullanılır, kullanıcıya gösterilmez.
            </p>
            <Input
              id="address"
              placeholder="Örn: Mahallesi Sokağı No..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-2 py-3 bg-gray-50"
            />
          </div>

          {/* Delivery Options */}
          <div>
            <Label className="font-bold text-gray-900">Teslimat Yöntemi</Label>
            <p className="text-sm text-gray-600 mb-4">
              Ürünü nasıl teslim almak istersiniz?
            </p>
            
            <div className="space-y-3">
              {[
                { id: "face-to-face", label: "Yüz Yüze Takas", desc: "Birlikte buluşup ürünleri takas ederiz" },
                { id: "courier", label: "Kargo ile Takas", desc: "Karşıya kargo ile gönderirim" },
                { id: "both", label: "Her ikisi de", desc: "Yüz yüze veya kargo isteyebilir" }
              ].map((option) => (
                <Card
                  key={option.id}
                  className="cursor-pointer hover:border-indigo-400 transition-all"
                  onClick={() => {
                    localStorage.setItem("jetSwap_delivery_method", option.id);
                  }}
                >
                  <div className="p-4 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">{option.label}</h4>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.push("/products/create/images")}
              className="flex-1"
            >
              ← Geri
            </Button>
            <Button 
              type="submit" 
              disabled={!city}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <span className="mr-2">✅</span>
              Takasa Aç
            </Button>
          </div>
        </form>

        {/* Privacy Notice */}
        <Card className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-3.692 2.016M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-gray-700">
              <span className="font-bold">Gizlilik:</span> Tam adresiniz sadece takas sırasında görülür. 
              İlan üzerinde sadece şehir gösterilir.
            </p>
          </div>
        </Card>
      </Card>
    </div>
  );
}
