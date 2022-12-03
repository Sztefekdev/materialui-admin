FROM node:18-alpine

WORKDIR /app

COPY ./next-app /app

# use npm instead of yarn, because yarn has some problems here /maybe more dependencies)
# https://nextjs.org/docs/messages/sharp-missing-in-production
RUN npm i -g sharp

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# run server
CMD node server.js