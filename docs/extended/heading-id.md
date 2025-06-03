---
title: 带 ID 的标题
---

有些 Markdown 编辑器会为每个标题自动生成一个 ID，甚至还可以自定义 ID。有了 ID，就可以添加指向特定标题的链接，还可以使用 CSS 为为某个标题单独设置样式。

1. toc
{: toc }
{::options toc_levels="1" /}

# 为标题设置自定义 ID

## 语法描述

在标题的末尾输入一对儿花括号。花括号和标题文本之间使用空格分隔。

在花括号内依次输入井号和标题的 ID。

像这样：

{%- highlight markdown -%}
## 标题文本 {#自定义ID}
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
### 唐诗三百首 {#唐诗}
{%- endhighlight -%}

{%- highlight html -%}
<h3 id="唐诗">唐诗三百首</h3>
{%- endhighlight -%}

> 不同的编辑器或 Markdown 转换器可能会为标题生成不同的 ID。比如 <abbr title="Visual Studio Code">VS Code</abbr> 插件 Markdown All in One 为上例中标题生成的 ID 是“唐诗三百首-唐诗”。

# 添加指向标题的链接

## 语法描述

在 Markdown 中，添加指向标题的链接与添加普通链接的语法相同。只需要将网址替换为井号和标题的 ID。像这样：

{%- highlight markdown -%}
[链接文本][#标题ID]
{%- endhighlight -%}

如果要在其他网页中添加指向 Markdown 中某个标题的链接，只需要在 Markdown 文件的网址（URL）后面加上井号和标题的 ID 即可。像这样：

{%- highlight markdown -%}
[链接文本][URL#标题ID]
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
[添加指向标题的链接](#添加指向标题的链接)
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p><a href="#%E6%B7%BB%E5%8A%A0%E6%8C%87%E5%90%91%E6%A0%87%E9%A2%98%E7%9A%84%E9%93%BE%E6%8E%A5">添加指向标题的链接</a></p>
  </div>
</div>

{%- highlight html -%}
<p><a href="#%E6%B7%BB%E5%8A%A0%E6%8C%87%E5%90%91%E6%A0%87%E9%A2%98%E7%9A%84%E9%93%BE%E6%8E%A5">添加指向标题的链接</a></p>
{%- endhighlight -%}
