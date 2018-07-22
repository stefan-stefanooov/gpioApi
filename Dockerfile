FROM node:8
WORKDIR /tmp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["node", "dist/bundle.js"]
