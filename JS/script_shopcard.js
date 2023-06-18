var qty, total, price = 0;
var model, colour = "";

function Mchange($a){

    document.getElementById("ModelType").innerHTML=$a;
    
    if($a=="iPhone 7 Plus"){
        document.getElementById('Pic').src="images/phones/iP7black.jpg";
        document.getElementById(`Up`).innerHTML="850";
    }
    else if($a=="iPhone 11"){
        document.getElementById('Pic').src="images/phones/iP11black.jpg";
        document.getElementById(`Up`).innerHTML="1000";
    }
    else if($a=="iPhone XR"){
        document.getElementById('Pic').src="images/phones/iPXRblack.jpg";
        document.getElementById(`Up`).innerHTML="700";
    }
    
    Cchange($b);
    var $b=" ";
    C.value=" ";
    document.getElementById("ColourType").innerHTML=" ";

    Qchange();

    model = $a;
   
}

function Cchange($b){

    document.getElementById("ColourType").innerHTML= $b;

    if(document.getElementById("ModelType").innerHTML=="iPhone 7 Plus"){
        switch ($b){
            case "Black": 
                document.getElementById("Pic").src="images/phones/iP7black.jpg";
                break;
            case "Gold": 
                document.getElementById("Pic").src="images/phones/iP7gold.jpg";
                break;
            case "White":
                document.getElementById("Pic").src="images/phones/iP7white.jpg";
                break;
        }
    }
    else if(document.getElementById("ModelType").innerHTML=="iPhone 11")
	{
        switch($b) {
            case "Black":
                document.getElementById("Pic").src="images/phones/iP11black.jpg";
                break;
            case "Gold":
                document.getElementById("Pic").src="images/phones/iP11gold.jpg";
                break;
            case "White":
                document.getElementById("Pic").src="images/phones/iP11white.jpg";
                break;				
        }
    }
    else if(document.getElementById("ModelType").innerHTML=="iPhone XR")
	{
        switch($b) {
            case "Black":
                document.getElementById("Pic").src="images/phones/iPXRblack.jpg";
                break;
            case "Gold":
                document.getElementById("Pic").src="images/phones/iPXRgold.jpg";
                break;
            case "White":
                document.getElementById("Pic").src="images/phones/iPXRwhite.jpg";
                break;				
        }
    }
    colour = $b; 
}

function Qchange (){
    // Link different product with different prices
    qty=document.getElementById('Q').value;
    // console.log(qty);
    //  if (qty<=0){ 
    //  } 
    document.getElementById("QuantityType").innerHTML=qty;

    // to get the total price, as it will number --> parseInt
    price=parseInt(document.getElementById(`Up`).innerText);
    total = qty*price;
    document.getElementById('Tp').innerHTML=total;
}

function submit(){

    console.log(model);
    console.log(colour);
    console.log(qty);

    if(model == undefined){
      //  alert('enter qty')
        document.getElementById("error_model").innerHTML = "Please, select model!"
        return false;
    }
    
    if(colour == undefined){
        //  alert('enter qty')
        document.getElementById("error_colour").innerHTML = "Please, select colour!"
        return false;
    } 
    if(qty == undefined || qty == "" || qty == null  ){
        //  alert('enter qty')
        document.getElementById("error_quantity").innerHTML = "Please, select quantity!"
        return false;
    }

    document.getElementById('left').style.display="none";

    var text=     "<br>"
                + "<h4>Thank you to making an order with us.</h4>"
                + "<h4>By clicking on the Continue botton, you can continue your order, where you can give your dispaching address, then finish it via card payment.</h4>"
                + "<br>"
                + "<h4>You selected the following item.</h4>"
                + "<h5>Model:   " + model + "</h5>"
                + "<h5>Colour:  " + colour + "</h5>"            
                + "<h5>Quantity:  " + qty + "</h5>" 
                + "<h5>Price:   " + total + "</h5>"
                + "<br>"
                + "<br>"
                + "<button class='buttons'>Continue</button>";  
    

    document.getElementById('result').style.display="block";
    document.getElementById("result").innerHTML = text;
    //  alert(colour)
    
    // document.getElementById('left').style.visibility="visible"; 
}