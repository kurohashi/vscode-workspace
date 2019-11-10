n, m = input().split()
n = int(n)
m = int(m)
grid = []
for i in range(int(n)):
    grid.append(input())
result = [0, 0]
for i in range(n):
    for j in range(m):
        if grid[i][j] == 'G':
            y = 0
            for k in range(1, min(i + 1, j + 1, n - i, m - j)):
                if grid[i - k][j] != 'G':
                    break
                if grid[i][j - k] != 'G':
                    break
                if grid[i + k][j] != 'G':
                    break
                if grid[i][j + k] != 'G':
                    break
                y += 1
            result.append(y)
a = max(result)
result.remove(a)
a = (a * 4 + 1) * (max(result) * 4 + 1)
print(a)