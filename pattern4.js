document.write("PATTERN 4","<br>");
for(let i = 0 ; i < 5 ; i++)
{
    for(let k = i + 1 ; k < 5 ; k++)
    {
        document.write("-","&nbsp");
    }
    for(let j = 5 ; j >= (5 - i) ; j--)
    {
        document.write(j,"&nbsp")
    }
    document.write("<br>");
}