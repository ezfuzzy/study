#include <iostream>
using namespace std;
typedef long long ll;
bool huhu = false;
int f(ll n){
    if (n == 0)
        return 1;

    n -= 1;
    n %= 12;

    int arr[12] = {1, 2, 4, 8, 3, 6, 12, 11, 9, 5, 10, 7};
    return arr[n];
}
//
int main(){
    char ans[]="rgjgmbuyhbfcx";
    for (ll i = 0; i < 13; i++)
        ans[i] ^= f(13+i*i*i);
    
    puts(ans);    
}