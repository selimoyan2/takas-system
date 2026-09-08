import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function EmailInput({ value, onChange, error }: EmailInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">E-posta Adresi</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="ornek@email.com"
        value={value}
        onChange={onChange}
        required
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
