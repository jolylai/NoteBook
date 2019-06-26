# 服务器

## 服务器配置

```shell
# 安装ruby
$ sudo apt install ruby

# 这里请翻墙一下
$ gem update --system

# 查看版本号
$ gem -v
2.6.3

# 切换镜像源
$ gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

# 查看是切换成功
# 确保只有 gems.ruby-china.com
$ gem sources -l
https://gems.ruby-china.com

# --auto自动登录github帐号
travis login --auto

# 此处的--add参数表示自动添加脚本到.travis.yml文件中
# 这个命令会自动把 id_rsa 加密传送到 .git 指定的仓库对应的 travis 中去
travis encrypt-file ~/.ssh/id_rsa --add
```

## ssh

```bash
ssh-keygen -t rsa # 然后一路回车即可
# ssh-copy-id 可能需要另行安装
# 如果ssh默认端口是22，则不需要 -p
ssh-copy-id <登录部署服务器用户名>@<部署服务器地址> -p <部署服务器ssh端口>
ssh <登录部署服务器用户名>@<部署服务器地址> -p <部署服务器ssh端口>
```
