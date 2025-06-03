---
title: 图片
---

在 Markdown 中，插入图片有以下两种方式：

1. toc
{: toc }
{::options toc_levels="1" /}

# 行内一体式

## 语法描述

插入图片的方法如下：

{%- highlight markdown -%}
![替换文本](图片的网址或路径 "图片标题")
{%- endhighlight -%}

其中，

1. 图片的网址或路径 与 图片标题 之间使用空格分隔。
2. 替换文本是 `<img>` 的 `alt` 属性值。
3. 图片标题是 `<img>` 的 `title` 属性值。图片标题是选填项。

## 示例

{%- highlight markdown -%}
![印度尼西亚萨母巴岛上的红树林](https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg "漂亮的红树林")
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>
      <img src="https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg" alt="印度尼西亚萨母巴岛上的红树林" title="漂亮的红树林" style="width: 100%; height: auto;">
    </p>
  </div>
</div>

{%- highlight html -%}
<p>
  <img src="https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg" alt="印度尼西亚萨母巴岛上的红树林" title="漂亮的红树林">
</p>
{%- endhighlight -%}

# 脚注式

## 语法描述

插入图片的脚注式写法与链接的脚注式写法大体相同，只是需要使用插入图片的语法。

## 示例

{%- highlight markdown -%}
![印度尼西亚萨母巴岛上的红树林][红树林]

[红树林]: https://img.peapix.com/f0b899e247da4e6da5a7ac7938f3dc05_480.jpg "漂亮的红树林"
{%- endhighlight -%}

编译后的 HTML 以及输出效果，与上面的图片完全相同。
