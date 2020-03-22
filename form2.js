function log()
{
    var a,b;
    a=document.getElementById('one').value;
    b=document.getElementById('two').value;
     
    if(a=="" || b=="" )
     {
          alert("Some field remain empty ");
          f1.one.value="";
          f1.two.value="";
          f1.one.focus();
     }
    else
     {
         if(a!="" && b!="" )
         {
           alert(":) form submitted (:");

        } 
     }
}