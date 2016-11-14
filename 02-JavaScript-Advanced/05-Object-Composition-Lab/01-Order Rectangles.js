function solve(array) {
    let rectangles = []
    let count = 1;
    for (let arr of array) {
        let rect = produceRectangle(Number(arr[0]), Number(arr[1]), count++);
        rectangles.push(rect);
    }

    rectangles.sort((a, b)=> a.compareTo(b))
    return(rectangles)

    function produceRectangle(width, height, id) {
        let rect = {
            id: id,
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: (other) => {
                return other.area() - rect.area() || other.width - rect.width
            }
        }

        return rect;
    }
}
console.log(
solve([[1,20],[20,1],[5,3],[5,3]])
)