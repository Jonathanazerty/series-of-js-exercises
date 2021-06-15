


(function() {

    let fizzbuzz="",x,y,a;
    for (a=1;a<=100;a++)
    {
        x = a%3 ==0;
        y = a%5 ==0;

        if(x)
        {
            fizzbuzz+="fizz"
        }
        if (y)
        {
            fizzbuzz+="buzz"
        }
        if (!(x||y))
        {
            fizzbuzz+=a;
        }
        fizzbuzz+="\n"
    }
    console.log(fizzbuzz);

})();
