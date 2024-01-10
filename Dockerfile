FROM node:20

WORKDIR /usr/src/blog-backend

COPY . .

RUN npm i

COPY . .

EXPOSE 4001

CMD [ "npm", "run", "dev" ]