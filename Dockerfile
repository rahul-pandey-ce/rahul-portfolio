# --- Multi-Stage Build ---

# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app

# Enable legacy peer deps if needed and install
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
# Copy build output to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port (default nginx is 80)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
