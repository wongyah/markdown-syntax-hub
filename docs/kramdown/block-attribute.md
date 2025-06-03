---
title: 为块元素添加属性
---

在 kramdown 中为块元素添加属性有以下几种方式：

1. toc
{: toc }
{::options toc_levels="1" /}

# 常规直添式

## 语法描述

在块元素末尾的下一行添加属性列表（IAL）。属性定义列表的语法如下：

*[IAL]: Inline Attribute List

{%- highlight markdown -%}
{: 属性名称="属性值"}
{%- endhighlight -%}

属性定义列表里可以包含多个属性，属性与属性之间使用空格分隔。

## 示例

{%- highlight markdown -%}
> 临渊羡鱼，不如退而结网。
{: title="古语有云"}
{%- endhighlight -%}

{%- highlight html -%}
<blockquote title="古语有云">
  <p>临渊羡鱼，不如退而结网。</p>
</blockquote>
{%- endhighlight -%}

# 为块元素添加类属性

类（Class）是 CSS 中最常用的属性之一。

你可以使用通用写法为块元素添加类属性。但除此之外，kramdown 还专门为添加属性类设计了一种简式写法。

## 语法描述

为块元素添加属性类的简式写法如下：

{%- highlight markdown -%}
{: .类名}
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
> 前事不忘，后事之师。
{: .gyyy .战国策}
{%- endhighlight -%}

{%- highlight html -%}
<blockquote class="gyyy 战国策">
  <p>前事不忘，后事之师。</p>
</blockquote>
{%- endhighlight -%}

# 为块元素添加 ID 属性

ID（Class）是 CSS 中最常用的属性之一。

你可以使用通用写法为块元素添加 ID 属性。但除此之外，kramdown 还专门为添加 ID 属性设计了一种简式写法。

## 语法描述

为块元素添加 ID 属性的简式写法如下：

{%- highlight markdown -%}
{: #ID}
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
- 梅
- 兰
- 竹
- 菊
{: #F4}
{%- endhighlight -%}

{%- highlight html -%}
<ul id="F4">
  <li>梅</li>
  <li>兰</li>
  <li>竹</li>
  <li>菊</li>
</ul>
{%- endhighlight -%}

# 变量引用式

如果多个块元素拥有相同的属性列表，常规直添式只会让你一遍遍地将属性列表复制到每个块元素下方。很无趣吧?

这可是变量引用式的应用场景！像定义变量一样定义一个属性列表，然后像引用变量一样随意引用这个属性列表吧。

## 语法描述

定义属性列表的语法如下：

{%- highlight markdown -%}
{:属性列表名称: .类名 #ID 属性名称="属性值"}
{%- endhighlight -%}

引用已定义的属性列表的语法如下：

{%- highlight markdown -%}
{: 属性列表名称}
{%- endhighlight -%}

属性列表定义可以位于文中的任何位置。然后在块元素的下一行，使用属性列表名称引用属性列表即可。

## 示例

{%- highlight markdown -%}
{:winter: .winter title="梅花"}

墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。
{: winter}
{%- endhighlight -%}

{%- highlight html -%}
<p class="winter" title="梅花">墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。</p>
{%- endhighlight -%}

