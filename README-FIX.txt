PRISMA 7 POSTGRES ADAPTER FIX

1) ZIP içeriğini proje köküne klasör yapısını koruyarak kopyalayın.

2) Proje klasöründe:
   npm install @prisma/adapter-pg pg

3) DATABASE_URL .env içinde tanımlı olmalı.

4) Sonra:
   npx prisma generate
   npm run build

5) Build başarılı olursa:
   git add .
   git commit -m "Add Prisma 7 PostgreSQL adapter"
   git push origin main

6) Coolify'da Redeploy.
