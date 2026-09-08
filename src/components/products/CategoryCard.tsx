import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onSelect: () => void;
}

export function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 ${
        isSelected ? "border-indigo-600 ring-2 ring-indigo-100 shadow-lg" : "hover:shadow-md"
      }`}
    >
      <div className="p-4" onClick={onSelect}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{category.icon}</span>
          <h3 className="font-semibold text-lg">{category.name}</h3>
        </div>

        <div className="space-y-1">
          {category.subcategories.slice(0, 2).map((sub) => (
            <span key={sub} className="inline-block bg-gray-100 px-2 py-1 rounded text-xs text-gray-600 mr-1 mb-1">
              {sub}
            </span>
          ))}
          {category.subcategories.length > 2 && (
            <span className="text-xs text-gray-500">
              +{category.subcategories.length - 2} daha
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className={`text-sm font-medium ${isSelected ? "text-indigo-600" : "text-gray-500"}`}>
            {isSelected ? "Seçili" : "Seç"}
          </span>
          <Button size="sm" variant={isSelected ? "outline" : "secondary"} onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}>
            {isSelected ? "Seçimi Kaldır" : "Seç"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
