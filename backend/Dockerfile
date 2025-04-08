# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# Copy the entire backend app (including server.js, public/, etc.)
COPY backend /app/backend/

# Build the frontend React app
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
RUN npm run build && npm run export

# Copy built frontend into public folder
RUN cp -r out/* /app/public/

# Go back to root app dir to run the server
WORKDIR /app/backend

# Expose backend ports
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]