# 代码块

代码块是指作为块元素显示的一组代码。

## 一般代码

### 语法描述

将每行代码缩进 4 个空格或 1 个制表位。

### 示例

```markdown
这是一段 JavaScript 代码：

    let myVariable = 123;
```

--8<-- "output.md:start"
这是一段 JavaScript 代码：

    let myVariable = 123;
--8<-- "output.md:end"

```html
<p>这是一段 JavaScript 代码：</p>
<pre><code>let myVariable = 123;
</code></pre>
```

## 含有与字符和尖括号的代码

尖括号（`<>`），即小于号和大于号，是 HTML 标签的起始标识符和结束标识符。与字符（`&`）是 HTML 字符实体的起始标识符。

为了方便插入 HTML 代码，Markdown 文件转换为 HTML 文件时，会将代码中的小于号、大于号和与字符自动转换为字符实体。

像这样：

```markdown
这是一段 HTML 代码：

    <h1>我是标题</h1>
```

```html
<p>这是一段 HTML 代码：</p>
<pre><code>&lt;h1&gt;我是标题&lt;/h1&gt;</code></pre>
```

