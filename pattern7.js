document.write("PATTERN 7","<br>");
for(let i = 0 ; i < 5 ; i++)
{
    for(let j = 0 ; j <= i ; j++)
    {
        if(i % 2 == 0) {
           if(j%2 == 0) {

               document.write(1,"&nbsp");
           } else {
               document.write(0,"&nbsp");
          }
        } else {
            if(j % 2 == 0) {
                document.write(0,"&nbsp");
            } else {
                document.write(1,"&nbsp");
            }
            
        }
    } 
    document.write("<br>");
}