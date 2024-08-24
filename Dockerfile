FROM node:iron-slim

ENV NODE_ENV production

COPY . /app

WORKDIR /app

# Install dependencies
RUN npm ci

# Build the code
RUN npm run build

# Start the server
CMD ["npm", "run", "start"]
