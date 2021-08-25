---
title: 脚注
---

脚注可以用来添加注释和参考资料。

Markdown 中生成的脚注和我们通常看到的脚注没什么不同。正文中插入脚注编号，脚注编号带有指向脚注内容的链接。脚注内容放在页面底部。

## 语法描述

在正文中插入脚注编号：`[^1]`

在文中任意位置添加脚注内容：

{%- highlight markdown -%}
[^1]: 这是脚注内容。
{%- endhighlight -%}

其中，

- 脚注编号必须与正文中对应的脚注编号一致。
- 脚注内容和前面的冒号之间最好使用空格分隔。
- 脚注编号可以是数字，也可以是字符串，但字符串中不能包含空格和制表符。
- 即使使用字符串作为脚注编号，脚注编号最终仍然以数字编号的形式显示出来。数字编号的顺序按照脚注在文中的前后位置确定。
- 脚注内容可以放在文中的任何位置，并不局限于文件末尾。但脚注内容不能放在块元素内部，比如列表内、引用内或者表格内。

## 示例

{%- highlight markdown -%}
人生代代无穷已[^1]，江月年年望相似[^wang]。

[^1]: 穷已：穷尽。
[^wang]: 望：只。
{%- endhighlight -%}

<div class='exmp'>
    <div class='exmp-container'>
        <p>人生代代无穷已<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>，江月年年望相似<sup id="fnref:wang" role="doc-noteref"><a href="#fn:wang" class="footnote" rel="footnote">2</a></sup>。</p>
        <div class="footnotes" role="doc-endnotes">
        <ol>
            <li id="fn:1" role="doc-endnote">
            <p>穷已：穷尽。 <a href="#fnref:1" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
            </li>
            <li id="fn:wang" role="doc-endnote">
            <p>望：只。 <a href="#fnref:wang" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
            </li>
        </ol>
        </div>
    </div>
</div>

{%- highlight html -%}
<p>人生代代无穷已<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>，江月年年望相似<sup id="fnref:wang" role="doc-noteref"><a href="#fn:wang" class="footnote" rel="footnote">2</a></sup>。</p>

<div class="footnotes" role="doc-endnotes">
  <ol>
    <li id="fn:1" role="doc-endnote">
      <p>穷已：穷尽。 <a href="#fnref:1" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
    </li>
    <li id="fn:wang" role="doc-endnote">
      <p>望：只。 <a href="#fnref:wang" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
    </li>
  </ol>
</div>
{%- endhighlight -%}
