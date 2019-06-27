# 概览

## 生命周期

- OPTIONAL Install `apt addons`
- OPTIONAL Install `cache components`
- `before_install`
- `install`
- `before_script`
- `script`
- OPTIONAL `before_cache` (for cleaning up cache)
- `after_success` or `after_failure`
- OPTIONAL `before_deploy`
- OPTIONAL `deploy`
- OPTIONAL `after_deploy`
- `after_script`

## 模板
```yaml
language: node_js
node_js: 8
cache:
  directories: node_modules
branches:
  only:
    - master
addons:
  ssh_known_hosts: 106.12.140.131
before_install:
  - openssl aes-256-cbc -K $encrypted_2a01126f8b17_key -iv $encrypted_2a01126f8b17_iv
    -in id_rsa.enc -out ~/.ssh/id_rsa -d
  - chmod 600 ~/.ssh/id_rsa
  - echo -e "Host 106.12.140.131\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
install:
  - yarn install
before_script:
  - 
script:
  - yarn run docs:build
before_cache: 
  - 
after_success:
  - scp -o stricthostkeychecking=no -r docs/.vuepress/dist root@106.12.140.131:/root
after_failure:
  -
before_deploy: 
  -
deploy:
  provider: pages
  skip-cleanup: true
  github-token: "$GITHUB_TOKEN"
  keep-history: true
  local_dir: docs/.vuepress/dist
  on:
    branch: master
after_deploy:
  - yarn run notification
after_script:
  -
```