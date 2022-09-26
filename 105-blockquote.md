---
title: 引用
linkToNewLine: _markdown-tutorial/103-newline.md
---

Markdown 可以创建多种形式的引用：

1. toc
{: toc }
{::options toc_levels="1" /}

# 单段引用

## 语法描述

使用大于号（`>`）作为引用段落的开头。

大于号和引用文本之间最好输入一个空格，但这并不是必须的。

## 示例

{%- highlight markdown -%}
> 岑夫子，丹丘生，将进酒，杯莫停，
> 与君歌一曲，请君为我倾耳听！
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <blockquote >
      <p>岑夫子，丹丘生，将进酒，杯莫停！<br>
        与君歌一曲，请君为我倾耳听！</p>
    </blockquote>
  </div>
</div>

{%- highlight html -%}
<blockquote>
  <p>岑夫子，丹丘生，将进酒，杯莫停！<br>与君歌一曲，请君为我倾耳听！</p>
</blockquote>
{%- endhighlight -%}

# 多段引用和引用内断行

## 语法描述

如果引用多个段落，段落与段落之间插入至少一个空引用行。

**空引用行**是指以大于号开头，除此之外不包含任何其他可见字符的行（可以包含空格和制表位）。

如果段落内有[断行][newline]，每个断行都以大于号开头。

[newline]: {% link {{ page.linkToNewLine }} %}

## 示例

{%- highlight markdown -%}
> 君不见黄河之水天上来，奔流到海不复回！[空格][空格]
> 君不见高堂明镜悲白发，朝如青丝暮成雪。
>
> 人生得意须尽欢，莫使金樽空对月。[空格][空格]
> 天生我才必有用，千金散尽还复来。
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <blockquote>
      <p>君不见黄河之水天上来，奔流到海不复回！<br>
        君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
      <p>人生得意须尽欢，莫使金樽空对月。<br>
        天生我才必有用，千金散尽还复来。</p>
    </blockquote>
  </div>
</div>

{%- highlight html -%}
<blockquote>
  <p>君不见黄河之水天上来，奔流到海不复回！<br>
    君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
  <p>人生得意须尽欢，莫使金樽空对月。<br>
    天生我才必有用，千金散尽还复来。</p>
</blockquote>
{%- endhighlight -%}

# 引用自嵌套

## 语法描述

引用块内可以嵌套子引用，只要在子引用的段首（或断行的行首）多输入一个大于号即可。

## 示例

{%- highlight markdown -%}
> 宝玉一面想，一面刹住脚步，听她哭道是：
>
>> 花谢花飞花满天，红消香断有谁怜?[空格][空格]
>> 游丝软系飘春榭，落絮轻沾扑绣帘。
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <blockquote>
      <p>宝玉一面想，一面刹住脚步，听她哭道是：</p>
      <blockquote>
        <p>花谢花飞花满天，红消香断有谁怜? <br> 游丝软系飘春榭，落絮轻沾扑绣帘。</p>
      </blockquote>
    </blockquote>
  </div>
</div>

{%- highlight html -%}
<blockquote>
  <p>宝玉一面想，一面刹住脚步，听她哭道是：</p>
  <blockquote>
    <p>花谢花飞花满天，红消香断有谁怜? <br> 游丝软系飘春榭，落絮轻沾扑绣帘。</p>
  </blockquote>
</blockquote>
{%- endhighlight -%}

# 在引用块内使用其他元素

除了自嵌套，引用块内还可以使用其他 Markdown 元素。比如标题、列表、和代码块。

> 有些 Markdown 元素不能在引用块内使用。但每个编辑器的支持情况不一样，使用时实地测试一下吧。

## 语法描述

在引用块内使用其他元素的语法，与这些元素原本的语法一模一样。

## 示例

{%- highlight markdown -%}
> # 李白的诗作
>
> 李白，字太白，号青莲居士，素有“诗仙”之称。
>
> - 静夜思
> - 将进酒
> - 蜀道难
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <blockquote>
      <h2>李白的诗作</h2>
      <p>李白，字太白，号青莲居士，素有“诗仙”之称。</p>
      <ul>
        <li>静夜思</li>
        <li>将进酒</li>
        <li>蜀道难</li>
      </ul>
    </blockquote>
  </div>
</div>

{%- highlight html -%}
<blockquote>
  <h1>李白的诗作</h1>
  <p>李白，字太白，号青莲居士，素有“诗仙”之称。</p>
  <ul>
    <li>静夜思</li>
    <li>将进酒</li>
    <li>蜀道难</li>
  </ul>
</blockquote>
{%- endhighlight -%}

