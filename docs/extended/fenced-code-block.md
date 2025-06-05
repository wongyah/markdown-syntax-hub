# 独立代码块

Markdown 基本语法使用缩进来表示代码块，这种方法有时会让人觉得不太方便。于是，更便捷的语法出现了！

## 一般代码

### 语法描述

在代码块的上一行和下一行分别输入 3 个连续的反引号（` ``` `）或波浪号（`~~~`）。

!!! note "注意"
    有些编辑器只支持反引号，有些只支持波浪号。使用前勿必亲手测试一下。

### 示例

~~~markdown
```
let myVariable = 123;
```
~~~

--8<-- "output.md:start"
```
let myVariable = 123;
```
--8<-- "output.md:end"

```html
<pre><code><div>let myVariable = 123;
</div></code></pre>
```

## 语法高亮

### 语法描述

在代码块前一行中的 3 个连续反引号或波浪号后面，输入代码语言的名称。

### 示例

~~~markdown
```js
let myVariable = 123;
```
~~~

--8<-- "output.md:start"
```js
let myVariable = 123;
```
--8<-- "output.md:end"


```html
<pre><code class="language-js"><div><span class="hljs-keyword">let</span> myVariable = <span class="hljs-number">123</span>;</div></code></pre>
```

## 含有反引号或波浪号的代码

在独立代码块中，3 个连续的反引号或波浪号需要进行转义。否则，它们会被作为代码块的起始标识符和结束标识符处理。

### 语法描述

转义方式有两种：

- 使用 4 个连续的反引号或波浪号作为独立代码块的起始标识符和结束标识符，代码块中的 3 个连续的反引号或波浪号会被作为普通字符对待。
- 如果代码块中含有 3 个连续的反引号，使用 3 个连续的波浪号作为独立代码块的起始标识符和结束标识符。  
- 如果代码块中含有 3 个连续的波浪号，使用 3 个连续的反引号作为独立代码块的起始标识符和结束标识符。

### 示例

~~~markdown
````markdown
```
let myVariable = 123;
```
````
~~~

`````markdown
~~~markdown
```
let myVariable = 123;
```
~~~
`````

--8<-- "output.md:start"
~~~markdown
```
let myVariable = 123;
```
~~~
--8<-- "output.md:end"


```html
<pre><code class="language-markdown">```
let myVariable = 123;
```</code></pre>
```
