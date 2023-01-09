FROM node:16-buster AS buildernpm
ENV TZ=Asia/Ho_Chi_Minh
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

FROM node:16-buster AS builder
ENV TZ=Asia/Ho_Chi_Minh
WORKDIR /app

COPY --from=buildernpm /app/node_modules ./node_modules

ADD . /app/

RUN npm run build

FROM node:16-buster AS runner
ENV TZ=Asia/Ho_Chi_Minh
WORKDIR /logs
WORKDIR /keys
WORKDIR /app

RUN apt -y update
RUN apt -y install redis-server

ENV NODE_ENV production

COPY --from=builder /app/dist ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/run-container.sh ./run-container.sh
COPY --from=builder /app/.env ./.env

VOLUME [ "/temp" ]

EXPOSE 3000
CMD [ "/bin/bash", "/app/run-container.sh" ]
