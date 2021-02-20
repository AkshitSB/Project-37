class Question{
    constructor(){
        this.title = createElement("h2");
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
        this.input1 = createInput("Submit Answer");
        this.name = createInput("Name: ")
        

    }

hide(){
    this.title.hide();
    this.question.hide();
    this.input1.hide();
    this.option1.hide();
    this.option2.hide();

}


display(){
    console.log("coming to question page");
    this.title.html("My Quiz Game");
    this.title.position(300, 20);

    this.question.html("Question : - What starts and ends with the letter 'E',but has only one letter?");
    this.question.position(150, 80);
    this.option1.html("1: Everyone");
    this.option1.position(150, 100);
    this.option2.html("2: Envelope")
    this.option2.position(150,130);
    this.option3.html("3: Example")
    this.option3.position(150,160);
    this.option4.html("4: Estimate")
    this.option4.position(150,190);

    this.input1.position(500,250);
    this.name.position(150,250);
}
}