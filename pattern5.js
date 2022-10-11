document.write("PATTERN 5","<br>");
for(let i = 0 ; i < 5 ; i++)
{
    for(let j = 0 ; j <= i ; j++)
    {
        if(j%2 == 0) {

            document.write(1,"&nbsp");
        } else {
            document.write(0,"&nbsp");
        }
    }
    document.write("<br>");
}