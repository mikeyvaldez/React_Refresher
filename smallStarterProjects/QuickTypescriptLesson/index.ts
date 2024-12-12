// VARIABLES
// strict rules

//--------------------------------------------------------------------------------------------------------------------------------------
// let petNameNumTwo = "Mike" // this variable should always be a string
// let petNameNumTwo:string = "Mike" // you can declare the type of variable but typescript automatically infers the variable type
// it is best practice to let typescript infer a type


// petNameNumTwo = "Henry"
// petNameNumTwo = 123    // cannot change to a numbers
//-------------------------------------------------------------------------------------------------------------------------------------

// There are certain cases where you would have to declare the variable type

// let petName // default type would be 'any'



//----------------------------------
// let petName:string

// petName = "Michael"
// petName = 123
//--------------------------------


// let petNameOrAge:string | number | boolean= "Samantha" // you can declare the type in this manner 

// or in this manner
type PetNameOrAge = string | number | boolean
let petNameOrAge:PetNameOrAge = "Samantha"
petNameOrAge = "Michael"
petNameOrAge = 123
petNameOrAge = true


// objects are not typically defined with 'type'
// although it is completely valid
// it is more efficient to declare on object using 'interface'
// type ObjType = {
//     name: string;
//     age: number;
//     isCool: boolean;
//     firstName?: string  
// }

// interfaces can only define an object.
// while type can define anything you want
interface ObjInterface {
    name: string;
    age: number;
    isCool: boolean;
    firstName?: string  
}

const obj: ObjInterface = {
    name: "Lorenzo",
    age: 26,
    isCool: false,    
}

const array: ObjInterface[] = []

// array.push("dnopvneon") // cannot push just a string into the array

// array.push({                   // you also cannot push an object with different key values
//     ldjnvj: 'lsfnfv'           // it must match the properties that are in the originally created object 
// })

// const obj : {
//     name: string;
//     age: number;
//     isCool: boolean;
//     firstName?: string    
// } = {
//     name: "Lorenzo",
//     age: 26,
//     isCool: false,    
// }

if(obj.firstName){
    console.log(obj.firstName)
}

//-----------------------------------------------------


