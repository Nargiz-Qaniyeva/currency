$(document).ready(function(){
    let input=document.getElementById("input");
    let select=document.getElementById("select");

    axios.get("https://api.exchangerate.host/latest?base=AZN",)
    
          .then(function (response) {
                    
                    $("button").on( "click", function(event) {
                        var x = document.querySelector(".form-select");
                        document.getElementById("select").innerHTML =  x.value;
                        console.log(response.data.rates*input.value[select]);
                    
                    } );
                 
                 
          })

          .catch(function (error) {
            console.log(error);
          })
})