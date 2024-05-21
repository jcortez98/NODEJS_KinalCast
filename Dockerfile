# Dockerfile
FROM node:20

WORKDIR /NODEJS_KINALCAST_2024
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3001

CMD ["npm", "start"]