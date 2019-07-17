# Node 版本管理工具

## 下载安装 nvm

### windows

[下载 nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases) ,直接默认安装

### linux

卸载已安装到全局的 node/npm

```bash
npm ls -g --depth=0 #查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装

sudo rm -rf /usr/local/lib/node_modules #删除全局 node_modules 目录
sudo rm /usr/local/bin/node #删除 node
cd  /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm #删除全局 node 模块注册的软链
```

安装 nvm

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

安装完成后请重新打开终端环境

## 基本命令

```bash
# 查看当前已经安装的nodejs的版本
nvm list

# 查看可安装的版本
nvm list available

# 安装指定版本的node
nvm install 5.6.0

# 使用指定版本的node
nvm use 5.6.0

# 删除指定版本的node
npm uninstall 5.6.0
```
