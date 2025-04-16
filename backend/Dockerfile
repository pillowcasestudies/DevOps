# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install backend dependencies
COPY package*.json ./
RUN npm install

# Copy the entire backend (including frontend)
COPY . .

# Build the frontend React app
WORKDIR /app/frontend
RUN npm install && npm run build

# Move the built frontend files to a public folder
RUN mkdir -p /app/public
RUN cp -r out/* /app/public/

# Go back to root directory
WORKDIR /app

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]