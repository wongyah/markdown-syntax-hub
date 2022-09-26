---
title: 表情
---

表情可以让文字变得更加生动、鲜活。所以，Markdown 里怎么能少了表情呢?

在 Markdown 中添加表情有两种方式：

1. toc
{: toc }
{::options toc_levels="1" /}

# 复制粘贴表情

很多网站专门提供表情，像 [Emojipedia][]、[找符号网][] 和 [EMOJIALL][]。

在这些网站中找到你喜欢的表情，复制粘贴到你的文章里即可。不仅 Markdown 编辑器可以正常显示这些表情，转换后的 HTML 或 PDF 文件通常也可以正常显示它们。

> 如果你在静态网站生成软件（比如 Jekyll 和 Hugo）中使用表情，一定要将 HTML 文件的编码格式指定为 UTF-8。

[Emojipedia]: https://emojipedia.org/ "Emojipedia网站"
[找符号网]: https://www.zfuhao.com/ "找符号网"
[EMOJIALL]: https://www.emojiall.com/zh-hans "EmojiAll中文网站"

# 使用表情简码

表情简码以冒号开头，然后输入表情的名字。像这样：`:bus:`。

并不是每个平台都支持表情简码，而且每个平台使用的表情简码不太相同。使用前，勿必先测试一下。

{%- highlight markdown -%}
公交车:bus:四大奇观：装得多，开得慢，挤得哭，离校门远。:joy:
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <p>🚌公交车四大奇观：装得多、开得慢、挤得哭、离校门远。😂</p>
  </div>
</div>

