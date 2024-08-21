//Practices-G1
//1
const detailedType = (value) => {
    if (Array.isArray(value)) return 'array'
    if (value === null) return 'null'
    return typeof(value);
}
console.log(detailedType('hello'));
console.log(detailedType(123));
console.log(detailedType(true));
console.log(detailedType({}));
console.log(detailedType([]));
console.log(detailedType(null));
console.log(detailedType(function () {}));
console.log(detailedType(undefined));
console.log(detailedType(Symbol()));

//2
//v1
const isValidPasswordV1 = (password) => {
    if (password.search(/[a-z]/) >= 0) {
        if (password.search(/[A-Z]/) >= 0) {
            if (password.search(/[0-9]/) >= 0) {
                if (password.length > 7) {
                    return true;
                }
            }
        }   
    }       
    return false;
}

//v2
//Use class RegExp
const isValidPasswordV2 = (password) => {
    let reqPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if (reqPassword.test(password)) return true;
    return false;
}

console.log('-------------------v1------------------');
console.log(isValidPasswordV1('Password123'));
console.log(isValidPasswordV1('pass123'));
console.log(isValidPasswordV1('PASSWORD123'));
console.log(isValidPasswordV1('Pass123'));
console.log('-------------------v2------------------');
console.log(isValidPasswordV2('Password123'));
console.log(isValidPasswordV2('pass123'));
console.log(isValidPasswordV2('PASSWORD123'));
console.log(isValidPasswordV2('Pass123'));