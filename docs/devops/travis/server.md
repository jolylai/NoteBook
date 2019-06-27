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

# 安装 travis
$ gem install travis
```

## ssh

```bash
ssh-keygen -t rsa # 然后一路回车即可
# ssh-copy-id 可能需要另行安装
# 如果ssh默认端口是22，则不需要 -p
ssh-copy-id <登录部署服务器用户名>@<部署服务器地址> -p <部署服务器ssh端口>

# 测试是否可以用ssh登录服务器
ssh <登录部署服务器用户名>@<部署服务器地址> -p <部署服务器ssh端口>
```

## 加密私钥到 travis 环境变量

切换目录到项目根路径下

```bash
# --auto自动登录github帐号
$ travis login --auto

# 此处的--add参数表示自动添加脚本到.travis.yml文件中
# 这个命令会自动把 id_rsa 加密传送到 .git 指定的仓库对应的 travis 中去
$ travis encrypt-file ~/.ssh/id_rsa --add
```

## ssh known_hosts

因为 travis-ci 默认只添加了 github.com, gist.github.com 和 ssh.github.com 为 known_hosts，rsync 执行时会提示是否添加，但是 travis-ci 里不能输入确认，所以需要将自动服务器的域名和商品添加到 known_hosts

```yml
addons:
  ssh_known_hosts: uedsky.com:1223
```

## 上传文件

```yml
# 没有修改过端口的，可以用这个，上传目录要加 -r 参数
- scp -o stricthostkeychecking=no -r 要上传的文件或目录 用户@域名或IP:/路径
# 由于我修改了默认的port，所以在这里也进行了加密处理
- scp -o stricthostkeychecking=no -P $PORT -r 要上传的文件或目录 用户@域名或IP:/路径
```

最后，就是在 after_success 周期中，添加上传服务器的指令即可，在这里要注意，如果没有 stricthostkeychecking=no 参数，将构建失败，详细原因请参考通过 travis 部署代码到远程服务器

## 示例

```yml
language: node_js
node_js: 8
branches:
  only:
    - master
addons:
  ssh_known_hosts: 106.12.140.131
install:
  - yarn install
script:
  - yarn run docs:build
deploy:
  provider: pages
  skip-cleanup: true
  github-token: "$GITHUB_TOKEN"
  keep-history: true
  local_dir: docs/.vuepress/dist
  on:
    branch: master
before_install:
  - openssl aes-256-cbc -K $encrypted_2a01126f8b17_key -iv $encrypted_2a01126f8b17_iv
    -in id_rsa.enc -out ~/.ssh/id_rsa -d
  - chmod 600 ~/.ssh/id_rsa
  - echo -e "Host 106.12.140.131\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
after_success:
  - scp -o stricthostkeychecking=no -r docs/.vuepress/dist root@106.12.140.131:/root
```
