FROM node:12.22.0

WORKDIR /app

RUN git clone https://github.com/vishnubob/wait-for-it.git

RUN curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

RUN chmod +x /usr/local/bin/docker-compose

RUN ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start:prod"]
