---
title: 预定义的属性列表
---

kramdown 预定义了一些属性列表。这些预定义的属性列表只能用于特定的元素，以实现特定的功能。

|  属性列表  |  适用元素  |  功能  |
|:---|:--:|:---|
|  `standalone`  |  图片  |  [标记非行内图片](#标记非行内图片)  |
|  `auto_ids`  |  术语表  |  [为术语自动生成 ID](#为术语自动生成-id)  |
|  `footnotes`  |  脚注  |  [指定脚注内容的位置](#指定脚注内容的位置)  |


# 标记非行内图片

文中的插图通常独立成行，是所在段落的唯一子元素。

这时，你可以使用属性列表 `standalone` 标记图片，从而改变编译后生成的 HTML 元素：
- 图片元素 `<img>` 的父元素编译为 `<figure>`。
- 为 `<figure>` 添加标题元素 `<figcaption>`，内容与图片的替换文本相同。

> 默认情况下，图片元素 `<img>` 的父元素编译为 `<p>`。

将 `<img>` 的父元素编译为 `<figure>`，为图片添加 CSS 样式时会非常方便。

## 语法描述

在图片的末尾引用属性列表 `standalone`。像这样：

{%- highlight markdown -%}
![替换文本](图片的网址或路径 "图片标题"){:standalone}
{%- endhighlight -%}

> 图片是行内元素，使用 为行内元素添加属性 中的语法。

## 示例

{%- highlight markdown -%}
![安娜蜂鸟](https://cn.bing.com/th?id=OHR.AnnasHummingbird_EN-CN9850207192_1920x1080.jpg&w=720){:standalone}
{%- endhighlight -%}

{%- highlight html -%}
<figure>
  <img src="https://cn.bing.com/th?id=OHR.AnnasHummingbird_EN-CN9850207192_1920x1080.jpg&amp;w=720" alt="安娜蜂鸟" />
  <figcaption>安娜蜂鸟</figcaption>
</figure>
{%- endhighlight -%}

# 为术语自动生成 ID

使用属性列表 `auto_ids` 可以为术语表中的每个术语自动生成一个 ID。

如果文中已经为某个术语添加了自定义 ID，编译器就不再为该术语自动生成 ID，而是使用自定义的 ID。

## 语法描述

在术语表的前一行引用属性列表 `auto_ids`。像这样：

{%- highlight markdown -%}
{:auto_ids}
术语名称
: 术语定义
{%- endhighlight -%}

> 术语 ID 的生成规则与标题 ID 的生成规则相同，除了第 6 条和第 7 条。

如果术语中只包含中文字符，即使引用了属性列表 `auto_ids`，编译器也不会为术语表中的术语自动生成任何 ID。

你还可以为自动生成的术语 ID 添加前缀，像这样：

{%- highlight markdown -%}
{:auto_ids-前缀}
术语名称
: 术语定义
{%- endhighlight -%}

> 前缀中只能包含使用字母、数字、连字符和下划线。如果前缀中含有任何不合法字符（比如中文字符或星号），编译器不会为术语生成任何 ID。

## 示例一

{%- highlight markdown -%}
{:auto_ids}
Data visualization
: Any attempt to make data more easily digestible by rendering it in a visual context.
{%- endhighlight -%}

{%- highlight html -%}
<dl>
  <dt id="data-visualization">Data visualization</dt>
  <dd>Any attempt to make data more easily digestible by rendering it in a visual context.</dd>
</dl>
{%- endhighlight -%}

## 示例二

{%- highlight markdown -%}
{:auto_ids-tn-}
Data visualization
: Any attempt to make data more easily digestible by rendering it in a visual context.  
{%- endhighlight -%}

{%- highlight html -%}
<dl>
  <dt id="tn-data-visualization">Data visualization</dt>
  <dd>Any attempt to make data more easily digestible by rendering it in a visual context.</dd>
</dl>
{%- endhighlight -%}

> 本例中，前缀是 `tn-`。
>
> 如果将前缀写成 `tn`（即 `auto_ids-tn`），生成的术语 ID 将变成 `tndata-visualization`。

# 指定脚注内容的位置

默认情况下，脚注会被放在文末。

使用属性列表 `footnotes` 可以将脚注放在文中的指定位置，还可以设置脚注的列表类型（项目符号列表还是数字编号列表）。

## 语法描述

在文中需要放置脚注内容的位置插入一个列表，然后将这个列表的属性列表设置为 `footnotes`。经过编译之后，这个列表会被自动替换为脚注。

插入的列表可以是数字编号列表，也可以是项目符号列表。语法如下：

{%- highlight markdown -%}
1. 脚注位置
{:footnotes}
{%- endhighlight -%}

{%- highlight markdown -%}
- 脚注位置
{:footnotes}
{%- endhighlight -%}

## 示例一

{%- highlight markdown -%}
小荷才露尖尖角[^1]，早有蜻蜓立上头[^2]。

[^1]: 尖尖角：刚露出水面、尚未舒展开的荷叶尖儿。
[^2]: 上头：上面，顶上。为了押韵，“头”不读轻声。

1. 脚注位置
{:footnotes}

接天莲叶无穷碧，映日荷花别样红。
{%- endhighlight -%}

{%- highlight markdown -%}
小荷才露尖尖角[^1]，早有蜻蜓立上头[^2]。

[^1]: 尖尖角：刚露出水面、尚未舒展开的荷叶尖儿。
[^2]: 上头：上面，顶上。为了押韵，“头”不读轻声。

- 脚注位置
{:footnotes}

接天莲叶无穷碧，映日荷花别样红。
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>小荷才露尖尖角<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>，早有蜻蜓立上头<sup id="fnref:2" role="doc-noteref"><a href="#fn:2" class="footnote" rel="footnote">2</a></sup>。</p>
    <div class="footnotes" role="doc-endnotes">
      <ol>
        <li id="fn:1" role="doc-endnote">
          <p>尖尖角：刚露出水面、尚未舒展开的荷叶尖儿。 <a href="#fnref:1" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
        </li>
        <li id="fn:2" role="doc-endnote">
          <p>上头：上面，顶上。为了押韵，“头”不读轻声。 <a href="#fnref:2" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
        </li>
      </ol>
    </div>
    <p>接天莲叶无穷碧，映日荷花别样红。</p>
  </div>
</div>

{%- highlight html -%}
<p>小荷才露尖尖角<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>，早有蜻蜓立上头<sup id="fnref:2" role="doc-noteref"><a href="#fn:2" class="footnote" rel="footnote">2</a></sup>。</p>

<div class="footnotes" role="doc-endnotes">
  <ol>
    <li id="fn:1" role="doc-endnote">
      <p>尖尖角：刚露出水面、尚未舒展开的荷叶尖儿。 <a href="#fnref:1" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
    </li>
    <li id="fn:2" role="doc-endnote">
      <p>上头：上面，顶上。为了押韵，“头”不读轻声。 <a href="#fnref:2" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
    </li>
  </ol>
</div>

<p>接天莲叶无穷碧，映日荷花别样红。</p>
{%- endhighlight -%}









