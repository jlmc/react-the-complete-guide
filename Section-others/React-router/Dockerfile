FROM node:current-alpine3.14 as BUILD

ENV NODE_OPTIONS=--openssl-legacy-provider

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN npm install -g npm@8.1.3
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

# add app
COPY . ./

RUN yarn install
RUN yarn build


## production environment
FROM nginx:stable-alpine
COPY --from=BUILD /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
