# 链接

## 行内一体式

### 语法描述

插入链接的方法如下：

```markdown
[链接文本](目标地址 "标题")
```

链接的目标地址可以是网址（比如 `https://www.docsimpo.work/`），也可以是相对地址（比如 `/docs/`）。

标题是 `<a>` 元素的 `title` 属性值，选填项。标题文本与目标地址之间使用空格分隔。

### 示例

```markdown
[百度](https://www.baidu.com/)是全球最大的中文搜索引擎。

[必应](https://cn.bing.com/ "每一天都从欣赏美景开始")的“每天一图”好漂亮！
```

--8<-- "output.md:start"
[百度](https://www.baidu.com/)是全球最大的中文搜索引擎。

[必应](https://cn.bing.com/ "每一天都从欣赏美景开始")的“每天一图”好漂亮！
--8<-- "output.md:end"

```html
<p><a href="https://www.baidu.com/">百度</a>是全球最大的中文搜索引擎。</p>
<p><a href="https://cn.bing.com/" title="每一天都从欣赏美景开始">必应</a>的“每天一图”好漂亮！</p>
```

## 脚注式

脚注式链接将链接文本和目标地址分开来写，使 Markdown 文件的阅读过程更加流畅。

### 语法描述

脚注式链接包含两个部分：链接声明和链接定义。

**链接声明**位于正文中，用于声明链接文本和链接名称。

**链接定义**可以位于文中的任何位置，用于定义链接的目标地址和标题。

脚注式链接的语法如下：

```markdown
[链接文本][链接名称]

[链接名称]: 目标地址 "标题"
```

其中，

- 链接名称必须具有唯一性。链接名称中可以使用字母、数字、空格和标点，不区分大小写。亲测，链接名称中也可以使用中文字符。
- 链接的目标地址可以使用尖括号（`<>`）括起来，但这并不是必须的。
- 链接标题需要使用单引号、双引号或圆括号括起来。标题与目标地址之间使用空格分隔。

```markdown
以下几种写法是等效的：
[bing]: https://cn.bing.com/ '每一天都从欣赏美景开始'
[bing]: https://cn.bing.com/ "每一天都从欣赏美景开始"
[bing]: https://cn.bing.com/ (每一天都从欣赏美景开始)
[bing]: <https://cn.bing.com/> (每一天都从欣赏美景开始)
```

### 示例

```markdown
2021 年全球五大搜索引擎：

1. [谷歌][1]
2. [必应][2]
3. [雅虎][3]
4. [百度][4]
5. [Yandex][5]

[1]: http://www.google.com/ "不作恶"
[2]: https://cn.bing.com/ "每一天都从欣赏美景开始"
[3]: https://www.yahoo.com/
[4]: https://www.baidu.com/ "百度一下，你就知道"
[5]: https://yandex.com/ "俄罗斯最大的搜索引擎"
```

--8<-- "output.md:start"
2021 年全球五大搜索引擎：

1. [谷歌][1]
2. [必应][2]
3. [雅虎][3]
4. [百度][4]
5. [Yandex][5]

[1]: http://www.google.com/ "不作恶"
[2]: https://cn.bing.com/ "每一天都从欣赏美景开始"
[3]: https://www.yahoo.com/
[4]: https://www.baidu.com/ "百度一下，你就知道"
[5]: https://yandex.com/ "俄罗斯最大的搜索引擎"
--8<-- "output.md:end"

```html
<p>2021 年全球五大搜索引擎：</p>
<ol>
  <li>
    <a href="http://www.google.com/" title="不作恶">谷歌</a>
  </li>
  <li>
    <a href="https://cn.bing.com/" title="每一天都从欣赏美景开始">必应</a>
  </li>
  <li>
    <a href="https://www.yahoo.com/">雅虎</a>
  </li>
  <li>
    <a href="https://www.baidu.com/" title="百度一下，你就知道">百度</a>
  </li>
  <li>
    <a href="https://yandex.com/" title="俄罗斯最大的搜索引擎">Yandex</a>
  </li>
</ol>
```

## 脚注式的简写形式

有些链接的链接文本本身就很适合作为链接名称。这时，可以使用简写形式。

### 语法描述

链接名称留空即可。

### 示例

```markdown
[百度][]一下，你就知道！

[百度]: https://www.baidu.com/ "百度一下，你就知道"
```

--8<-- "output.md:start"
[百度][]一下，你就知道！

[百度]: https://www.baidu.com/ "百度一下，你就知道"
--8<-- "output.md:end"

```html
<p>
  <a href="https://www.baidu.com/" title="百度一下，你就知道">百度</a>一下，你就知道！
</p>
```

## 快速创建网址和邮箱链接

以网址或邮箱作为链接文本的链接，可以使用快捷方式创建。

### 语法描述

使用尖括号（`<>`）将网址或邮箱括起来即可。

### 示例

```markdown
<https://cn.bing.com/>  
<yedda.wang@docsimpo.work>
```

--8<-- "output.md:start"
<https://cn.bing.com/>  
<yedda.wang@docsimpo.work>
--8<-- "output.md:end"

```html
<p>
  <a href="https://cn.bing.com/">https://cn.bing.com/</a><br>
  <a href="mailto:yedda.wang@docsimpo.work">yedda.wang@docsimpo.work</a>
</p>
```


