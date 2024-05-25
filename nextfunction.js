const nextFunction = (values) => {
    let currentStep = 0;
    return {
        next: () => {
            if (currentStep < values.length) {
                return { completed: false, value: values[currentStep++] }
            } else {
                return { completed: true, value: undefined }
            }
        },
        reset: () => {
            currentStep = 0;
        },
        current: () => {
            return currentStep < values.length ? values[currentStep] : null
        }
    }
}

const values = ['step1', 'step2', 'step3']

const result = nextFunction(values)
console.log(result.next())
console.log(result.next())
console.log(result.next())
result.reset();
console.log(result.next())
console.log(result.current())