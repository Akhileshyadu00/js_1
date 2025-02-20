//  Immendiately Invoked Function Expressions (IIFE)


// (code)()  //remove global pollution


(function chai() {
    console.log(`DB connected`);
    
})(); //semicolon needed for end


( (name) => {
    console.log(`hiiiii ${name}`);
    
})("akhilesh")