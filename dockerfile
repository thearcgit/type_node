# Use the official Node.js 18 image as the base
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate


# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 8010

# Command to run the application
CMD ["npm", "start"]
# CMD ["npm", "run","dev" ]

# CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "--loader", "ts-node/esm", "src/server.ts"]
