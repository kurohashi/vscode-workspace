# Given a set S and number k, find out the maximum
# subset in which every pair in not divisible by k
n, k = map(int, input().strip().split(" "))
S = map(int, input().strip().split(" "))
d = {i:[] for i in range(k)}
for i in range(n): d[S[i]%k].append(S[i])
count = 0
if len(d[0]) > 0:
    count = 1
s = set([(i, k-i) for i in range(1, k//2+1)])
for i,j in s:
    if i != j:
        if len(d[i]) > len(d[j]):
            count += len(d[i])
        else:
            count += len(d[j])
    else:
        if len(d[i]) > 0:
            count += 1
print(count)