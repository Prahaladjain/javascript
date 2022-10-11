document.write("PATTERN 6","<br>");
for(let i = 0 ; i < 5 ; i++)
{
    for(let k = i + 1 ; k < 5 ; k++)
    {
        document.write("-","&nbsp");
    }
    let k = 1;
    for(let j = 1 ; j <= (2*i -1) ; j++)
    {
            document.write(k,"&nbsp");
            if(k === 1){
                k = 2;
            } else {
                k = 1;
            }
        
    }
    // for(let j = 0 ; j <= (i - 1) ; j++)
    // {
    //     if(i%2==0){
    //       if(j%2 == 0) {

    //           document.write(1,"&nbsp");
    //       } else {
    //            document.write(2,"&nbsp");
    //       }
    //     } else {
    //         if(j%2 == 0) {
    //            document.write(1,"&nbsp");
    //         } else {
    //             document.write(2,"&nbsp");
    //         }

    //     }
        
    // }
    document.write("<br>");
}