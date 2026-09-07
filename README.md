# Takas Sistemi 🔄

**Paranızı kullanmadan ürünlerinizi takas edin. Tamamen ücretsiz, güvenilir ve global bir takas platformu.**

Bu proje, React + Next.js + Prisma + PostgreSQL teknolojileri ile geliştirilmiş modern bir takas sistemi uygulamasıdır.

---

## 🌟 Özellikler

- 🔒 **Para trafiği yok** - Sadece ürünlerinizi takas edin
- 👤 **Kullanıcı Profilleri** - Her üye kendi profilini yönetebilir
- 📦 **Ürün Yönetimi** - Ürün ekleme, düzenleme, fotoğraf yükleme
- 🎯 **Akıllı Öneri Sistemi** - İlgili ürünlerinizi bulmanız için öneriler
- 💬 **Teklif & Mesajlaşma** - Takas teklifi gönderme ve iletişim kurma
- 🌍 **Global Kapsam** - Türkiye'den bağımsız dünya geneli kullanım

---

## 🛠️ Teknoloji Stack

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React + Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL 15 |
| ORM | Prisma |
| Caching | Redis |
| Deployment | Docker + Coolify |

---

## 🚀 Başlangıç Rehberi

### Gereksinimler

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js v20+](https://nodejs.org/)

### 1. Yerel Geliştirme (Docker ile)

```bash
# Docker container'larını başlat
docker-compose up -d

# PostgreSQL'in hazır olduğundan emin olun (birkaç saniye bekleyin)
sleep 5

# Next.js uygulamasını başlatın
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

### 2. Prisma Kullanımı

Veritabanı şemasını oluşturma:
```bash
npx prisma migrate dev --name init
```

Veri tabanı görselleştirme:
```bash
npx prisma studio
```

---

## 📂 Proje Yapısı

```
takas-system/
├── app/                 # Next.js App Router Sayfaları
├── prisma/
│   └── schema.prisma    # Veritabanı şeması
├── docker-compose.yml   # Docker servisleri
├── Dockerfile           # Uygulama container'ı
└── .env.local          # Environment değişkenleri
```

---

## 📊 Veritabanı Şeması

Ana modeller:
- `User` - Kullanıcı bilgileri
- `Product` - Ürün tanımı
- `TradeOffer` - Takas teklifi
- `Message` - Mesajlar
- `UserPreference` - Kullanıcı tercihleri (hangi kategorilerde takas yapabilecek)

---

## 🚧 Geliştirme Aşamaları

| Aşama | Durum |
|-------|-------|
| Proje şablonu | ✅ Tamamlandı |
| Next.js setup | ✅ |
| Prisma + PostgreSQL entegrasyonu | ✅ |
| Docker yapılandırması | ✅ |
| Kullanıcı kaydı/girişi | 🔄 Hazırlanıyor |
| Ürün ekleme formu | ⏳ Planlanıyor |
| Takas teklif sistemi | ⏳ Planlanıyor |

---

## 📝 Git Repository

Bu proje GitHub'da [`selim/takas-system`](https://github.com/selim/takas-system) adresinde bulunacaktır.

---

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not:** Bu proje geliştirme aşamasındadır. Tüm özellikler henüz tamamlanmamıştır.
