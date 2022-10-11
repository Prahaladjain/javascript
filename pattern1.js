document.write("PATTERN 1 ","<br>")
for(let i = 0 ; i < 5 ; i++)
{
    for(let j = 5 ;j >= (5 - i)  ;j-- )
    {
        document.write(j,"&nbsp")
    }
    document.write("<br>");
}