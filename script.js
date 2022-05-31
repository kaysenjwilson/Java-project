// to write something to the console type console.log(add stuff in here or add quotes to write text out)
// this is an object inside Javascript, it will be how you will setup a single product name.
// product = {product: "Hammer",}
productArray = [];
function addProduct() {
  // Add your code here!
let product = document.getElementById("product").value

let div = document.createElement("div");

let output = document.getElementById("output")

console.log(output)


console.log(product)



  // Hint: "get the elements from the HTML file! using a getElementById('element id name here')
  // then get a value from the input.";

  // Hint: Here is where you could check if the input is empty, use an if statement with a condition
  // that would see if the element .value === ""

  // Hint: You could push your product to a new array once you create a new variable
  // that makes a single object {} with the product variable you made above.
  // Please look up how to use push on an array here: https://www.w3schools.com/jsref/jsref_push.asp
  let newProduct = { product };

  productArray.push(newProduct)

  console.log(productArray)

 // create loop
 for (let i = 0; i < productArray.length; i++) {
  output.style.display="block";
  div.textContent = `${productArray[i].product}`;
  output.appendChild(div)
 }




 //set output to display.style= to block (string)





 // set div textcontent = to productArray

  


  // Hint: Use a loop on your product array and set the max length of the loop to the array using
  // dot notation (array.length) and then you do the following:

  // set the input to empty, similar how you would check in the if statement.
  // then set the output div to display block, its normally set to none, which means invisible
  // set the div.textContent equal to the the array index number [i] and dot notation of the product

  // this line is to prevent the webpage from reloading.
  return false;
}
