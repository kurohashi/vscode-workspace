n, m = input().split()
grid = []
for i in range(int(n)):
    grid.append(input())
result = []
x = -1
for i in range(int(n)):
    for j in range(int(m)):
        if grid[i][j] == 'G':
            result.append(1)
            x += 1
            y = 0
            for k in range(1, min(i + 1, j + 1, n - i + 1, m - j + 1)):
                if grid[i - k][j] != 'G':
                    break
                if grid[i][j - k] != 'G':
                    break
                if grid[i + k][j] != 'G':
                    break
                if grid[i][j + k] != 'G':
                    break
                y += 1
            result[x] += y