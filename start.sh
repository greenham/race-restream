# Check if the target environment argument is provided and is valid
if [ $# -ne 1 ] || [[ "$1" != "dev" && "$1" != "prod" ]]; then
    echo "Usage: $0 <target_environment> (where target_environment is 'dev' or 'prod')"
    exit 1
fi

# Extract the target environment from the command line argument
target_environment="$1"

if [ "$1" = "prod" ]; then
  tag="latest"
else
  tag="dev"
fi

# Build the Docker image
eval "docker build --target=$target_environment -t race-restream:$tag ."

# Run the Docker container, binding it to port 3000
eval "docker run -dit -p 3000:3000 race-restream:$tag"