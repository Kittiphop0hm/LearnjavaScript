const calGrade = function(score) {
    if (0 <= score && score < 50) return 'E'
    if (50 <= score && score < 60) return 'D'
    if (60 <= score && score < 70) return 'C'
    if (70 <= score && score < 80) return 'B'
    if (80 <= score && score <= 100) return 'A'
    return 'X'
}
console.log(calGrade(60));
const student = {
    id: 555,
    name: 'Ohmmy',
    content: {
        header: 'Basic JavaScript',
        artist: 'Ohm.js',
        location: {
            country: 'USA',
            myLocation(location) {
                return `My location is ${location}`
            }
        }
    },
    helloMySelf(name) {
        return `Hello ${name}`
    }
}
let {content: {header: header_coontent}} = student
let {content: {artist}} = student //equally to const artist = student.artist 
let {content: {location: {country: student_coutry}}} = student
let {name: myname} = student
let {content: {location: {country: myLocation}}} = student
let {content: {location: {myLocation: locationIs}}} = student //can't change name function in object
console.log(header_coontent);
console.log(artist);
console.log(student_coutry);
console.log(myname);
console.log(myLocation);
console.log(student.helloMySelf('Ohm'));
console.log(student.content.location.myLocation('USA'));
console.log(student.content.location.myLocation('Thailand'));





