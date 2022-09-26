---
title: URL 自动生成链接
---

你可以使用网址（URL）自动生成链接，也可以禁用该功能从而以文本方式显示网址。

1. toc
{: toc }
{::options toc_levels="1" /}

# 自动生成链接

很多 Markdown 编辑器都会将网址自动转换为链接。像这样：

{%- highlight markdown -%}
www.baidu.com
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p><a href="http://www.baidu.com">www.baidu.com</a></p>
  </div>
</div>


{%- highlight html -%}
<p><a href="http://www.baidu.com">www.baidu.com</a></p>
{%- endhighlight -%}

# 禁用自动生成链接

虽然自动生成链接可以提供很多便利，但有时候你只想将网址作为文本输入。这时，需要禁用自动生成链接。

在 <abbr title="Visual Studio Code">VS Code</abbr> 中，如果不想将 Markdown 中的网址自动转换为链接，按以下步骤修改设置：

1. 打开【文件】→【首选项】→【设置】界面。
2. 在搜索框中输入“markdown link”。
3. 在搜索结果中找到【Markdown > Preview: Linkify】，取选选择（使复选框处于未勾选状态）。

