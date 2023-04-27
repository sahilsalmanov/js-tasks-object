//object-task1


// const users = [
//     {
//     username: "David",
//     status: "online",
//     lastActivity: 10
    
//     }, {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22
    
//     }, {
    
//     username: "Bob", 
//     status: "online",  
//     lastActivity: 104
    
//     }
//     ]
//     let onlineUsers = []
//     for(let item in users) {
//         if(users[item].status == 'online') {
//          onlineUsers.push((users[item]).username)
//         }
//     }
//     // console.log(onlineUsers)
//     let result = ''
//     for(let i=0;i<onlineUsers.length;i++) {
//        result += onlineUsers[i] + ","
//     }
//    let result2 =  result.slice(0, -1)
//     console.log(`The following users are currently online: ${result2}`)



    //  object-task2

    //   function giveJobToStudent(student,jobName) {
    //     let updatedStudent = student
    //     updatedStudent.jobName = jobName
    //     return updatedStudent
    //   }

    //   const student = {
    //     fullName: 'Maxim',
    //     experienceInMonths: 12,
    //     stack: ['HTML','CSS','JavaScript','React']
    //   }

    //   let updatedStudent = giveJobToStudent(student, 'web developer')
    //   console.log(updatedStudent)

   
      

    //object-task3

    // function handleObject(obj,key,action) {
    //    if(action == 'get') {
    //    return obj[key]
    //    }
    //    else if(action == 'add') {
    //     obj[key] = ''
    //     return obj
    //    }
    //    else if(action == 'delete') {
    //      delete obj[key]
    //      return obj
    //    }
    //    else {
    //     return obj
    //    }
       
    // }

    //   const student = {

    //     name: 'Maxim',
    //     programmingLanguage: 'JavaScript',
    //     }

    
    
    //     const result = handleObject(student, 'programmingLanguage', 'delete');
    //     console.log('result', result);

    

    //object-task4

//    function getKiller(suspectInfo, deadPeople) {
//      for(let i in suspectInfo) {
//         // console.log(i)
//         // console.log(suspectInfo[i])
//         // console.log(deadPeople) 
//         total = 0
//         let len =  deadPeople.length
//         for(let j = 0;j<deadPeople.length;j++) {
//         // console.log(len)
//         if(suspectInfo[i].includes(deadPeople[j])) {
//             total++
//         }
//      }
//     //  console.log('total' + total)
//      if(total == len) {
//        console.log('Killer ' + i)
//      }
//      }
//     }

    

//    getKiller(
//     {
//     James : [ 'Jacob' ,  'Bill' ,  'Lucas' ],
//      Johnny : [ 'David' ,  'Kyle' ,  'Lucas' ],
//      Peter : [ 'Lucy' ,  'Kyle' ],
//     }, [ 'Lucas' ,  'Bill' ]
//     ); 

//    getKiller( {
//     'Brad': [],
//     'Megan': ['Ben', 'Kevin'],
//     'Finn': []
//    },
//    ['Ben'])




//object-task5


// const todaysWinner = {
//     prize: '$10,000',
//     }
    
//     const winnerApplicants = {
    
//     '001': {
//     name: 'Max',
//     age: 25
//     },
//     '201': {
//     name: 'Svetlana',
//     age: 20
//     },
//     '304': {
//     name: 'Catherine',
//     age: 35
//     },
//     }


// function getWinner(applicants,winnerObject) {
//     let myarr = []
// for(let item in applicants) {
//     let item2 = Number(item)
//     myarr.push(item2)
// }

// let randomIndex = Math.floor(Math.random() * myarr.length);
// let randomNum = myarr[randomIndex];
//  for(let item in applicants) {
//     if(Number(item) == randomNum) {
//         let assign = Object.assign(winnerObject,applicants[item])
//         return assign
//     }
//  }

// }


// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log('resultWinner', resultWinner); 
// getWinner(winnerApplicants,todaysWinner)





  

//object-task6




// function giveTalonsInOrder(patients,order) {
//     let myObj = []

//     for(let j=0;j<order.length;j++) {
//     for(let i=0;i<patients.length;i++) {
//     if(order[j] == patients[i].id) {
//         myObj.push(patients[i])
//     }
//    }
//     }
//     return myObj
   
// }



// const ordersArr = [4, 2, 1, 3];
// const people = [
// { id: 1, name: 'Maxim'},
// { id: 2, name: "Nicholas"},
// { id: 3, name: 'Angelina'},
// { id: 4, name: 'Vitaly'}
// ];





// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);

// giveTalonsInOrder(people, ordersArr);



//this-task1


// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//      this.level++
//      if(this.level == 2) {
//         this.stack.push('CSS')
//      }
//     else if(this.level == 3) {
//         this.stack.push('JavaScript')
//      }
//     else if(this.level == 4) {
//         this.stack.push('React')
//      }
//     else if(this.level == 5) {
//         this.stack.push('NodeJS')
//      }
//     else if(this.level > 5) {
//         alert('The student has learned all technologies')
//      }
//      return this
//     }
// }
//    student.improveLevel()
//    student.improveLevel()
//    student.improveLevel()
//    student.improveLevel()
//    student.improveLevel()
    






