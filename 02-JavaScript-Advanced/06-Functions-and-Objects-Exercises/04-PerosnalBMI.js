function bmiCalculator(name, age, weight, height) {
    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: Math.round(weight),
            height: Math.round(height)
        },

        BMI: Math.round(weight / Math.pow(height / 100, 2)),
    }

    function getStatus() {
        if (result.BMI < 18.5) {
            return 'underweight'
        } else if (result.BMI < 25) {
            return 'normal'
        } else if (result.BMI < 30) {
            return 'overweight'
        } else if (result.BMI >= 30) {
            return 'obese'
        }
    }

    let status = getStatus()
    result.status = status

    if(result.status === 'obese') {
        result['recommendation'] = 'admission required'
    }

    return result
}

console.log(bmiCalculator('Peter', 29, 75, 182))