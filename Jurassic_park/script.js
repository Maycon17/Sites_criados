//validação dos dados

function validando ()
{
    var primenome = document.forms["meu_form"].prime_nome.value;
    
    if (primenome == "")
    {
        alert("Informar o primeiro campo.");
        return;
    }
    
    var ultnome = document.forms["meu_form"].ult_nome.value;
    
    if (ultnome == "")
    {
        alert("Informar o segundo campo.");
        return;
    }
    
    var primesobre = document.forms["meu_form"].prime_sobre.value;
    
    if (primesobre == "")
    {
        alert("Informar o terceiro campo.")
        return;
    }
    
    var ultsobre = document.forms["meu_form"].ult_sobre.value;
    
    if (ultsobre == "")
    {
        alert ("Informar o quarto campo.");
        return;
    }
    
    var proseguir = confirm ("Tudo certo para criar o nome?");
    
    if (proseguir == true)
    {
        alert ("O nome do seu dinossauro é: " + primenome + ultsobre + primesobre + ultnome + "sauro");
    }
}

//AJAX

var req;

function Informacao(dinossauro)
{
    if (dinossauro == "Velociraptor")
    {
        var url = "dinoVelociraptor.html";
    }
    else if (dinossauro == "Triceratops")
    {
        var url = "dinoTriceratops.html";
    }
    
    if (window.XMLHttpRequest)
    {
        req = new XMLHttpRequest();
        req.onreadystatechange = tratarRecebimento;
        req.open("GET", url);
        req.send(null);
    }
    else if (window.ActiveXObject)
    {
        req = new ActiveXObject ('Microsoft.XMLHTTP');
        req.onreadystatechange = tratarRecebimento;
        req.open("GET", url);
        req.send();
    }
}

function tratarRecebimento ()
{
    if (req.readyState == 4)
    {
        if (req.status == 200)
        {
            document.getElementById ("Ajax").innerHTML = req.responseText;
        }
        else
        {
            alert("Possível erro: " + req.status);
        }
    }
}