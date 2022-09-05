let valorDisplay = ""
let valorNumerico = ""
let operacao = ""

function exibirValorDisplay(param)
{
    
    if(typeof param === "number")
    {
        valorDisplay = valorDisplay + param;   
        document.getElementById("valorDisplay").textContent=valorDisplay
    }
    
    if(typeof param === "string") 
    {
        if(param === 'AC') 
        {
         valorDisplay = (document.getElementById("valorDisplay").textContent="")
        }    
        if(param === "+/-")
        {
            valorDisplay= - parseFloat(valorDisplay)
            document.getElementById("valorDisplay").textContent=valorDisplay

        }
        if(param === "%")
        {   
            valorDisplay=(valorDisplay*valorNumerico)/100;
            document.getElementById("valorDisplay").textContent=parseFloat(valorDisplay);
        }
        if(param === "/")
        {
            valorNumerico=parseFloat(valorDisplay);
            valorDisplay="";
            operacao ="/";
        }
        if(param === "x")
        {
            valorNumerico=parseFloat(valorDisplay);
            valorDisplay="";
            operacao="x";
        }
        
        if(param === "+")
        {
            valorNumerico=parseFloat(valorDisplay);
            valorDisplay="";
            operacao="+";
        }
        if(param === "-")
        
        {
            valorNumerico=parseFloat(valorDisplay);
            valorDisplay="";
            operacao="-";
        }

        if(param === ",") 
        {
            valorDisplay = valorDisplay + "."
            document.getElementById("valorDisplay").textContent=valorDisplay;
        }

        if(param === "=")
        {
        if(operacao === "+")
            {
                valorDisplay=valorNumerico + parseFloat(valorDisplay);
                document.getElementById("valorDisplay").textContent=valorDisplay
                operacao="";
             }
         if(operacao ==="x")
            {
                valorDisplay=valorNumerico*parseInt(valorDisplay)
                document.getElementById("valorDisplay").textContent=valorDisplay
                operacao="";
            }
         if(operacao==="/")
            {
                valorDisplay=valorNumerico/parseInt(valorDisplay)
                document.getElementById("valorDisplay").textContent=valorDisplay
                operacao=""
            }
         if(operacao==="-")
             {
                valorDisplay=valorNumerico-parseFloat(valorDisplay);
                document.getElementById("valorDisplay").textContent=valorDisplay
                operacao="";
             }
       
        }   
    }
} 
