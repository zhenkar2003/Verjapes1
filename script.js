function setup() {

    var socket = io();
    var side = 30;
    var matrix = [];
    

    //! Getting DOM objects (HTML elements)
     let grassCountElement = document.getElementById('grassHashiv');
    // let grassEaterCountElement = document.getElementById('grassEaterCount');
    // let DevilCountElement = document.getElementById('DevilCount');
    // let FrcharacterCountElement = document.getElementById('FrcharacterCount');
    // let SccharacterCountElement = document.getElementById('SccharacterCount');
    // ! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);
 
    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        season = data.s;
        // grassCountElement.innerText = data.grassCounter;
        // grassEaterCountElement.innerText = data.grassCounter;
        // DevilCountElement.innerText = data.grassCounter;
        // FrcharacterCountElement.innerText = data.grassCounter;
        // SccharacterCountElement.innerText = data.grassCounter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(season == "spring"){
                    fill("green");
                } 
                 else {
                     fill("#0FAE18");
                 }  
                 rect(j * side, i * side, side, side);
            }     
                else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);   
                }
                 else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);   
                } 
                else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);  
                }
                 else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side); 
                }
                 else if (matrix[i][j] == 5) {
                    if(season == "spring"){
                    fill('yellow');
                }
                   else { 
                       fill("#061ECE");
                }
                    rect(j * side, i * side, side, side); 
                }
            }
           
        }
    }
}    
     
