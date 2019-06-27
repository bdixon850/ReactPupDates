const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string to use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.breed = !isEmpty(data.breed) ? data.breed : "",
    data.age = !isEmpty(data.age) ? data.age : "",
    data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : "",
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // Check names
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    // Check email
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // Check Dog breed
    if (Validator.isEmpty(data.breed)) {
        errors.breed = 'Breed field is required';
    }

    // Check age 
    if (Validator.isEmpty(data.age)) {
        errors.age = 'Age field is required';
    }

    // Check Zip Code
    if (Validator.isEmpty(data.zipcode)) {
        errors.zipcode = 'Zip code field is required';
    }

    // Check Password
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};