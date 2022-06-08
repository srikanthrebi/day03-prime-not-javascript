let n,i,prime;
n = 17;
i = 0;
for(i=2;i<n;i++){
    if(n%i==0)
    {
        prime=1;
        break;
    }
    else{
        prime=0;
    }
}
if(prime==0){
    console.log(+n+"is prime number");
}
else{
    console.log(+n+"is not prime number");
}