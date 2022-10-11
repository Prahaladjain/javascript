document.write("PATTERN 10","<br>");
for(let i = 0 ; i < 5 ; i++)
{
    for(let k = i + 1 ; k < 5 ; k++)
    {
        document.write("-","&nbsp");
    }
    for(let j = 1 ; j <=1+i  ; j++)
    {
        document.write(j,"&nbsp")
    }
    for(let j = i ; j >=1 ; j--)
    {
        document.write(j,"&nbsp")
    }
    document.write("<br>");
}