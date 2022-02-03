FROM node:16-alpine

WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
CMD npm run develop