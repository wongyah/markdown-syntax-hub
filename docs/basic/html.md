# HTML

Markdown 中可以直接使用 HTML。

## 语法描述

行内元素，如`<span>`和`<abbr>`，可以位于文中的任意位置。

块元素，如`<div>`和`<table>`，必须使用空行与前后的 Markdown 文本分隔开。

HTML 元素中，不能使用 Markdown 语法。

## 示例

```markdown
<abbr title="British Broadcasting Corporation">BBC</abbr> 总部位于伦敦。
```

--8<-- "output.md:start"
<abbr title="British Broadcasting Corporation">BBC</abbr> 总部位于伦敦。
--8<-- "output.md:end"

```html
<p><abbr title="British Broadcasting Corporation">BBC</abbr> 总部位于伦敦。</p>
```
