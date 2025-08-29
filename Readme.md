What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 1.getElementByid("id") returns a single element .
2.getElementsByClassName("class") returns a live htmlcollection.
3.querySelector(".class") returns the first match;
4 . querySelectorAll(".class") returns a static NodeList.


How do you create and insert a new element into the DOM?
ans: 1.use document.createElement("tag")
2 . Add content → .textContent / .innerHTML 
3 .  Set attributes → .id, .className, .setAttribute() 
 4 . Insert into DOM → *  appendChild() → end *  prepend() → beginning *  insertBefore() → before another element 
 insertAdjacentElement() → specific position 


 What is Event Bubbling and how does it work?
ans :- Events start from the target element and bubble up to ancestors. Useful for delegation.


What is Event Delegation in JavaScript? Why is it useful?
ans:- Attach one listener to a parent and handle events from children using event.target. Efficient for dynamic elements.


What is the difference between preventDefault() and stopPropagation() methods?
ans:preventDefault() stops default browser behavior .
stopPropagation() stops the event from bubbling up.