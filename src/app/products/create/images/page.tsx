"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductCreateImagesPage() {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Load previous step data
  React.useEffect(() => {
    const savedDetails = localStorage.getItem("jetSwap_product_details");
    if (!savedDetails) {
      router.push("/products/create/details");
    }
  }, [router]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      
      // Limit to 6 images
      const filesToAdd = newFiles.slice(0, Math.max(0, 6 - images.length));
      
      if (filesToAdd.length === 0) {
        alert("Maksimum 6 fotoğraf ekleyebilirsiniz.");
        return;
      }

      const updatedImages = [...images, ...filesToAdd];
      setImages(updatedImages);

      // Create previews
      const newPreviewUrls = filesToAdd.map((file) => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);

    // Revoke old preview URL
    if (previewUrls[index]) {
      URL.revokeObjectURL(previewUrls[index]);
    }
    
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (images.length === 0) {
      alert("En az bir fotoğraf ekleyin!");
      return;
    }

    localStorage.setItem("jetSwap_product_images", JSON.stringify(images.map(f => f.name)));
    router.push("/products/create/location");
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
                  step <= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
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
          <div className="h-full bg-indigo-600 w-2/3" />
        </div>
      </div>

      <Card className="p-8 shadow-xl border-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ürün Fotoğrafları</h1>
        <p className="text-gray-600 mb-8">En az 1, maksimum 6 fotoğraf yükleyin</p>

        {/* Upload Area */}
        <div className="mb-8">
          <label className="block font-bold text-gray-900 mb-4">Ürün Fotoğrafları *</label>
          
          <div 
            className="border-3 border-dashed border-indigo-300 rounded-2xl p-12 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />

            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <p className="font-medium text-gray-900 mb-2">
              {images.length === 0 
                ? "Fotoğraf yüklemek için tıklayın" 
                : `${6 - images.length} fotoğraf daha eklenebilir`}
            </p>
            <p className="text-sm text-gray-500">JPG, PNG formatında, max 5MB her biri</p>
          </div>

          {/* Preview Grid */}
          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {previewUrls.map((url, index) => (
                <Card key={index} className="relative group overflow-hidden rounded-xl shadow-sm">
                  <img 
                    src={url} 
                    alt={`Preview ${index}`} 
                    className="w-full h-32 object-cover"
                  />
                  
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-3 py-1">
                      Ana Fotoğraf
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-4 flex items-center justify-between bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2 text-sm font-medium text-yellow-800">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Ana görsel ilk sırada olacak
              </div>
              {images.length < 6 && (
                <button
                  type="button"
                  onClick={() => document.getElementById("file-input")?.click()}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  + Fotoğraf Ekle
                </button>
              )}
            </div>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => router.push("/products/create/details")}
            className="flex-1"
          >
            ← Geri
          </Button>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            disabled={images.length === 0}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            Devam Et →
          </Button>
        </div>
      </Card>

      {/* Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          "İyi aydınlatılmış ortamda çekin",
          "Ürünü birden fazla açıdan gösterin",
          "Önemli özellikleri vurgulayın"
        ].map((tip, i) => (
          <Card key={i} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <p className="text-sm text-gray-700">{tip}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
