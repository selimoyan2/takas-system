"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  { id: "iphone-15", name: "iPhone 15 Pro", category: "Telefon" },
  { id: "macbook-m3", name: "MacBook Air M3", category: "Laptop" },
  { id: "sony-a7", name: "Sony A7 III", category: "Fotoğraf Makinesi" },
  { id: "playstation-5", name: "PlayStation 5", category: "Oyun Konsolu" },
  { id: "trek-bike", name: "Trek Mountain Bike", category: "Bisiklet" },
];

export default function ProductCreateWhatDoYouWantPage() {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [openToOtherOffers, setOpenToOtherOffers] = useState(false);
  const [customWants, setCustomWants] = useState<string>("");

  // Load previous step data
  useEffect(() => {
    const savedCategories = localStorage.getItem("jetSwap_selected_categories");
    if (!savedCategories) {
      router.push("/products/create");
    }
  }, [router]);

  const toggleProduct = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const handleSubmit = () => {
    // Save preferences
    localStorage.setItem("jetSwap_wants", JSON.stringify({
      selectedProductIds: selectedProducts,
      openToOtherOffers,
      customWants
    }));
    
    router.push("/products/create/preview");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bu Ürün Karşılığında Ne İstersin?
        </h1>
        <p className="text-gray-600">
          JetSwap'ın özel özelliği! Hangi ürünleri takas almak istediğinizi seçin. Sistem size uygun eşleşmeleri bulacak.
        </p>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="text-xl font-semibold mb-4">Popüler Ürünlerden Seç</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => toggleProduct(product.id)}
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                selectedProducts.includes(product.id)
                  ? "bg-indigo-50 border border-indigo-200"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              <div>
                <span className="font-medium">{product.name}</span>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              <div
                className={`h-6 w-6 rounded-full border flex items-center justify-center ${
                  selectedProducts.includes(product.id)
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-gray-300"
                }`}
              >
                {selectedProducts.includes(product.id) && (
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="text-xl font-semibold mb-4">Özel İstekler</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Başka ürünler de ekleyebilirsiniz (virgül ile ayırın):
            </label>
            <textarea
              value={customWants}
              onChange={(e) => setCustomWants(e.target.value)}
              placeholder="Örn: MacBook, Drone, Fotoğraf makinesi..."
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
            />
          </div>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={openToOtherOffers}
              onChange={(e) => setOpenToOtherOffers(e.target.checked)}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">
              Diğeri tekliflere de açığım - Sistem bana farklı ürünlerle de eşleşsin
            </span>
          </label>
        </div>
      </Card>

      <div className="flex justify-between gap-4">
        <Button variant="outline" onClick={() => router.push("/products/create")}>
          ← Geri
        </Button>
        <Button 
          size="lg"
          disabled={selectedProducts.length === 0 && !openToOtherOffers}
          onClick={handleSubmit}
        >
          Sonraki Adım →
        </Button>
      </div>
    </div>
  );
}
