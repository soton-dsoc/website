FROM node:16-alpine

WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
RUN npm run build
CMD npm start