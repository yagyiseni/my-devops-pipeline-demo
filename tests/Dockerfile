FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY src/ ./src/
COPY public/ ./public/

EXPOSE 3000

USER node

CMD ["npm", "start"]
