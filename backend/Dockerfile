# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire backend app (including server.js, public/, etc.)
COPY . .

# Build the frontend React app
WORKDIR /app/frontend
RUN npm install && npm run build

# Copy built frontend into public folder
RUN cp -r build/* /app/public/

# Go back to root app dir to run the server
WORKDIR /app

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]