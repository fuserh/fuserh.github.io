sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
sudo apt install unzip -y
unzip npm.zip
cp npm /usr/
rm npm.zip
rm npm
chmod 777 /usr/npm/npm
sudo sh /usr/npm/npm
