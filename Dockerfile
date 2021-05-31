
# Dockerfile

# base image
FROM node:16.2.0-alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /src

# copy source files
COPY . /src

# install dependencies
RUN npm ci

# start app
RUN npm run build
EXPOSE $PORT
CMD npm run start
