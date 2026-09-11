"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const categories = [
  {
    id: "electronics",
    name: "Elektronik",
    icon: "📱",
    subcategories: ["Telefon", "Laptop", "Tablet", "Kulaklık"],
  },
  {
    id: "fashion",
    name: "Moda",
    icon: "👕",
    subcategories: ["Giyim", "Ayakkabı", "Çanta", "Saat"],
  },
  {
    id: "home",
    name: "Ev & Yaşam",
    icon: "🏠",
    subcategories: ["Mobilya", "Dekorasyon", "Elektrikli Aletler"],
  },
  {
    id: "hobbies",
    name: "Hobi & Eğlence",
    icon: "🎮",
    subcategories: ["Oyun Konsolu", "Kitap", "Müzik Enstrümanı", "Koleksiyon"],
  },
  {
    id: "vehicles",
    name: "Araçlar",
    icon: "🚗",
    subcategories: ["Otomobil", "Motorsiklet", "Bisiklet", "Evciltmaci"],
  },
];

const conditions = [
  { value: "new", label: "Sıfır", description: "Hiç kullanılmadı" },
  { value: "like-new", label: "Sıfıra yakın", description: "Paket açılmış, kutusu var" },
  { value: "excellent", label: "Çok iyi", description: "Neredeyse sıfır gibi" },
  { value: "good", label: "İyi", description: "Normal kullanım izleri var" },
  { value: "used", label: "Kullanılmış", description: "Görünür aşınma var" },
];

export default function ProductCreateDetailsPage() {
  const router = useRouter();
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [condition, setCondition] = useState("");
  const [year, setYear] = useState("");

  // Load previous steps
  useEffect(() => {
    const savedCategories = localStorage.getItem("jetSwap_selected_categories");
    if (!savedCategories) {
      router.push("/products/create");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage for now
    localStorage.setItem("jetSwap_product_details", JSON.stringify({
      title,
      description,
      category: selectedCategory,
      subcategory: selectedSubcategory,
      condition,
      year,
    }));
    
    router.push("/products/create/images");
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
                  step === 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
              <span className="text-xs font-medium">
                {step === 1 && "Kategori"}
                {step === 2 && "Detaylar"}
                {step === 3 && "Konum"}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600 w-1/3" />
        </div>
      </div>

      <Card className="p-8 shadow-xl border-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ürün Detayı</h1>
        <p className="text-gray-600 mb-8">Ürününüzü detaylı bir şekilde tanımlayın</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Title */}
          <div>
            <Label htmlFor="title" className="font-bold text-gray-900">
              Ürün Adı *
            </Label>
            <Input
              id="title"
              placeholder="Örn: iPhone 15 Pro 256GB"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 text-lg py-3 bg-gray-50"
              autoComplete="off"
            />
          </div>

          {/* Category Selection */}
          <div>
            <Label className="font-bold text-gray-900">Kategori Seçin *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              {categories.map((cat) => (
                <Card
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSubcategory("");
                  }}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === cat.id 
                      ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-100" 
                      : "hover:border-gray-400"
                  }`}
                >
                  <div className="p-4">
                    <span className="text-3xl block mb-2">{cat.icon}</span>
                    <h3 className="font-bold text-lg">{cat.name}</h3>
                    {selectedCategory === cat.id && (
                      <div className="mt-2 space-y-1">
                        <p className="text-xs font-medium text-gray-600">Alt kategoriler:</p>
                        <select
                          value={selectedSubcategory}
                          onChange={(e) => setSelectedSubcategory(e.target.value)}
                          className="w-full p-2 border rounded bg-white"
                        >
                          <option value="">Seçiniz...</option>
                          {cat.subcategories.map((sub) => (
                            <option key={sub} value={sub}>{sub}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Condition Selection */}
          <div>
            <Label className="font-bold text-gray-900">Ürün Durumu * </Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              {conditions.map((cond) => (
                <Card
                  key={cond.value}
                  onClick={() => setCondition(cond.value)}
                  className={`cursor-pointer transition-all ${
                    condition === cond.value
                      ? "border-green-600 bg-green-50 ring-2 ring-green-100"
                      : "hover:border-gray-400"
                  }`}
                >
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{cond.label}</h3>
                    <p className="text-sm text-gray-600 mt-1">{cond.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Year Input */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="year">Yıl (Opsiyonel)</Label>
              <Input
                id="year"
                type="number"
                placeholder="Örn: 2024"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="font-bold text-gray-900">
              Açıklama *
            </Label>
            <Textarea
              id="description"
              placeholder="Ürünle ilgili detaylı bilgi verin (garanti, eksikler, kusurlar vb.)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-2 min-h-[150px] bg-gray-50 text-lg p-4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.push("/products/create")}
              className="flex-1"
            >
              ← Geri
            </Button>
            <Button 
              type="submit" 
              disabled={!title || !selectedCategory || !selectedSubcategory || !condition}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Devam Et →
            </Button>
          </div>
        </form>
      </Card>

      {/* Quick Tips */}
      <Card className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h3 className="font-bold text-gray-900 mb-2">💡 İpucu</h3>
        <p className="text-sm text-gray-700">
          Ürün adında marka, model ve önemli özellikler (renk, depolama) belirtin. 
          Örn: "Samsung Galaxy S24 Ultra 512GB Siyah"
        </p>
      </Card>
    </div>
  );
}
