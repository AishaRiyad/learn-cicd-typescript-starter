FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
	
