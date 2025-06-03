---
title: 任务列表
---

## 语法描述

待办事项的语法如下：

{%- highlight markdown -%}
- [ ] 描述待办事项
{%- endhighlight -%}

已完成事项的语法如下：

{%- highlight markdown -%}
- [x] 描述已完成的事项
{%- endhighlight -%}

## 示例

{%- highlight markdown -%}
- [x] 赖床
- [ ] 起床
- [ ] 吃饭
- [ ] 睡觉
{%- endhighlight -%}

<div class='exmp'>
  <div class='exmp-container'>
    <ul class="contains-task-list">
      <li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 赖床</li>
      <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 起床</li>
      <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 吃饭</li>
      <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 睡觉</li>
    </ul>
  </div>
</div>

{%- highlight html -%}
<ul class="contains-task-list">
  <li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 赖床</li>
  <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 起床</li>
  <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 吃饭</li>
  <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 睡觉</li>
</ul>
{%- endhighlight -%}


