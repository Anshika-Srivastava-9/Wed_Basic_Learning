// Immediate Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Conected`);                       //named IIFE
})();

// () ------> function
// () ------> Execution

( (name)=>{
    console.log(`DB Conected two ${name}`);          // Unnamed IIFE
})("Anshikaa");