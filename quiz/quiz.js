// Variables
var x = document.getElementById("questions")
var y = document.getElementById("test")
var z = document.getElementById("sub")
var a = document.getElementsByClassName("choices")[0]
var b = document.getElementsByClassName("choices")[1]
var c = document.getElementsByClassName("choices")[2]
var d = document.getElementsByClassName("choices")[3]
var score = 0
var page = 0


// Arrays
var quests = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
var q1 = ['1. Which of the following is important when creating animations using JavaScript?', 'English', 'History', 'Art', 'Mathematics']
var q2 = ['2. Which of the following is used to control timing in JavaScript Animations', 'timer()', 'keyframes()', 'None of the these', 'setTimeout()']
var q3 = ['3. Which of the following is the correct syntax to create a canvas object', '.draw();', '.create();', '.instantiate();', '.getContext();']
var q4 = ['4. When should you use the new HTML5 canvas tag?', 'To draw graphics via scripting', 'To create a white background', 'To paint using your mouse', "To draw graphics when you don't want to use scripting"]
var q5 = ['5. When using the canvas tag, which technique is used to draw the graphic to the page?', 'None of these', 'The canvas element has native support for geometric shapes, gradients, and fill colors; it does not require any other code to draw these', 'Only server side code can be used to draw on the the canvas element', 'A scripting language (such as Javascript) is used']
var q6 = ['6. Which is the correct syntax to round the corners of an element?', 'border-radius: 15px;', 'border-roundness: 15px;', 'border: radius15^', 'border-radius: 15^']
var q7 = ['7. If you pass a negative value to the rotate() method, what is the result?', 'It rotates the element counter-clockwise', 'It flips the element into the mirrored the position', 'It rotates the element clockwise', 'It wont work']
var q8 = ['8. How does the new Flexible Box Model eliminate the need for using float?', 'By positioning all objects at the coordinates 0,0', 'By positioning objects relative to a parent object', 'By allowing the browser to position the objects', 'By providing a container positioned by properties assigned']
var q9 = ['9. Which CSS style positions an element relative to the browser window?', 'position: fixed;', 'position: relative;', 'position: static;', 'position: absolute;']
var q10 = ['10. Which box model establishes content alignment, direction, and orientation?', 'Inheritance Box Model', 'Flexible Box Model', 'Parent Box Model', 'Fixed Box Model']
var q11 = ['Ready to Submit?', '', '', '', '']

// Functions
function next(){
    page += 1
    if(page<=0){
    page = 1        
    }
    else if(page === 1){
        x.innerHTML = q1[0]
        a.innerHTML = q1[1]
        b.innerHTML = q1[2]
        c.innerHTML = q1[3]
        d.innerHTML = q1[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 2){
        x.innerHTML = q2[0]
        a.innerHTML = q2[1]
        b.innerHTML = q2[2]
        c.innerHTML = q2[3]
        d.innerHTML = q2[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 3){
        x.innerHTML = q3[0]
        a.innerHTML = q3[1]
        b.innerHTML = q3[2]
        c.innerHTML = q3[3]
        d.innerHTML = q3[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 4){
        x.innerHTML = q4[0]
        a.innerHTML = q4[1]
        b.innerHTML = q4[2]
        c.innerHTML = q4[3]
        d.innerHTML = q4[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 5){
        x.innerHTML = q5[0]
        a.innerHTML = q5[1]
        b.innerHTML = q5[2]
        c.innerHTML = q5[3]
        d.innerHTML = q5[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 6){
        x.innerHTML = q6[0]
        a.innerHTML = q6[1]
        b.innerHTML = q6[2]
        c.innerHTML = q6[3]
        d.innerHTML = q6[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 7){
        x.innerHTML = q7[0]
        a.innerHTML = q7[1]
        b.innerHTML = q7[2]
        c.innerHTML = q7[3]
        d.innerHTML = q7[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 8){
        x.innerHTML = q8[0]
        a.innerHTML = q8[1]
        b.innerHTML = q8[2]
        c.innerHTML = q8[3]
        d.innerHTML = q8[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 9){
        x.innerHTML = q9[0]
        a.innerHTML = q9[1]
        b.innerHTML = q9[2]
        c.innerHTML = q9[3]
        d.innerHTML = q9[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 10){
        x.innerHTML = q10[0]
        a.innerHTML = q10[1]
        b.innerHTML = q10[2]
        c.innerHTML = q10[3]
        d.innerHTML = q10[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 11){
        x.innerHTML = q11[0]
        a.innerHTML = q11[1]
        b.innerHTML = q11[2]
        c.innerHTML = q11[3]
        d.innerHTML = q11[4]
        z.innerHTML = 'Submit'
        if(score==8){
            y.style.color = "rgb(0, 128, 0)";
        }
        else if(score>=9){
            y.style.color = "rgb(0, 255, 0)";
        }
        else if(score==7){
            y.style.color = "rgb(255, 247, 0)";
        }
        else if(score==6){
            y.style.color = "rgb(255, 174, 0)";
        }
        else if(score<=5){
            y.style.color = "rgb(255, 0, 0)";
        }
    }
    else if(page>=11){
        page = 11
        y.innerHTML = score + '/10'
        console.log("ran " + score)
    }
}

function prev(){
    page -= 1
    if(page<=0){
    page = 1        
    }
    else if(page === 1){
        x.innerHTML = q1[0]
        a.innerHTML = q1[1]
        b.innerHTML = q1[2]
        c.innerHTML = q1[3]
        d.innerHTML = q1[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 2){
        x.innerHTML = q2[0]
        a.innerHTML = q2[1]
        b.innerHTML = q2[2]
        c.innerHTML = q2[3]
        d.innerHTML = q2[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 3){
        x.innerHTML = q3[0]
        a.innerHTML = q3[1]
        b.innerHTML = q3[2]
        c.innerHTML = q3[3]
        d.innerHTML = q3[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 4){
        x.innerHTML = q4[0]
        a.innerHTML = q4[1]
        b.innerHTML = q4[2]
        c.innerHTML = q4[3]
        d.innerHTML = q4[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 5){
        x.innerHTML = q5[0]
        a.innerHTML = q5[1]
        b.innerHTML = q5[2]
        c.innerHTML = q5[3]
        d.innerHTML = q5[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 6){
        x.innerHTML = q6[0]
        a.innerHTML = q6[1]
        b.innerHTML = q6[2]
        c.innerHTML = q6[3]
        d.innerHTML = q6[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 7){
        x.innerHTML = q7[0]
        a.innerHTML = q7[1]
        b.innerHTML = q7[2]
        c.innerHTML = q7[3]
        d.innerHTML = q7[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 8){
        x.innerHTML = q8[0]
        a.innerHTML = q8[1]
        b.innerHTML = q8[2]
        c.innerHTML = q8[3]
        d.innerHTML = q8[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 9){
        x.innerHTML = q9[0]
        a.innerHTML = q9[1]
        b.innerHTML = q9[2]
        c.innerHTML = q9[3]
        d.innerHTML = q9[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 10){
        x.innerHTML = q10[0]
        a.innerHTML = q10[1]
        b.innerHTML = q10[2]
        c.innerHTML = q10[3]
        d.innerHTML = q10[4]
        y.innerHTML = ''
        z.innerHTML = 'Next'
    }
    else if(page === 11){
        x.innerHTML = q11[0]
        a.innerHTML = q11[1]
        b.innerHTML = q11[2]
        c.innerHTML = q11[3]
        d.innerHTML = q11[4]
        y.innerHTML = ''
        z.innerHTML = 'Submit'
    }
    else if(page>=11){
        page = 11
        y.innerHTML = score+'/10'
    }
}

let answers = [4,4,4,1,4,1,1,4,1,2];
let answered = [0,0,0,0,0,0,0,0,0,0];
function check(e){
    if (answered[page - 1] == 0) {
        if (e == answers[page - 1]) {
            score++

            console.log(score);
            
        } else {
            console.log(score)
            
        }
        answered[page - 1] = 1;
    }
}