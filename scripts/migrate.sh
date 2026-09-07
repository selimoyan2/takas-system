#!/bin/bash

# Prisma migration runner script
# Bu script Docker container içinde çalıştırılabilir

set -e

echo "Starting database migration..."

npx prisma migrate deploy

echo "Migration completed successfully!"
