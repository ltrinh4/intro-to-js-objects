//Student Object
//name
//question
//answers []
//correct answer

let counter = 0;
let score = 0;


function main() {
    console.log(questions);


    function showQuestion(question) {


        $('.content').html(
            `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${question.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${question.question}</h6>
              <p class="card-text"></p>
                <form>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="${question.answers[0]}" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            ${question.answers[0]}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="${question.answers[1]}">
                        <label class="form-check-label" for="exampleRadios2">
                            ${question.answers[1]}
                        </label>
                    </div>
                    <input type="submit" value="Submit">
                </form>
              </div>
          </div>
            `
        )


        $("form").submit(function (event) {
            event.preventDefault();
            console.log(question);
            let userAnswer = $("input:checked").val();
            if ("Yes" == userAnswer) {
                alert("Youre right!");
                score= score + question.points;
                $(".points").append(`<img src="https://picsum.photos/id/237/200/300" />`);
            } else {
                alert("you're wrong");
                score= score- question.points;
                $(".points").append(`No picture for ${question.name}`);
            }
            counter++;
            if (counter < questions.length) {
                showQuestion(questions[counter]);
            }
            $(".score").html(score);
        })
    };

    showQuestion(questions[0]);






}

$(main)
