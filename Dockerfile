FROM node:24-alpine AS builder

WORKDIR quantum-view

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=builder /quantum-view/build/client /usr/share/nginx/html