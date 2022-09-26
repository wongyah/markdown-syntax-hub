---
title: 标题
---

在 Markdown 中，标题有两种写法：

1. toc
{: toc }
{::options toc_levels="1" /}

井号法支持六级标题，而下划线法只支持两级标题。井号法比下划线法更为常用。

# 井号法

## 语法描述

使用 1-6 个井号（```#```）作为标题行的开头，井号数量代表标题的级别。比如， ```#``` 表示这是一个一级标题，```###``` 表示这是一个三级标题。

井号与标题文本之间插入一个空格。

标题行的前面和后面，分别插入至少一个空行。

## 示例

{%- highlight markdown -%}
# 一级标题

### 三级标题

###### 六级标题
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <h1>一级标题</h1>
    <h3>三级标题</h3>
    <h6>六级标题</h6>
  </div>
</div>

{%- highlight html -%}
<h1>一级标题</h1>
<h3>三级标题</h3>
<h6>六级标题</h6>
{%- endhighlight -%}

# 下划线法

## 语法描述

使用等号（```=```）和连字符（```-```）分别表示一级标题和二级标题。

在标题文本的下一行输入一个或多个等号，表示这是一个一级标题。

在标题文本的下一行输入一个或多个连字符，表示这是一个二级标题。

## 示例

{%- highlight markdown -%}
一级标题
=======

二级标题
-------
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <h1>一级标题</h1>
    <h2>二级标题</h2>
  </div>
</div>

{%- highlight html -%}
<h1>一级标题</h1>
<h2>二级标题</h2>
{%- endhighlight -%}

