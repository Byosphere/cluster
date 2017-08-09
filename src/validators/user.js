import isEmpty from 'lodash/isEmpty';


export default function validateUser(user) {
    let errors = {};

    return {
        errors,
        isValid: isEmpty(errors)
    }
}