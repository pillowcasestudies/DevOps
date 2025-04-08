# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY package*.json ./

RUN npm install && npm run build
RUN cp -r out/* /app/public/

# Copy the entire backend app (including server.js, public/, etc.)
COPY . .

# Copy frontend files into image (this assumes you have /frontend in your project root)
COPY ../frontend /app/frontend

# Build the frontend React app
WORKDIR /app/frontend
RUN npm install && npm run build

# Copy built frontend into backend's public folders
RUN cp -r .next/static /app/public/

# Go back to root app dir to run the server
WORKDIR /app

# Expose backend ports
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]