---
title: 编译参数
---

kramdown 提供以下编译参数：

1. toc
{: toc }
{::options toc_levels="1" /}

# 设置目录中的标题级别

## `toc_levels`

功能：设置目录中的标题级别。

参数值示例：`1,2,3` 或 `1..3`

默认值：`1..6`

# 设置标题 ID 的生成方式

## `auto_ids`

功能：是否为标题自动生成 ID。

参数值类型：布尔值

默认值：`true`

## `auto_id_prefix`

功能：为自动生成的标题 ID 添加一个前缀。

参数值类型：字符串

默认值：`''`（空字符串）

# 设置脚注的显示方式

## `footnote_nr`

功能：设置脚注的起始编号。

参数值类型：整数

默认值：`1`

## `footnote_prefix`

功能：为自动生成的脚注 ID 添加一个前缀。

参数值类型：字符串

默认值：`''`（空字符串）

## `footnote_backlink`

设置每条脚注末尾的链接文本。

参数值类型：字符串

默认值：'&#8617'

## `footnote_backlink_inline`

功能：是否将每条脚注末尾的链接作为行内元素。

参数值类型：布尔值

默认值：`false`

# 设置语法高亮工具

## `syntax_highlighter`

功能：设置语法高亮的工具。

参数值类型：语法高亮工具的名称（字符串）。

参数值：
- `+nil+`（无）
- `rouge`（默认值）
- `coderay`

## `syntax_highlighter_opts`

功能：设置语法高亮工具的配置参数。每个语法高亮工具有不同的配置参数。根据你在 `syntax_highlighter` 中设置的语法高亮工具，为配置参数选择合适的参数值。

参数值格式：{参数名称:参数值}

默认值：{}

# 设置数学公式转换器

## `math_engine`

功能：设置数学公式的转换器。

参数值类型：数学公式转换器的名称（字符串）。

参数值：
- `+nil+`（无）
- `mathjax`（默认值）
- `KaTeX`
- `SsKaTeX`
- `Mathjax-Node`
- `Ritex`
- `itex2MML`

默认值：`mathjax`

## `math_engine_opts`

功能：设置数学公式转换器的配置参数。每个数学公式转换器有不同的配置参数。根据你在 `math_engine` 中设置的数学公式转换器，为配置参数选择合适的参数值。

参数值格式：{参数名称:参数值}

默认值：{}

# 设置 HTML 模板

## `template`

功能：设置 ERB 模板，将转换后的 HTML 内容输出为一个完整的文件。

参数值：ERB 模板的文件名称（字符串）

默认值：`''`（空字符串）

# 设置字符实体的输出方式

## `entity_output`

功能：设置字符实体的输出形式。

参数值：
- `as_char`（默认值）
- `as_input`
- `numeric`
- `symbolic`

# 设置 CJK 字符的处理方式

## `remove_line_breaks_for_cjk`

功能：是否删除 CJK 字符之间的换行符。

参数值类型：布尔值

默认值：`false`


