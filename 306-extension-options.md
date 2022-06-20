---
title: 声明编译参数
linkToOptionList: _markdown-tutorial/307-option-list.md
---

kramdown 不只是一种 Markdown 语法，更是一个功能强大的 **Markdown ⇆ HTML** 编译器。

作为编译器，kramdown 提供了多种编译参数让用户对编译过程进行个性化设置。比如设置目录中的标题级别、是否为标题自动生成 ID 等。

你可以在编译时将编译参数添加到编译命令（命令行命令）中。除此之外，你还可以在 Markdown 文件中直接声明编译参数。不可思议吧！

## 语法描述

声明编译参数的语法如下：

{%- highlight markdown -%}
{::options 参数名称="参数值" /}
{%- endhighlight -%}

> 1. 在参数名称中，使用下划线（`_`）作为单词之间的连接符。如，`auto_ids`。
> 2. kramdown 提供的编译参数，请参见 [编译参数]({% link {{ page.linkToOptionList }} %})。

## 示例

{%- highlight markdown -%}
{::options auto_ids="true" /}

# Regata Storica
{%- endhighlight -%}

{%- highlight html -%}
<h1 id="regata-storica">Regata Storica</h1>
{%- endhighlight -%}


{%- highlight markdown -%}
{::options auto_ids="false" /}

# Regata Storica
{%- endhighlight -%}

{%- highlight html -%}
<h1>Regata Storica</h1>
{%- endhighlight -%}

