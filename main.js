let cart=document.getElementsByClassName('btn-success');

let products = [
    {
    name:'jute-1',
    tag:'j4',
    price:450,
    inCart:0
    },
    {
    name:'jute-1',
    tag:'j3',
    price:450,
    inCart:0
    },
    {
        name:'jute-1',
        tag:'j1',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'j2',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'s3',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'s2',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'s4',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'s1',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'u3', 
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'u1',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'u4',
        price:450,
        inCart:0
    },
    {
        name:'jute-1',
        tag:'u2',
        price:450,
        inCart:0
    },

]

for(let i=0; i<cart.length; ++i){
   cart[i].addEventListener('click', () =>{
       cartnumbers(products[i]);
       totalcost(products[i]);
   });
}

function onLoadCartNumbers(){
    let productNumbers= localStorage.getItem('cartnumbers');

    if(productNumbers){
        document.querySelector('.footer span').textContent = productNumbers ;
    }
}

function cartnumbers(product){
    console.log('the product',product);
    let productNumbers=localStorage.getItem('cartnumbers');

    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartnumbers',productNumbers+1);
        document.querySelector('.footer span').textContent = productNumbers+ 1;
    }else{
    localStorage.setItem('cartnumbers',1);
    document.querySelector('.footer span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems= localStorage.getItem('productsincart');
    cartItems= JSON.parse(cartItems);   

    if(cartItems !=null){
      if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
            cartItems[product.tag].inCart +=1;
      } else{
    product.inCart=1;
    cartItems ={
        [product.tag]:product
      }
    }
    localStorage.setItem("productsincart",JSON.stringify(cartItems));
}


onLoadCartNumbers();

function totalcost(product){
    
    let cartCost= localStorage.getItem('totalcost');
    
    
    console.log('price',product.price);
    if(cartCost != null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalcost", cartCost+product.price);
    }else{
        localStorage.setItem("totalcost", product.price);
    }
}

$('.btn-success').on('click', function() {
    document.getElementById("foot").style.display="inline-block";
  });

  $('#toggle-search').on('click', function() {
    $('#searchBar').toggle('display: inline-block');
  });

  $('#searchBar').on('click', function() {
    $('.modal-content').toggle('display: inline-block');
  });

  function search(){
  var str = $("#searchBar").val();
    if(str=='Seed Pencil'){
     console.log('hello',str);
    }
  }

  function myPage(){
      window.location.href="view.html";
  }

  