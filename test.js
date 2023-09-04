// function validParen(str) {
//   if (str.length % 2 !== 0) return false
//   let res = false
//   let checklist = [0]
//   let chcval = 0
//   for (let i = 0; i < str.length; i++) {
//     if (str[0] == '(' || str[0] == '[' || str[0] == '{') {
//       if (i === 0) {
//         while (checklist[checklist.length - 1] < str.length - 1) {
//           if (checklist.length == 0) {
//             chcval = i + 1
//             checklist.push(chcval)
//           } else {
//             chcval += 2
//             checklist.push(chcval)
//           }
//           console.log(checklist, 'checklist')
//         }
//       }
//     }

//     if (res === false) {
//       return false
//     }
//   }
//   return res
// }

// console.log(validParen('(()))]'))

// // for (let i = 0; i < checklist.length; i++) {
// //     if (
// //       str[checklist[i] - 1] !== ')' ||
// //       str[checklist[i] - 1] == ']' ||
// //       str[checklist[i] - 1] == '}'
// //     ) {
// //       if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
// //         res = true
// //       } else {
// //         return false
// //       }
// //     }
// //   }
