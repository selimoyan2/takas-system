# Takas Sistemi - İlk Kurulum Rehberi 🚀

Bu belge, proje kurulumunu ve ilk çalıştırma adımlarını açıklar.

---

## 🔍 Özet

- **Next.js + Prisma + PostgreSQL** tabanlı modern bir takas platformu
- Docker ile kolay deployment (Coolify entegrasyonu da desteklenir)
- Para trafiği yok, sadece ürün takası

---

## 🛠️ Kurulum Adımları

### 1. Gereksinimler

| Tool | Versiyon | İndirme Linki |
|------|----------|---------------|
| Node.js | v20+ | https://nodejs.org/ |
| Docker | v24+ | https://docs.docker.com/get-docker/ |
| Git | Latest | https://git-scm.com/ |

---

### 2. Projeyi Klonla/Virgin Start

Eğer bir repo varsa:
```bash
git clone https://github.com/selim/takas-system.git
cd takas-system
```

Aksi halde bu dizindeyiz:
```
D:/Projeler/bionic/Takas/takas-system/
```

---

### 3. Bağımlılıkları Kur

```bash
npm install
```

> **Not:** Bu işlem Prisma ve diğer bağımlılıkları kurar.

---

### 4. Environment Değişkenlerini Ayarla

`.env.local` dosyası zaten oluşturulmuştu:

```
DATABASE_URL="postgresql://takasuser:takaspassword@localhost:5432/takasdb?schema=public"
REDIS_URL="redis://localhost:6379"

NEXTAUTH_SECRET="your-secret-key-change-in-production-use-a-strong-random-string-here"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Not:** Docker ile çalıştırırken `DATABASE_URL` otomatik atanır, bu dosya sadece lokal development için.

---

### 5. Docker Container'larını Başlat

```bash
docker-compose up -d
```

Bu komut şu container'ları başlatır:
- ✅ PostgreSQL (veritabanı)
- ✅ Redis (önbellek)
- ⏳ Next.js uygulaması (sonra `npm run dev` ile başlatılır)

---

### 6. Veritabanını Kur

```bash
npx prisma migrate deploy
```

> Bu komut tüm migration'ları çalıştırır ve veritabanını oluşturur.

---

### 7. Development Sunucusunu Başlat

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılacaktır.

---

## 🧪 Test Et

1. **Next.js sayfası** görünür → ✅ Çalışıyor
2. PostgreSQL bağlantısı kontrolü için:
   ```bash
   docker exec -it takas-postgres psql -U takasuser -d takasdb
   ```
3. Redis bağlantısı:
   ```bash
   docker exec -it takas-redis redis-cli ping
   # Çıktı: PONG
   ```

---

## 🐛 Sorun Giderme

### Port çakışması
```bash
# Docker container'ları durdur
docker-compose down

# Port 5432 kullanımda mı kontrol et (Windows)
netstat -ano | findstr :5432
```

### Prisma migration hatası
```bash
npx prisma migrate reset --force
npx prisma migrate deploy
```

---

## 📚 Sonraki Adımlar

- [ ] Kullanıcı kaydı/girişi implementasyonu (Auth.js veya NextAuth)
- [ ] Ürün ekleme formu
- [ ] Takas teklif sistemi
- [ ] Öneri motoru algoritması

---

## 🎯 Coolify Deployment İçin Hazır

Bu proje, Coolify'de "Docker Compose" tipinde deployment için tamamen hazır:

1. Coolify'de yeni resource ekle → "Git Repository"
2. Repo URL'si: `https://github.com/selim/takas-system`
3. Build strategy olarak **Docker Compose** seç
4. `docker-compose.yml` otomatik okunur
5. Environment variables'leri Coolify dashboard'tan ayarla:
   - `DATABASE_URL` (Coolify'in sağladığı PostgreSQL connection string)
   - `REDIS_URL` (Coolify'in sağladığı Redis connection string)
   - `NEXTAUTH_SECRET`
6. Deploy!

---

**Not:** Bu rehber sürekli güncellenecektir.
