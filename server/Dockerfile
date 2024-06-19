FROM node:latest

WORKDIR /app

COPY package.json . 

RUN npm install 
RUN npm install ts-node-dev -g

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]