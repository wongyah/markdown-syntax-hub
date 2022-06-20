---
title: 自定义行内文本
---

除了强调文本、删除线、下划线、上下标等现有的行内文本格式外，你还可以按照自己的喜好设置行内文本。

自定义行内文本会被编译为 HTML 中的 `<span>` 元素。

## 语法描述

自定义行内文本的语法如下：

{%- highlight markdown -%}
[行内文本]{属性}
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
熊猫树上熊猫果！[网友]{.role data-asker="me"}：可以在我家里也种一棵吗?
{%- endhighlight -%}

{%- highlight javascript -%}
<p>熊猫树上熊猫果！<span class="role" data-asker="me">网友</span>：可以在我家里也种一棵吗?</p>
{%- endhighlight -%}

