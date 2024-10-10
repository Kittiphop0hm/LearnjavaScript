//neted function
function x(num) {
    function y() {
        return num * 2 
    }
    return y()
}

console.log(x(5));