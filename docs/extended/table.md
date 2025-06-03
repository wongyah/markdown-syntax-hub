---
title: 表格
---

Markdown 中的表格不仅可以设置文本对齐方式，还可以在单元格中使用 Markdown 中的其他元素为文本添加格式。

1. toc
{: toc }
{::options toc_levels="1" /}

# 普通表格

## 语法

使用管道符（`|`）分隔出表格列。最好在每一行的行首和行尾分别插入一个管道符，这样可以提高表格在不同编辑器中的兼容性。

在每一列中，使用 3 个或 3 个以上的连字符（`---`）分隔标题行与表格中的普通行（表格主体）。连字符的数量与列宽无关。也就是说 无论使用多少了连字符，编译后的 HTML 都是相同的。

表格中的文本默认使用左对齐。使用冒号（`:`）单独设置某一列的文本对齐方式：

- `:---` 表示左对齐。
- `:---:` 表示居中对齐。
- `---:` 表示右对齐。

> 在 <abbr title="Visual Studio Code">VS Code</abbr> 里，使用插件 Markdown Table Maker 可以快速生成表格。

## 示例

{%- highlight markdown -%}
| 项目     |  内容  |     请修改为 |
|:---------|:-----:|-------------:|
| 婚姻状况 |   累   |         已婚 |
| 证件类型 | 长方形 |       身份证 |
| 爱好     |   吃   | 唱歌跳舞之类 |
| 特长     |   腿   | 绘画书法之类 |
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <table>
      <thead>
        <tr>
          <th style="text-align:left">项目</th>
          <th style="text-align:center">内容</th>
          <th style="text-align:right">请修改为</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:left">婚姻状况</td>
          <td style="text-align:center">累</td>
          <td style="text-align:right">已婚</td>
        </tr>
        <tr>
          <td style="text-align:left">证件类型</td>
          <td style="text-align:center">长方形</td>
          <td style="text-align:right">身份证</td>
        </tr>
        <tr>
          <td style="text-align:left">爱好</td>
          <td style="text-align:center">吃</td>
          <td style="text-align:right">唱歌跳舞之类</td>
        </tr>
        <tr>
          <td style="text-align:left">特长</td>
          <td style="text-align:center">腿</td>
          <td style="text-align:right">绘画书法之类</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{%- highlight html -%}
<table>
  <thead>
    <tr>
      <th style="text-align:left">项目</th>
      <th style="text-align:center">内容</th>
      <th style="text-align:right">请修改为</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">婚姻状况</td>
      <td style="text-align:center">累</td>
      <td style="text-align:right">已婚</td>
    </tr>
    <tr>
      <td style="text-align:left">证件类型</td>
      <td style="text-align:center">长方形</td>
      <td style="text-align:right">身份证</td>
    </tr>
    <tr>
      <td style="text-align:left">爱好</td>
      <td style="text-align:center">吃</td>
      <td style="text-align:right">唱歌跳舞之类</td>
    </tr>
    <tr>
      <td style="text-align:left">特长</td>
      <td style="text-align:center">腿</td>
      <td style="text-align:right">绘画书法之类</td>
    </tr>
  </tbody>
</table>
{%- endhighlight -%}

# 在表格中使用其他元素

表格中允许使用链接、行内代码、强调文本等行内元素。

表格中不允许使用标题、引用、列表等块元素，也不允许使用图片和 HTML 元素。

# 表格文本中的管道符

在 Markdown 的表格中，管道符是表示列边界的特殊字符。

如果表格文本中包含管道符，有两种处理方式：

- 使用反斜杠进行转义，即 `\|`。
- 将管道符替换为 HTML 实体字符，即 `&#124;`。




