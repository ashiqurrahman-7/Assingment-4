1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    getElementById():::::
  a.  When we need to select one specific element we use getElementById()
  b. It is very fast
  c. ID must be unique
  d. Cannot select by class or tag (only id)

getElementsByClassName()::::
a.  When we need to select all element with a specific class we use getElementsByClassName();
b.  Returns multiple elements
c.  We cannot use .forEach() directly in here


querySelector():::
a. Select the first element that matches a CSS selector
b. Very flexible
c. Returns only the first match

querySelectorAll()::::
a. Select all elements that match a CSS selector
b. Not dynamic it is static
c. Supports .forEach() directly



2.  How do you create and insert a new element into the DOM?

  a. To create an  element we can use :
           document.createElement("tagName");
           example:let newDiv = document.createElement('div');

  b.  This will create a div and if i add something on it ::::::
        newDiv.innerHTML = "<h1> Hello Developers </h1>";


  c.   Insert it into the DOM :::::
            let parent = document.getElementById("container");
            parent.appendChild(newDiv);


  d.  This is our main html file here we create a div which id is container ..We append our content on it :::::
            <div id="container"></div>
            <button id="addBtn">Add Item</button>


    e..We can use it using javascript :::::
    
            let button = document.getElementById("addBtn");
                button.addEventListener("click", function () {
                    let newDiv = document.createElement("h1");
                    newDiv.textContent = "Hello Developers";
    
            let container = document.getElementById("container");
        container.appendChild(newDiv);
});




  
3. What is Event Bubbling? And how does it work? :::::::::
        Event Bubbling is a process where an event starts from the target element that user clicked then it propagates upward to its parent elements .This  process run all the way up to it came to document.
         The graph will be like this :
                child----parent----grandparent-----document


        Example:
            
             <div id="parent">
                  <button id="child">Click Me</button>
            </div>

           let parent = document.getElementById("parent");
           let child = document.getElementById("child");

                parent.addEventListener("click", function() {
                      console.log("Parent Clicked");
               });

                child.addEventListener("click", function() {
                      console.log("Button Clicked");
                });



4. What is Event Delegation in JavaScript? Why is it useful?

        Event Delegation is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.
       
    Example:::
       const parent = document.querySelector('.container');

        parent.addEventListener('click', function(event) {
              if (event.target.classList.contains('delete-btn')) {
                    console.log('Deleted');
              }
        });
    Instead of adding 100 event listeners, you add only one.

   In assignment 4 we use it in main container:
   mainContainer.addEventListener('click', function(event){
   if(event.target.classList.contains('interview-btn')){
       // handle interview
   }
    });





5. What is stopPropagation() methods?

       stopPropagation is a method that stops the event from bubbling to parent elements.

   Example ::

       <div id="parent">
            <button id="child">Click Me</button>
      </div>

      document.getElementById("child").addEventListener("click", function(event) {
            event.stopPropagation();
            console.log("Button clicked");
        });

        document.getElementById("parent").addEventListener("click", function() {
            console.log("Div clicked");
        });


      

    
