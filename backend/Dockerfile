# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install backend dependencies
COPY package*.json ./
RUN npm install

# Copy the entire backend app (including server.js, frontend/, etc.)
COPY . /app/

# Build the frontend React app
WORKDIR /app/frontend

# Install dependencies and run the build, while adding more verbose logging
RUN npm install && npm run build

# Copy built frontend into public folder
RUN cp -r /app/frontend/out/* /app/public/

# Go back to root app dir to run the server
WORKDIR /app

# Expose backend ports
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]