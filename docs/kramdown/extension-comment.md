---
title: 注释
---

## 语法描述

在 kramdown 中添加注释的语法如下：

{%- highlight markdown -%}
{::comment}注释文本{:/comment}
{%- endhighlight -%}

其中，注释的结束标签可以简写为 `{:/}`。像这样：

{%- highlight markdown -%}
{::comment}注释文本{:/}
{%- endhighlight -%}

注释中的文本，会被编译为 HTML 注释文本，不会在输出中显示。

注释可以作为行内元素使用，也可以作为块元素使用。用作块元素时，开始标签和结束标签必须各占一行。像这样：

{%- highlight markdown -%}
{::comment}
注释文本
{:/}
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
{::comment}
岳阳楼记中的名句
{:/comment}
先天下之忧而忧，后天下之乐而乐！
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <!-- 岳阳楼记中的名句 -->
    <p>先天下之忧而忧，后天下之乐而乐！</p>
  </div>
</div>

{%- highlight html -%}
<!-- 岳阳楼记中的名句 -->
<p>先天下之忧而忧，后天下之乐而乐！</p>
{%- endhighlight -%}
