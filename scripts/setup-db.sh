#!/bin/bash

# PostgreSQL Database Setup Script for Takas Sistemi
# Bu script Docker Desktop çalıştırıldıktan sonra çalıştırılabilir

set -e

echo "=== Takas Sistemi - Database Setup ==="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
  echo "❌ Error: .env.local dosyası bulunamadı!"
  exit 1
fi

# Load environment variables
export $(grep -v '^#' .env.local | xargs)

echo "✅ Environment loaded"
echo "DATABASE_URL: ${DATABASE_URL:0:30}..."
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "❌ Docker Desktop başlatılmamış!"
  echo "Lütfen Docker Desktop'u başlatın ve tekrar deneyin."
  exit 1
fi

echo "✅ Docker çalışıyor"

# Check if postgres container is running
if ! docker ps | grep -q takas-postgres; then
  echo "❌ takas-postgres container bulunamadı!"
  echo "Lütfen önce 'docker-compose up -d' komutu ile containerları başlatın."
  exit 1
fi

echo "✅ PostgreSQL container çalışıyor"

# Run Prisma migrations
echo ""
echo "🚀 Prisma migrationlar çalıştırılıyor..."
npx prisma migrate deploy

if [ $? -eq 0 ]; then
  echo ""
  echo "🎉 Database setup tamamlandı!"
  echo "Uygulama artık çalıştırılabilir: npm run dev"
else
  echo ""
  echo "❌ Migration başarısız!"
  exit 1
fi
