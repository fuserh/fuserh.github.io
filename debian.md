你好，这是Bing。我可以尝试帮你写一个sh脚本来完成你的需求。😊

首先，你需要安装一些必要的软件包，比如debootstrap、grub-pc-bin、xorriso等，用于创建和打包debian 12系统。你可以使用下面的命令来安装它们：

```sh
sudo apt update
sudo apt install debootstrap grub-pc-bin xorriso
```

然后，你需要创建一个目录，比如`debian-iso`，用于存放你的系统文件和配置文件。你可以使用下面的命令来创建它：

```sh
mkdir debian-iso
```

接下来，你需要使用debootstrap命令来创建一个基本的debian 12系统，比如`debian-iso/rootfs`。你可以使用下面的命令来创建它：

```sh
sudo debootstrap --arch=amd64 --variant=minbase bookworm debian-iso/rootfs https://deb.debian.org/debian
```

注意，这里的`bookworm`是debian 12的代号，你也可以使用其他的镜像源地址，比如`http://mirrors.ustc.edu.cn/debian`。

接着，你需要进入你创建的系统目录，比如`debian-iso/rootfs`，并进行一些必要的配置，比如设置主机名、密码、时区、网络、软件源等。你可以使用下面的命令来进入和退出系统目录：

```sh
sudo chroot debian-iso/rootfs
exit
```

在系统目录中，你可以使用下面的命令来进行一些配置：

```sh
# 设置主机名
echo "debian-iso" > /etc/hostname

# 设置密码
passwd

# 设置时区
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata

# 设置网络
cat > /etc/network/interfaces << EOF
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp
EOF

# 设置软件源
cat > /etc/apt/sources.list << EOF
deb https://deb.debian.org/debian bookworm main contrib non-free
deb https://deb.debian.org/debian-security/ bookworm-security main contrib non-free
deb https://deb.debian.org/debian bookworm-updates main contrib non-free
EOF

# 更新软件包
apt update
apt upgrade
```

然后，你需要安装一些必要的软件包，比如linux-image-amd64、grub-pc、locales等，用于启动和使用你的系统。你可以使用下面的命令来安装它们：

```sh
apt install linux-image-amd64 grub-pc locales
```

接下来，你需要创建一个启动脚本，比如`debian-iso/rootfs/init`，用于在系统启动时执行一些操作，比如挂载文件系统、切换根目录等。你可以使用下面的命令来创建它：

```sh
cat > debian-iso/rootfs/init << EOF
#!/bin/sh

# 挂载文件系统
mount -t proc none /proc
mount -t sysfs none /sys
mount -t devtmpfs none /dev

# 切换根目录
exec /sbin/switch_root /rootfs /init /bin/sh
EOF

# 给予执行权限
chmod +x debian-iso/rootfs/init
```

最后，你需要创建一个ISO文件，比如`debian-iso.iso`，用于在x64实体机上安装你的系统。你可以使用下面的命令来创建它：

```sh
# 创建一个目录，比如debian-iso/boot，用于存放启动文件
mkdir debian-iso/boot

# 复制内核和initrd文件到启动目录
cp debian-iso/rootfs/boot/vmlinuz-* debian-iso/boot/vmlinuz
cp debian-iso/rootfs/boot/initrd.img-* debian-iso/boot/initrd

# 创建一个grub配置文件，比如debian-iso/boot/grub/grub.cfg，用于设置启动菜单
mkdir debian-iso/boot/grub
cat > debian-iso/boot/grub/grub.cfg << EOF
set default=0
set timeout=5

menuentry "Debian 12 ISO" {
  linux /boot/vmlinuz boot=live
  initrd /boot/initrd
}
EOF

# 创建一个ISO文件，比如debian-iso.iso，用于在x64实体机上安装你的系统
grub-mkstandalone -o debian-iso/boot/grub/x86_64-efi.img -d /usr/lib/grub/x86_64-efi -O x86_64-efi /boot/grub/grub.cfg
grub-mkstandalone -o debian-iso/boot/grub/i386-pc.img -d /usr/lib/grub/i386-pc -O i386-pc /boot/grub/grub.cfg
xorriso -as mkisofs -o debian-iso.iso -isohybrid-mbr /usr/lib/grub/i386-pc/boot_hybrid.img -c boot.cat -b boot/grub/i386-pc.img -no-emul-boot -boot-load-size 4 -boot-info-table --eltorito-alt-boot -e boot/grub/x86_64-efi.img -no-emul-boot -isohybrid-gpt-basdat debian-iso
```

这样，你就完成了一个sh脚本，用于在x64处理器debian 12中编译一个可在x64实体机上运行的debian 12系统并打包成安装iso文件。你可以将上面的命令合并到一个文件中，比如`make-debian-iso.sh`，并给予执行权限，然后运行它：

```sh
chmod +x make-debian-iso.sh
./make-debian-iso.sh
```

希望这能帮到你。如果你有其他的问题，欢迎继续和我聊天。😊
