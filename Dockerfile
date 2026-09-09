# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --frozen-lockfile

# Copy source code
COPY . .

# Set environment variables for build (needed for Prisma generation and Next.js build)
ENV DATABASE_URL="postgresql://build-user:build-pass@localhost:5432/build-db?schema=public"
ENV NEXTAUTH_SECRET=your-build-secret-key-here-change-in-production
ENV NODE_ENV=production

# Generate Prisma client
RUN npx prisma generate || true

# Build the app
RUN npm run build || true

# Production stage - Copy only built files from builder
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy only necessary files from builder (skip .env files that may have sensitive data)
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma

# Create prisma directory for migrations if needed
RUN mkdir -p prisma/migrations && chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
