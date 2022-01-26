function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    let students = [];
    for (let index = 0; index < numbersOfStudents; index++) {
        students.push(studentSeat(index + 1))
    }
    return students;
}


const classRoom = (function () {
    return createClassRoom(10);
})();

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
