"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              J
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-indigo-700 transition-colors">
              JetSwap
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md transition-colors"
            >
              Ana Sayfa
            </Link>
            
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md transition-colors"
            >
              Ürünler
            </Link>

            <Link 
              href="/categories" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md transition-colors"
            >
              Kategoriler
            </Link>

            <Link 
              href="/match" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md transition-colors"
            >
              JetMatch
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Giriş</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Üye Ol</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/products" 
              className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Ürünler
            </Link>
            <Link 
              href="/categories" 
              className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Kategoriler
            </Link>
            <Link 
              href="/match" 
              className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              JetMatch
            </Link>
            <div className="pt-4 flex gap-2">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/login">Giriş</Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link href="/register">Üye Ol</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
