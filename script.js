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
    


//this-task2
  

// const dog = {
//     name: 'Charlie',
//     type: 'Dog',
//     makeSound() {
//         return 'Wow-Wow'
//     }
// }

// const bird = {
//     name: 'Petya',
//     type: 'Sparrow',
//     makeSound() {
//         return 'Cheek-chirp'
//     }
// }


// function makeDomestic(domestic) {
//     let a = {
//         isDomestic: domestic
//     }
//     let animal = Object.assign(a,this)
//     let sound = animal.makeSound()
//     console.log(`type of ${this.type} ${this.name} says ${sound}`)
// }

// makeDomestic.call(bird, true)
// const bindMethod = makeDomestic.bind(dog)
// bindMethod(false)
// makeDomestic.apply(bird, [true])



//this-task3

// const footballer = {
//     fullName: 'Cristiano Ronaldo',
//     attack: function() {
//     console.log(`${this.fullName} is now with the ball and starting to attack!`);
//     },

//     scoreGoal: function(sound) {
//     console.log(`${this.fullName} scored a goal! Wow!`);
//     this.celebrate(sound);
//     },
//     celebrate(sound) {
//     console.log(sound);
//     },
//     goToSubstitution: function(newPlayer) {
//     console.log(`${this.fullName} goes to replace. ${newPlayer} enters the field`);
//     }
//     }
    
   
//     const attack = footballer.attack;
//     const score = footballer.scoreGoal;
//     const substitute = footballer.goToSubstitution;

    


//     const binded = attack.bind(footballer)
//     binded()
//     score.call(footballer, 'Siiiiiii');
//     substitute.apply(footballer, ['Paulo Dibala']);




// date-task1
 

// function getDateFormat(date, separator = '.') {
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear().toString();
//     const separatorChar = separator === '-' ? '-' : '.';
//     return `${day}${separatorChar}${month}${separatorChar}${year}`;
//   }


//   const date = new Date('2001.5.05');
//   const formattedDate = getDateFormat(date);
//   console.log(formattedDate) 
//   const formattedDateWithDash = getDateFormat(date, '-');
//   console.log(formattedDateWithDash) 




  //date-task2


//   function getDaysBeforeBirthday(nextBirthdayDate) {
//     const currentDate = new Date();
//     let nextBirthdayYear = currentDate.getFullYear();
//     const nextBirthdayMonth = nextBirthdayDate.getMonth();
//     const nextBirthdayDay = nextBirthdayDate.getDate();
//     if (nextBirthdayMonth < currentDate.getMonth() ||
//         (nextBirthdayMonth === currentDate.getMonth() && nextBirthdayDay < currentDate.getDate())) {
//       nextBirthdayYear += 1;
//     }
//     const closestBirthdayDate = new Date(nextBirthdayYear, nextBirthdayMonth, nextBirthdayDay);
//     const msDifference = closestBirthdayDate.getTime() - currentDate.getTime();
//     const daysDifference = Math.round(msDifference / (1000 * 60 * 60 * 24));
//     return daysDifference;
//   }



//   const nextBirthdayDate = new Date('2023-08-15');
//   const daysBeforeBirthday = getDaysBeforeBirthday(nextBirthdayDate);
//   console.log(`There are ${daysBeforeBirthday} days until my next birthday!`);

  
// date-task3


// function addDays(date, days = 1) {
//     const millisecondsPerDay = 24 * 60 * 60 * 1000;
//     const timestamp = date.getTime() + (days * millisecondsPerDay);
//     return new Date(timestamp);
//   }

//   const currentDate = new Date();
//   const nextWeek = addDays(currentDate, 7);
//   console.log(nextWeek); 

  
  









