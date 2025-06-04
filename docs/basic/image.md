# 图片

## 行内一体式

### 语法描述

插入图片的方法如下：

```markdown
![替换文本](图片的网址或路径 "图片标题")
```

图片的网址或路径 与 图片标题 之间使用空格分隔。

替换文本转换成 HTML 后会成为 `<img>` 元素的 `alt` 属性值。图片标题转换成 HTML 后会成为 `<img>` 元素的 `title` 属性值。图片标题是选填项。

### 示例

```markdown
![印度尼西亚萨母巴岛上的红树林](https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg "漂亮的红树林")
```

--8<-- "output.md:start"
![印度尼西亚萨母巴岛上的红树林](https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg "漂亮的红树林")
--8<-- "output.md:end"

```html
<p>
  <img src="https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg" alt="印度尼西亚萨母巴岛上的红树林" title="漂亮的红树林">
</p>
```

## 脚注式

### 语法描述

插入图片的脚注式写法与链接的脚注式写法大体相同，只是需要使用插入图片的语法。

### 示例

```markdown
![印度尼西亚萨母巴岛上的红树林][红树林]

[红树林]: https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg "漂亮的红树林"
```

编译后的 HTML 以及输出效果，与上面的图片完全相同。
