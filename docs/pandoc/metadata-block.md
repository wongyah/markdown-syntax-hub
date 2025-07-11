# 元数据块

使用元数据块，可以为网页添加头部元素（`<head>`中的元素）和页眉 （`<header>`）。

使用元数据块时，必须设置 `--standalone`（简写为 `-s`）选项。否则，元数据块中的内容不会输出到 HTML 中。

## 百分号表示法

使用百分号表示法输入的元数据块必须放在 Markdown 文件的开头，而且元数据块的前面不能有任何空行。

### 语法描述

百分号表示法的写法如下：

```Markdown
% 标题
% 作者
% 日期
```

使用百分号表示法时，标题、作者和日期的先后顺序是固定的，不能互换。但是，你仍然可以只输入其中的一项或两项。比如，只输入标题和作者的写法如下：

```markdown
% 标题
% 作者
```

如果只想输入后面的项，必须使用以百分号开头的空行来替代前面的项。比如，只输入作者时的写法如下：

```markdown
%
% 作者
```

!!! note "注意"
    如果省略了以百分号开头的空行，“作者”会被 Pandoc 作为元数据块中的标题文本进行编译。

元数据块中的标题可以跨行，但后续行必须以空格开头。

```markdown
% 标题的首行文本
  标题的后续行文本
```

在元数据块中可以输入多名作者，使用以下三种写法之一即可：

```markdown
% 作者甲
  作者乙
```

```markdown
% 作者甲; 作者乙
```

```markdown
% 作者甲;
  作者乙
```

元数据块中的日期不允许跨行。

### 示例

```markdown
% 致橡树
% 舒婷
% 1977.03.27

| 我如果爱你 ——
| 绝不像攀援的凌霄花
| 借你的高枝炫耀自己；
| ……
```

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
  <head>
    ...
    <meta name="author" content="舒婷" />
    <title>致橡树</title>
    ...
  </head>
  <body>
    <header id="title-block-header">
      <h1 class="title">致橡树</h1>
      <p class="author">舒婷</p>
      <p class="date">1977.03.27</p>
    </header>
    <div class="line-block">我如果爱你 ——<br />
    绝不像攀援的凌霄花<br />
    借你的高枝炫耀自己；<br />
    ……</div>
  </body>
</html>
```

## YAML 表示法

使用 YAML 表示法输入的元数据块可以放在 Markdown 文件的任何位置。

### 语法描述

YAML 元数据块有以下两种写法：

```markdown
---
title: 标题
author: 作者
date: 日期
---
```

```markdown
---
title: 标题
author: 作者
date: 日期
...
```

如果 YAML 元数据块没有位于 Markdown 文件的开头，使用空行分隔元数据块与正文。

```markdown

正文

---
title: 标题
author: 作者
date: 日期
---

正文
```

### 示例

```markdown
---
title: 热爱生命
author: 汪国真
date: 1988
---

| 我不去想，
| 是否能够成功，
| 既然选择了远方，
| 便只顾风雨兼程。
| ……
```

```markdown
| 我不去想，
| 是否能够成功，
| 既然选择了远方，
| 便只顾风雨兼程。
| ……

---
title: 热爱生命
author: 汪国真
date: 1988
---
```

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
  <head>
    ...
    <meta name="author" content="汪国真" />
    <title>热爱生命</title>
    ...
  </head>
  <body>
    <header id="title-block-header">
      <h1 class="title">热爱生命</h1>
      <p class="author">汪国真</p>
      <p class="date">1988-02</p>
    </header>
    <div class="line-block">我不去想，<br />
    是否能够成功，<br />
    既然选择了远方，<br />
    便只顾风雨兼程。<br />
    ……</div>
  </body>
</html>
```



