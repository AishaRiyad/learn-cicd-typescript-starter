FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production

CMD ["npm", "run", "start"]

