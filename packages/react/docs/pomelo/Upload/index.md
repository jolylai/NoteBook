---
title: Upload
nav:
  title: Pomelo
  path: /pomelo
group:
  title: Upload
  path: /upload
---

# Upload

## 水印

<code src="./demo/Watermark.tsx" />

将 canvas 中的内容转换我

```js
// JPEG at 95% quality
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob
document.createElement('canvas').toBlob(
  function(blob) {
    console.log('blob: ', blob);
  },
  'image/jpeg',
  0.95,
);
```

## 图片上传

PicUpload

| 属性           | 描述                          | 类型                    | 默认值 |
| -------------- | ----------------------------- | ----------------------- | ------ |
| value          | 数据加载完成后触发,会多次触发 | `string string[]`       | -      |
| limit          | 限制图片上传数量              | `number`                | -      |
| onChange       | 数据加载失败时触发            | `(string[]) => void`    | -      |
| formatResponse | 格式化服务器响应返回图片 url  | `(response:T)=> string` | -      |

## 获取 base64

```js
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
```
