#!/bin/bash
set -e

CONTAINER_NAME="backend_eld"

echo " >>> Starting containers with Docker Compose..."
docker-compose up -d --build

echo " >>> Checking if container '$CONTAINER_NAME' is running..."
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
  echo " >>> Container '${CONTAINER_NAME}' is not running. Check docker-compose.yml or container name."
  exit 1
fi

echo " >>> Waiting for MySQL to be ready..."
until docker exec -it $CONTAINER_NAME mysqladmin ping -h mysql_eld --silent; do
  echo " >>> Still waiting for MySQL..."
  sleep 2
done

echo " >>> Running database migrations..."
docker exec -it $CONTAINER_NAME npx prisma migrate deploy

echo " >>> Seeding initial data..."
docker exec -it $CONTAINER_NAME npx prisma db seed

echo " >>> Local environment is up and ready!"