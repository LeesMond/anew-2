# Step1 : base images
FROM ubuntu

# Step2 : install programs
RUN apt-get update && apt-get install -y -q nginx && apt-get install -y vim

# Step3 : file copy
COPY index.html /usr/share/nginx/html

# Step4 : start nginx
CMD ["nginx","-g","daemon off;"]
