// let users = {
//     name:"ali",
//     address:{
//         region:{
//             name:"Sirdaryo",
//             district:{
//                 name:"Gulistan",
//                 street:{
//                     name:"Istiqlol"
//                 }
//             }
//         }
//     },
//     contacts:{
//         names:{
//             emails:["ab@gmail.com"],
//             phones:["+998975661099","+99892311323"]
//         }
//     }
// }
// // consoleda : ali sirdaryo gulistan Istiqlol email tell

// let {
//     name: firstname,
//     address: {
//         region: {
//             name: regionName,
//             district: {
//                 name: districtName,
//                 street: { name: streetName }
//             }
//         }
//     },
//     contacts: {
//         names: {
//             emails: [email],
//             phones: [, tell]
//         }
//     }
// } = users

// console.log(firstname, regionName, districtName, streetName, email, tell)
const idInterval= () => {
    console.clear()
    console.log(new Date().toLocaleTimeString("uz-UZ"))
}
idInterval()
setInterval(idInterval, 1000)