# 强调文本

强调文本主要用于突出显示段落中的关键词或重点内容。

## 语法描述

使用星号（`*`）或下划线（`_`）表示强调文本。星号比下划线更为常用。

将需要强调的文本置于同等数量的星号（或下划线）之间。

星号（或下划线）的数量代表强调的程度：

- 两端各一个星号（或下划线），表示一般强调。一般强调，编译为 HTML 中的 `<em>` 元素，默认显示为斜体。-
- 两端各两个星号（或下划线），表示重点强调。重点强调，编译为 HTML 中的 `<strong>` 元素，默认显示为粗体。-
- 两端各三个星号（或下划线），表示双重强调。双重强调，编译为 HTML 中的 `<em><strong>` 嵌套元素，默认显示为粗斜体。

!!! note "注意"
    星号和下划线不能混用。
    如果在强调文本的前面输入了星号，后面也必须输入同等数量的星号。
    如果在强调文本的前面输入了下划线，后面也必须输入同等数量的下划线。

## 示例

```markdown
*春江*潮水连海平，海上**明月**共潮生。滟滟随波千万里，何处春江无***月明***。
```

--8<-- "output.md:start"
*春江*潮水连海平，海上**明月**共潮生。滟滟随波千万里，何处春江无***月明***。
--8<-- "output.md:end"

```html
<p>
  <em>春江</em>潮水连海平，海上<strong>明月</strong>共潮生。滟滟随波千万里，何处春江无<em><strong>月明</strong></em>。
</p>
```

!!! tip "提示"
    星号还可以用来强调英文单词中的单个或多个字母。但部分编辑器不支持在这种场景中使用下划线。
    如果星号（或下划线）的两端分别存在一个或多个空格，星号（或下划线）将被视为普通字符。**位于段首和句首的星号（或下划线）除外**。

