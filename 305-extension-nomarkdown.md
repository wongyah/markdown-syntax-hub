---
title: "Markdown 源文本"
---

Markdown 源文本是指那些虽然位于 Markdown 文件中，但在编译时不会被转换器处理，而是按照原样输出的文本。

## 语法描述

在 kramdown 中插入 Markdown 源文本的语法如下：

{%- highlight markdown -%}
{::nomarkdown}源文本{:/nomarkdown}
{%- endhighlight -%}

其中，Markdown 源文本的结束标签可以简写为 `{:/}`。像这样：

{%- highlight markdown -%}
{::nomarkdown}源文本{:/}
{%- endhighlight -%}

Markdown 源文本可以作为行内元素使用，也可以作为块元素使用。用作块元素时，开始标签和结束标签必须各占一行。像这样：

{%- highlight markdown -%}
{::nomarkdown}
源文本
{:/}
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
快来，{::nomarkdown}**划重点**{:/nomarkdown}了！
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>快来，**划重点**了！</p>
  </div>
</div>

{%- highlight html -%}
<p>快来，**划重点**了！</p>
{%- endhighlight -%}

