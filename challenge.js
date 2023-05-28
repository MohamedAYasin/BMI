// Good Luck! You got this 💪🏾
// Creating a function called calculateBMI that is calculating the Body Mass Index (BMI) of a person.


function calculateBMI(height, weight) {
    const BMI = weight / (height * height);
    return BMI;
}

let aliHeight = 1.80;
let aliWeight = 73;

let mohamedHeight = 1.80;
let mohamedWeight = 73;

const aliBMI = calculateBMI(aliHeight, aliWeight);
const mohamedBMI = calculateBMI(mohamedHeight, mohamedWeight);

if (aliBMI > mohamedBMI) {
    console.log("Ali's BMI is higher");
} else if (aliBMI < mohamedBMI) {
    console.log("Mohamed's BMI is higher");
} else {
    console.log("Mohamed and Ali are equal");
}

// Example output: Mohamed's BMI is higher.
