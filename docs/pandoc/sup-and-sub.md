---
title: 上标和下标
---

## 语法描述

使用脱字符（`^`）表示上标，使用波浪号（`~`）表示下标。

如果作为上标或下标的文本包含空格，必须使用反斜杠（`\`）对空格进行转义。否则，其中的空格会被作为上下标文本结束的标记处理。

## 示例

{%- highlight markdown -%}
水分子（H~2~O）的直径是 4×10^-10 米。
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <p>水分子（H<sub>2</sub>O）的直径是 4×10<sup>-10</sup> 米。</p>
  </div>
</div>

{%- highlight html -%}
<p>水分子（H<sub>2</sub>O）的直径是 4×10<sup>-10</sup> 米。</p>
{%- endhighlight -%}
