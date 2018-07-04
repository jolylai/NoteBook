# NoteBook

## 提交代码

```git
  echo "# NoteBook" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git remote add origin https://github.com/jolylai/notebook.git
  git push -u origin master
```

## 将项目托送到远程

```git
  git remote add origin https://github.com/jolylai/notebook.git
  git push -u origin master
```

## 将项目推送到远程 gh-pages 分支

```git
git subtree push --prefix dist origin gh-pages
// dist 为项目的文件路径
// git subtree push --prefix docs/.vuepress/dist origin gh-pages
```

## 修改远程地址

```
git remote set-url origin <new url>
```
