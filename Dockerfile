FROM node:18.19.1-bullseye

WORKDIR /myapp

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]