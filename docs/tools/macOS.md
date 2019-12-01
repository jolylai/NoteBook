# MacOS

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
