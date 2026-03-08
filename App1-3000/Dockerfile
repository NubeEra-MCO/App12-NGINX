# Use lightweight Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy files
COPY package.json .
COPY server.js .
COPY worker.js .

# Install dependencies (none but keeps structure)
RUN npm install

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]