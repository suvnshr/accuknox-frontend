# Remove any existing running container 
docker rm -f accuknox-frontend

# Build a new docker image
docker build -t accuknox-frontend . --no-cache

# Run the docker image

docker run -d -p 3101:3000 --name accuknox-frontend accuknox-frontend
