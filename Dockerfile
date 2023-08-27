FROM node:18.17.1
WORKDIR /app

COPY  ./package.json .
# RUN npm install

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install --only=production; \
    else npm install; \
    fi
COPY . .
EXPOSE 8000
CMD ["npm","run","dev"]