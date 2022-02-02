FROM node:16-alpine

WORKDIR /user/src/app
COPY package*.json ./
RUN npm install 
RUN npm install -g serve
COPY . .
EXPOSE 4000
RUN npm run build
CMD serve -s build -l 4000