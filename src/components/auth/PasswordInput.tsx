import type { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function PasswordInput({ value, onChange, error }: PasswordInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Şifre</Label>
      <Input id="password" name="password" type="password" placeholder="••••••••" value={value} onChange={onChange} required />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
