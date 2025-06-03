---
title: 断行
---

## 语法描述

断行是指段落内的换行，相当于软回车、换行符、或者 HTML 里的 ```<br>```。

在行尾输入两个或两个以上空格，然后按回车键，就可以在 Markdown 中进行断行。

## 示例

{%- highlight markdown -%}
落霞与孤鹜齐飞，[空格][空格]
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

