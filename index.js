var katzDeliLine = []
var number = 1

      function takeANumber(line) {

        line.push(number);
        number =  number + 1

        return (`Welcome`)
      }


      someLine = []

      takeANumber(someLine)
      number ///1
      someLine // [1]
      takeANumber(someLine)
      number //2
      someLine // [1, 2]
      takeANumber(someLine)
      
      someLine // [1,2, 1]
      takeANumber(someLine)
      [1,2,1,2]

    //  takeANumber(katzDeliLine, "Bill")  // ["Bill"]
      //takeANumber(katzDeliLine, "Kate") // ["Bill", "Kate"]
      //nowServing(katzDeliLine)

      takeANumber(katzDeliLine) // [1]
      takeANumber(katzDeliLine) // [1, 2]
      nowServing(katzDeliLine) // [2]
      nowServing(katzDeliLine) // []

      takeANumber(katzDeliLine) // [3]
      takeANumber(katzDeliLine) // [3,4]


      function nowServing(katzDeliLine) {

        if (katzDeliLine.length === 0) {
          return "There is nobody waiting to be served!";
        }
          else {
            var name = katzDeliLine.shift()
             return (`Currently serving ${name}.`);
          }
      }

      function currentLine(katzDeliLine) {
        var remainingPeople = [];

        for (let i = 0; i < katzDeliLine.length; i++) {
          remainingPeople.push(" " + [i+1] +". " + katzDeliLine[i])
        }

        if (katzDeliLine.length === 0) {
          return "The line is currently empty.";
        }
          else return ("The line is currently:" + remainingPeople);
      }
