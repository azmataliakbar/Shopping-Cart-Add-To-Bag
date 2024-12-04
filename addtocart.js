const product = [
    {
      id: 1,
      image: 'images/1.jpg',
      title: 'Rhodium-Plated CZ Floral Studs',
      price: 1950,
      
    },
    {
      id: 2,
      image: 'images/2.jpg',
      title: 'Women Swimming Dress',
      price: 3550,
      
    },
    {
      id: 3,
      image: 'images/3.jpg',
      title: 'Women Knee-Length Red Skirts',
      price: 3700,
      
    },
    {
      id: 4,
      image: 'images/4.png',
      title: 'Sport Jogging Red Jersey',
      price: 2400,
      
    },
    {
      id: 5,
      image: 'images/5.jpg',
      title: 'Pure Cotton Black Color T-shirt',
      price: 2100,
      
    },
    {
      id: 6,
      image: 'images/6.jpg',
      title: 'Men React X Running Shoes',
      price: 9600,
      
    },
    {
      id: 7,
      image: 'images/7.jpg',
      title: 'Men Slim Fit Regular Green Color Shorts',
      price: 2350,
      
    },
    {
      id: 8,
      image: 'images/8.jpg',
      title: 'Men Fresh Deodrant Nivea 150ml',
      price: 1850,
      
    },
    {
      id: 9,
      image: 'images/9.png',
      title: 'Miss Rose Advance Version Color Lipstick',
      price: 2750,
      
    },
    {
      id: 10,
      image: 'images/10.png',
      title: 'Women Gold & Pearl Jewellery set',
      price: 35500,
      
    },
    {
      id: 11,
      image: 'images/11.png',
      title: 'Men Black & Green Sun Glasses',
      price: 2350,
      
    },
    {
      id: 12,
      image: 'images/12.png',
      title: 'I Phone I-12 Max Dark Gray ',
      price: 255500,
      
    }
  ];

  const categories = [... new Set(product.map((item)=> {return item}))]
  let i=0;
  document.getElementById('root').innerHTML=categories.map((item)=>
  {
      var {image, title, price} = item;
      return(
        `<div class='box'>
          <div class='image-box'>
          <img class='images' src=${image}></img>
          </div>
          <div class='bottom'>
          <p>${title}</p>
          <h2>Rs. ${price} .00 </h2>`+
          "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+`
          </div>
          </div>`
      )
  }).join('')

  var cart = [];

  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }

  function delElement(a){
    cart.splice(a,1);
    displaycart();
  }


  function displaycart() {
    let j = 0;
    let total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Your Cart is empty";
      document.getElementById('total').innerHTML = "Rs. "+0+".00 ";

    } else {
      document.getElementById('cartItem').innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total=total+price;
        document.getElementById('total').innerHTML = "Rs. "+total+" .00";

        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:2px;'>${title}</p>
            <h2 style='font-size:15px;'>Rs. ${price}.00</h2>
            <i class='fa fa-trash' aria-hidden='true' onclick='delElement(${j++})'></i>
          </div>`
        );
      }).join('');
    }
  }
  