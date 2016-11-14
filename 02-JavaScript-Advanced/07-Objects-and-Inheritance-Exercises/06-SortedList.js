function generateList() {
    return (function () {
        let arr = []

        function balance() {
            arr.sort((a, b) => a-b)
        }

        function getSize() {
            return arr.length
        }

        let sachuim = {
            add: function (element) {
                arr.push(element)
                balance()
            },

            remove: function (element) {
                let index = element
                if (index > -1) {
                    arr.splice(index, 1);
                }

                balance()
            },

            get: function (index) {
                if (!(index < 0 || index >= arr.length)){
                    return arr[index]
                }
            },
        }

        sachuim.__defineGetter__('size', getSize)

        return sachuim
    })()
}

var myList = generateList();

myList.add(5);
myList.add(3);
myList.add(2);
console.log(myList.size);
