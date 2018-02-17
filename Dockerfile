FROM node

WORKDIR /var/www/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 80

CMD [ "yarn", "start" ]