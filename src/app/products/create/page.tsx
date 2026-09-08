"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryCard } from "@/components/products/CategoryCard";
import { Button } from "@/components/ui/button";

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

export default function ProductCreateCategoryPage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      alert("En az bir kategori seçin!");
      return;
    }
    // Kategorileri storage'a kaydet ve sonraki adıma geç
    localStorage.setItem("jetSwap_selected_categories", JSON.stringify(selectedCategories));
    router.push("/products/create/what-do-you-want");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hangi Ürünleri Takas Etmek İstersin?</h1>
        <p className="text-gray-600">
          JetSwap'te ürün ekledikten sonra hangi ürünlerle takas etmek istediğinizi seçin. Sistem size uygun eşleşmeleri bulacak.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={selectedCategories.includes(category.id)}
            onSelect={() => toggleCategory(category.id)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Button variant="outline" onClick={() => router.push("/")}>
          İptal Et
        </Button>
        <Button 
          size="lg"
          disabled={selectedCategories.length === 0}
          onClick={handleSubmit}
        >
          Devam Et →
        </Button>
      </div>

      {selectedCategories.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Seçilen kategoriler: {selectedCategories.join(", ")} ({selectedCategories.length})
          </p>
        </div>
      )}
    </div>
  );
}
