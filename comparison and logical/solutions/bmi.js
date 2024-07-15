let person = {
    name: 'Tajdang',
    weight: 70,
    height: 1.72
};

bmi = person.weight / (person.height * person.height);
bmi = Number(bmi.toFixed(2));
if (bmi < 18.5) {
    console.log(`Taj BMI is ${bmi}, so you are underweight.`);
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Taj BMI is ${bmi}, so you have a normal weight.`);
}
else {
    console.log(`Taj BMI is ${bmi}, so you are overweight.`);
}