function receivesAFunction(meeting){
    meeting ();
    
}

function returnsANamedFunction() {
    function myNamedFunction() {
    }
    return myNamedFunction;
  }
  

function returnsAnAnonymousFunction(){
    return function () {
    console.log ("This is an anonymous function");
    }
}
