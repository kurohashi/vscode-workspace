#include<stdio.h>
#include<string.h>
int main(int argc, char const *argv[])
{    
    int pens;
    int packets_of_pencils;
    int notebooks;
    int cost_pen = 10;
    int cost_packet_of_pencils = 50;
    int cost_notebook = 50;
    int price;
    printf("Enter number of pens = ");
    scanf("%d", &pens);
    printf("Enter number of packets of pencils = ");
    scanf("%d", &packets_of_pencils);
    printf("Enter number of notebooks = ");
    scanf("%d", &notebooks);
    price = (pens * cost_pen) + (packets_of_pencils * cost_packet_of_pencils) + (notebooks * cost_notebook);
    printf("Your total price is = %d", price);
    return 0;
}