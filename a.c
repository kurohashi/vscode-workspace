#include<stdio.h>
#include<string.h>
int main(int argc, char const *argv[])
{    
    char* a = "ABC";
    char* b = "BC";
    printf("%d %d %d %d %d", a, a + 1, a + 2, b, b + 1);  
    return 0;
}
