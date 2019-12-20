# MacOS

## Homebrew

> [Homebrew](https://brew.sh/)

### 安装

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

更换清华源

```bash
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```

复原

```bash
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git

brew update
```

### 通过 homebrew 安装

> [kap](https://github.com/wulkano/kap) -gif 视频录制

```bash
$ brew cask install kap
```

## 百度网盘

> [BaiduNetdiskPlugin](https://github.com/CodeTips/BaiduNetdiskPlugin-macOS)

百度网盘 2.2.2 版本<a href="http://issuecdn.baidupcs.com/issue/netdisk/MACguanjia/BaiduNetdisk_mac_2.2.2.dmg" rel="nofollow">官方下载地址</a>
**下载完成后，不要打开**。或者关掉已经下载好的网盘。

安装

```bash
cd ~/Downloads && git clone https://github.com/CodeTips/BaiduNetdiskPlugin-macOS.git && ./BaiduNetdiskPlugin-macOS/Other/Install.sh
```

卸载

```bash
cd /Applications/BaiduNetdisk_mac.app/Contents/MacOS/ && rm -rf BaiduNetdisk_mac libBaiduNetdiskPlugin.framework && mv BaiduNetdisk_mac_backup BaiduNetdisk_mac
```

## Alfred

### 自定义搜索配置

- `百度`：https://www.baidu.com/s?ie=utf-8&f=8&wd={query}
- `简书`：http://www.jianshu.com/search?utf8=%E2%9C%93&q={query}
- `淘宝`：http://s.taobao.com/search?oe=utf-8&f=8&q={query}
- `京东`：https://search.jd.com/Search?keyword={query}&enc=utf-8&wq={query}
- `微信文章`：http://weixin.sogou.com/weixin?type=2&query={query}
- `stackoverflow`：http://www.stackoverflow.com/search?q={query}
- `npm`: https://www.npmjs.com/search?q={query}
- `github`：https://github.com/search?utf8=%E2%9C%93&q={query}
- `maven`：http://mvnrepository.com/search?q={query}
- `Android` API Search：https://developer.android.com/reference/classes.html#q={query}
