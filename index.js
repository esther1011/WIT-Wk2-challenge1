// This my WkTwo ChallengeOne project
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What is your year of birth?`, (year) => {
    ageFinder(year)
    readline.close()
})


let ageFinder = (year) =>{
    let age = 2019 - year
    if (age < 18){
        console.log('Minor')
    }
    else if (age <36 && age > 18){
        console.log('Youth')
    }
    else if (age <150 && age > 36){
        console.log('Elder')
    }
    else{
        console.log('Please provide right input')
    }
}
