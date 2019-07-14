
/*
============================================
; Title: App Component
; Author: Griselda Balmaceda
; Description:Typescript file
;===========================================
*/
//setting default values
let firstName: string = "Griselda";
let lastName: string = "Balmaceda";

//declaring myName function
function myName(firstName:string, lastName:string):string{
    return 'hello' + firstName + ' '+  lastName;
}
//calling myName and outputting result in console
console.log(myName('Griselda','Balmaceda'))