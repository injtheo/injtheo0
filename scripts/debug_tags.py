#!/usr/bin/env python3
import re

with open('/workspace/src/utils/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

# 检查是否能找到 task id
count = 0
for i, line in enumerate(lines):
    if re.search(r"id\s*:\s*[\'\"]task-", line):
        count += 1
        if count <= 3:
            print(f'Line {i+1}: {line.rstrip()[:80]}')
print(f'Total task id lines: {count}')

# 检查是否有 tags 在 task 对象中（不包括在 exercises/quizzes 中）
print()
print('Checking tags in task objects...')
task_tags = 0
other_tags = 0
for i, line in enumerate(lines):
    if re.search(r"^\s+tags:\s*\[", line):
        # 检查附近是否有 task id
        nearby = '\n'.join(lines[max(0,i-10):i+1])
        if 'task-' in nearby and 'ex-' not in nearby and "'q" not in nearby:
            task_tags += 1
            if task_tags <= 3:
                print(f'Task tag at line {i+1}: {line.rstrip()[:80]}')
        else:
            other_tags += 1
print(f'Tags in task objects: {task_tags}')
print(f'Other tags: {other_tags}')
