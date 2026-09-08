"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const conditions = [
  { value: "new", label: "Sıfır" },
  { value: "like-new", label: "Sıfıra yakın" },
  { value: "excellent", label: "Çok iyi" },
  { value: "good", label: "İyi" },
  { value: "used", label: "Kullanılmış" },
];

export default function ProductCreatePreviewPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    // Load all saved data
    const categories = localStorage.getItem("jetSwap_selected_categories");
    const wants = localStorage.getItem("jetSwap_wants");
    const details = localStorage.getItem("jetSwap_product_details");
    const images = localStorage.getItem("jetSwap_product_images");
    const location = localStorage.getItem("jetSwap_product_location");

    if (!categories || !wants || !details) {
      router.push("/products/create/details");
      return;
    }

    setFormData({
      categories: JSON.parse(categories),
      wants: JSON.parse(wants),
      details: JSON.parse(details),
      images: images ? JSON.parse(images) : [],
      location: location ? JSON.parse(location) : null,
    });
  }, [router]);

  const handleSubmit = () => {
    if (!formData.details.title || !formData.details.condition || !formData.location?.city) {
      alert("Lütfen tüm gerekli alanları doldurun!");
      return;
    }

    // Create final product object
    const productData = {
      title: formData.details.title,
      description: formData.details.description,
      category: formData.details.category,
      subcategory: formData.details.subcategory,
      condition: formData.details.condition,
      year: formData.details.year,
      images: formData.images,
      country: formData.location?.country || "Turkey",
      city: formData.location?.city,
      region: formData.location?.region,
      deliveryMethod: localStorage.getItem("jetSwap_delivery_method") || "face-to-face",
    };

    console.log("Submitting product:", productData);
    
    // Simulate API call
    fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Ürün başarıyla eklendi! 🎉");
          
          // Clear storage
          localStorage.removeItem("jetSwap_selected_categories");
          localStorage.removeItem("jetSwap_wants");
          localStorage.removeItem("jetSwap_product_details");
          localStorage.removeItem("jetSwap_product_images");
          localStorage.removeItem("jetSwap_product_location");
          
          router.push("/");
        } else {
          alert("Ürün eklenirken bir hata oluştu.");
        }
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Bağlantı hatası. Lütfen tekrar deneyin.");
      });
  };

  if (!formData) return null;

  const getConditionLabel = (value: string) => 
    conditions.find(c => c.value === value)?.label || value;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step <= 3 ? "bg-indigo-600 text-white" : "bg-green-500 text-white"
                }`}
              >
                {step}
              </div>
              <span className="text-xs font-medium">
                {step === 1 && "Kategori"}
                {step === 2 && "Detaylar"}
                {step === 3 && "Fotoğraf"}
                {step === 4 && "Konum"}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 w-full" />
        </div>
      </div>

      <Card className="p-8 shadow-xl border-0 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">İlanı Kontrol Et</h1>
        <p className="text-gray-600 mb-8">Takasa açmadan önce tüm bilgileri kontrol edin</p>

        {/* Product Title */}
        {formData.details.title && (
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{formData.details.title}</h2>
          </div>
        )}

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {formData.details.category && (
            <Card className="p-3 bg-indigo-50 border-indigo-200">
              <span className="text-xs text-gray-600 uppercase font-bold">Kategori</span>
              <div className="font-semibold text-gray-900 mt-1">{formData.details.category}</div>
            </Card>
          )}
          
          {formData.details.subcategory && (
            <Card className="p-3 bg-purple-50 border-purple-200">
              <span className="text-xs text-gray-600 uppercase font-bold">Alt Kategori</span>
              <div className="font-semibold text-gray-900 mt-1">{formData.details.subcategory}</div>
            </Card>
          )}

          {formData.details.condition && (
            <Card className="p-3 bg-green-50 border-green-200">
              <span className="text-xs text-gray-600 uppercase font-bold">Durum</span>
              <div className="font-semibold text-gray-900 mt-1">{getConditionLabel(formData.details.condition)}</div>
            </Card>
          )}

          {formData.details.year && (
            <Card className="p-3 bg-blue-50 border-blue-200">
              <span className="text-xs text-gray-600 uppercase font-bold">Yıl</span>
              <div className="font-semibold text-gray-900 mt-1">{formData.details.year}</div>
            </Card>
          )}
        </div>

        {/* Description */}
        {formData.details.description && (
          <Card className="p-4 mb-6 bg-gray-50 border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Açıklama</h3>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{formData.details.description}</p>
          </Card>
        )}

        {/* Images */}
        {formData.images.length > 0 && (
          <Card className="p-4 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Fotoğraflar ({formData.images.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {formData.images.slice(0, 6).map((img: string, i: number) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden">
                  <span className="text-sm font-medium">Fotoğraf {i + 1}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Location */}
        {formData.location && (
          <Card className="p-4 mb-6 bg-green-50 border-green-200">
            <h3 className="font-bold text-gray-900 mb-3">📍 Konum Bilgileri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
              {formData.location.country && (
                <div><span className="font-medium text-gray-900">Ülke:</span> {formData.location.country}</div>
              )}
              {formData.location.city && (
                <div><span className="font-medium text-gray-900">Şehir:</span> {formData.location.city}</div>
              )}
              {formData.location.region && (
                <div><span className="font-medium text-gray-900">İlçe:</span> {formData.location.region}</div>
              )}
            </div>
          </Card>
        )}

        {/* Delivery Method */}
        <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
          <h3 className="font-bold text-gray-900 mb-3">🚚 Teslimat Yöntemi</h3>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {localStorage.getItem("jetSwap_delivery_method") === "face-to-face" && "Yüz Yüze Takas"}
            {localStorage.getItem("jetSwap_delivery_method") === "courier" && "Kargo ile Takas"}
            {localStorage.getItem("jetSwap_delivery_method") === "both" && "Her İkisi de"}
          </div>
        </Card>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => router.push("/products/create/location")}
            className="flex-1"
          >
            ← Düzenle
          </Button>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          >
            <span className="mr-2">✅</span>
            TAKASA AÇ
          </Button>
        </div>
      </Card>

      {/* Success Preview */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Hazır!</h3>
        <p className="text-sm text-gray-700">
          Verileri kontrol ettikten sonra "TAKASA AÇ" butonuna basın.
          JetMatch hemen çalışmaya başlayacak!
        </p>
      </Card>
    </div>
  );
}
