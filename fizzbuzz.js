// Place your FizzBuzz code here.


for (var i=1; i < 21; i=i+1)
{
    if (i % 5 == 0 && i % 3 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
