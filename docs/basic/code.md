---
title: 行内代码
---

行内代码是指出现在段落内或其他块元素内的代码。

1. toc
{: toc }
{::options toc_levels="1" /}

# 一般代码

## 语法描述

使用反引号（`` ` ``）将代码引起来即可。

> 反引号位于键盘的左上角，数字 1 左侧、Tab 键上方的按键上。

## 示例

{%- highlight markdown -%}
在 CSS 中，使用 `text-align` 属性设置文本的水平对齐方式。 
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>在 CSS 中，使用 <code>text-align</code> 属性设置文本的水平对齐方式。</p>
  </div>
</div>

{%- highlight html -%}
<p>在 CSS 中，使用 <code>text-align</code> 属性设置文本的水平对齐方式。</p>
{%- endhighlight -%}

# 含有反引号的代码

在 Markdown 中，反引号是行内代码开始和结束的标识符。如果代码中含有反引号，这段代码需要采用特殊写法，使代码里的反引号转义成普通字符。

## 语法描述

使用双反引号将代码引起来即可，像这样：``` ``代码`` ```。

如果反引号处于代码的首尾两端，使用空格分隔代码中的反引号与作为代码标识符的反引号。像这样，``` `` ` `` ```，``` `` `foo` `` ```。

## 示例

{%- highlight markdown -%}
``在 Markdown 中，`代码` 表示一段行内代码。``
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>
      <code>在 Markdown 中，`代码` 表示一段行内代码。</code>
    </p>
  </div>
</div>

{%- highlight html -%}
<p>
  <code>在 Markdown 中，`代码` 表示一段行内代码。</code>
</p>
{%- endhighlight -%}

# 含有与字符和尖括号的代码

尖括号（`<>`），即小于号和大于号，是 HTML 标签的起始标识符和结束标识符。与字符（`&`）是 HTML 字符实体的起始标识符。

为了方便插入 HTML 代码，Markdown 文件转换为 HTML 文件时，会将代码中的小于号、大于号和与字符自动转换为字符实体。

像这样：

{%- highlight markdown -%}
`<p>` 是 HTML 中的段落元素。
{%- endhighlight -%}

{%- highlight html -%}
<p>
  <code>&lt;p&gt;</code> 是 HTML 中的段落元素。
</p>
{%- endhighlight -%}
