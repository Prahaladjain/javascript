document.write("PATTERN 9","<br>");
for(let i = 0 ; i < 5 ; i++)
{
    for(let j = 1 ; j <= 5-i ; j++)
    {
        document.write(j,"&nbsp")
    }
    for(let k = (5-i) ; k < 5 ; k++)
    {
        document.write("*","&nbsp");
    }
    for(let k = (5-i) ; k < 5 ; k++)
    {
        document.write("*","&nbsp");
    }
    for(let j = 5 - i ; j >= 1 ; j--)
    {
        if(j === 5){
            continue;
        }
        document.write(j,"&nbsp")
    }
    document.write("<br>");
}