---
title: 为行内元素添加属性
---

## 语法描述

为行内元素添加属性的语法与块元素基本相同。

只是，行内元素的属性列表（IAL）添加在元素末尾，而不像块元素一样添加在块元素的下一行。

*[IAL]: Inline Attribute List

## 示例（常规直添式）

{%- highlight markdown -%}
一代人终将老去，**但**{: style="color: #bb0000;"}总有人正年轻。
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>一代人终将老去，<strong style="color: #bb0000;">但</strong>总有人正年轻。</p>
  </div>
</div>

{%- highlight html -%}
<p>一代人终将老去，<strong style="color: #bb0000;">但</strong>总有人正年轻。</p>
{%- endhighlight -%}

## 示例（变量引用式）

{%- highlight markdown -%}
{:blue: style="color: #0000ff;"}

青出于**蓝**{: blue}而胜于**蓝**{: blue}。
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>青出于<strong style="color: #0000ff;">蓝</strong>而胜于<strong style="color: #0000ff;">蓝</strong>。</p>
  </div>
</div>

{%- highlight html -%}
<p>青出于<strong style="color: #0000ff;">蓝</strong>而胜于<strong style="color: #0000ff;">蓝</strong>。</p>
{%- endhighlight -%}

