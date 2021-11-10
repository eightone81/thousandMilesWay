let myObject = (function(){
   let value = 0;
   return {
       addValue : function () {
           value++
       },
       getValue : function () {
           return value;
       }
   }
})()

myObject.addValue();
console.log(myObject.getValue());