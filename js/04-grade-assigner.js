let score = prompt("Enter score. Enter number from 1 to 100: ")
switch (true) {
    case score < 60 && score > 0:
        console.log('You received an F.')
        break
    case (score >= 60 && score <= 69) && score > 0: 
        console.log('You received an D.')
        break
    case (score >= 70 && score <= 79) && score > 69:
        console.log('You received an C.')
        break
    case (score >= 80 && score <= 89) && score > 79:
        console.log('You received an B.')
        break
    case (score >= 90 && score <= 100) && score > 89:
        console.log('You received an A.')
        break
    default:
        console.log("Enter numbers between 1 and 100 only.")
}