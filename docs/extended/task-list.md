# 任务列表

任务列表是用来整理待办事项和已完成事项的清单。

## 语法描述

待办事项的语法如下：

```markdown
- [ ] 描述待办事项
```

已完成事项的语法如下：

```markdown
- [x] 描述已完成的事项
```

## 示例

```markdown
- [x] 赖床
- [ ] 起床
- [ ] 吃饭
- [ ] 睡觉
```

--8<-- "output.md:start"
- [x] 赖床
- [ ] 起床
- [ ] 吃饭
- [ ] 睡觉
--8<-- "output.md:end"

```html
<ul class="contains-task-list">
  <li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 赖床</li>
  <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 起床</li>
  <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 吃饭</li>
  <li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 睡觉</li>
</ul>
```


