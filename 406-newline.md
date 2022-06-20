---
title: 断行
---

## 语法描述

按照基本语法，你可以在行尾输入两个或两个以上空格，然后按回车键来断行。但行尾的空格是不可见字符，检查起来很不方便。

使用 Pandoc，你还可以在行尾输入一个反斜杠（`\`），然后按回车键来断行。

## 示例

{%- highlight markdown -%}
落霞与孤鹜齐飞，\
秋水共长天一色。
{%- endhighlight -%}

<div class="exmp">
  <div class="exmp-container">
    <p>落霞与孤鹜齐飞，<br> 秋水共长天一色。</p>
  </div>
</div>

{%- highlight html -%}
<p>落霞与孤鹜齐飞，<br> 秋水共长天一色。</p>
{%- endhighlight -%}