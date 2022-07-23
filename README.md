# nodeJS_mysql_docker
# setup command
# mysql command
 mysql -h localhost -P 3306 --protocol=tcp -uroot -pyoupassword
# docker command
 docker-compose up -d
 docker-compose down
 docker-compose up -d --build

 # aws bash command for docker (user data)
 #! /bin/sh
yum update -y
amazon-linux-extras install docker
service docker start
usermod -aG docker ec2-user
chkconfig docker on
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose