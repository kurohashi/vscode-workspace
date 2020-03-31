n, m = input().split()
n = int(n)
m = int(m)
grid = []
for i in range(n):
    grid.append(list(input()))
result = []
x = 2
while x:
    tmpMax = 1
    indMax = [-1, -1]
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 'G':
                y = 1
                for k in range(1, min(i + 1, j + 1, n - i, m - j)):
                    if grid[i - k][j] != 'G':
                        break
                    if grid[i][j - k] != 'G':
                        break
                    if grid[i + k][j] != 'G':
                        break
                    if grid[i][j + k] != 'G':
                        break
                    y += 4
                if y > tmpMax:
                    tmpMax = y
                    indMax = [i, j]
    result.append(tmpMax)
    grid[indMax[0]][indMax[1]] = 'B'
    tmpMax -= 1
    tmpI = 1
    while tmpMax:
        grid[indMax[0]][indMax[1] - tmpI] = 'B'
        grid[indMax[0]][indMax[1] + tmpI] = 'B'
        grid[indMax[0] - tmpI][indMax[1]] = 'B'
        grid[indMax[0] + tmpI][indMax[1]] = 'B'
        tmpMax -= 4
        tmpI += 1
    x -= 1
a = result[0] * result[1]
print(a)