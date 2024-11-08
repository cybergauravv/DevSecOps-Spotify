FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install -g typescript
RUN npm ci
COPY . .
RUN npm run build
RUN tsc server.ts --outDir dist --module ES2020 --target ES2020 --moduleResolution node --noEmit false

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["node", "dist/server.js"]
