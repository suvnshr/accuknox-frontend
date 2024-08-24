# Build a new docker image
docker build -t accuknox-frontend .

# Run the docker image

docker run -d -p 3101:3000 accuknox-frontend
