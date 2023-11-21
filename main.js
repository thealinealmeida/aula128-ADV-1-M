function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    //Desenhar
    canvas.mouseReleased(classifyCanvas);
    //sintetizar a voz
    synth = window.speechSynthesis;

}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');

}
//biblioteca de esboços
//caixa brilhante

function clearCanvas(){
    background("white");

}

function draw(){
    //traço
    strokeWeight(13);
    //defina cor do traço
    stroke(0);

    //condicional 
    //Se o moude for clicado, desenhe uma linha entre a posição antiga e atual do mouse;

    if (mouseIsPressed) {
        line(mouseX, pmouseY, mouseX, mouseY);
      }


}