<!DOCTYPE html>
<html>
     <head>
          <title>Triangle</title>
     </head>
     <body>
          <script language="Javascript" type="text/javascript">
               var a = prompt("Enter first side");
               var b = prompt("Enter second side");
               var c = prompt("Enter third side");
               function triangleType(a, b, c)
               {
                    if ((a == b)&&(b == c))
                    {
                         return "Equilateral Triangle";
                    }
                    if (a == b || b == c || a == c) 
                    {
                         return "Isosceles Triangle";
                    } 
                    else 
                    {
                         return "Scalene Triangle";
                    }
               }
               function area(a, b, c)
               {
                    var s = (a + b + c) / 2;
                    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                    return area;
               }
               document.write("<br><br>Triangle is " + triangleType(a, b, c));
               document.write("<br><br>Area is " + area(a, b, c));
          </script>
     </body>
</html>
