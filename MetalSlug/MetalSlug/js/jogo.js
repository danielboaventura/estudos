var teclas = {

    W:87,
    A:65,
    S:83,
    D:68,
    UP:38,
    DW:40,
    LF:37,
    RG:39,
    SH:32

}

var player_local = 0;

var jogo = {}
jogo.pressionou = []

/*
    var jogo = {
        pressionou = []
    }
*/

$(document).keydown(function(e) {

    jogo.pressionou[e.which] = true

}) //Enquanto estiver pressionada

$(document).keyup(function(e) {

    jogo.pressionou[e.which] = false

}) //Quando soltar a tecla


function movimenta_cenario() {

    var posicao = parseInt($('#area_jogo').css("background-position"))
    $('#area_jogo').css("background-position", posicao - 0)

}

function tiro(){
    if($('#tiro').length>0) {
 
        var left = parseInt($('#tiro').css("left"));
        $('#tiro').css("left",left + 10 );
        
        if(left>=1320)
            $('#tiro').remove();
    }
}

function movimenta_tiro() {
    if($('#tiro').length>0) {

        var left = parseInt($('#tiro').css("left"));
        var altura = parseInt($('#tiro').css("top"));
        console.log(altura)
        $('#tiro').css("left", left + 4 );
        
        if(left <=0) {
            $('#tiro').remove();
        }
    }
}
    


function movimenta_player() {
    var width_tela = $(window).width()
    var width_player = parseInt($("#player").css("width"))

    if (jogo.pressionou[teclas.W] || jogo.pressionou[teclas.UP]) {

        var pos_top = $("#player").css("top")
        pos_top = parseInt(pos_top)
        if (pos_top > 0) $("#player").css("top", pos_top - 10)

    }

    if (jogo.pressionou[teclas.A] || jogo.pressionou[teclas.LF]) {
        // var pos_right = $("#player").css("right")
        // pos_right = parseInt(pos_right)
        // console.log(pos_right)
        // if (pos_right < width_tela - width_player - 80) $("#player").css("right", pos_right + 10)

        var posicao = parseInt($('#area_jogo').css("background-position"))
    $('#area_jogo').css("background-position", posicao + 10)

    }

    if (jogo.pressionou[teclas.S] || jogo.pressionou[teclas.DW]) {
        var pos_top = $("#player").css("top")
        pos_top = parseInt(pos_top)
        if (pos_top < 508) $("#player").css("top", pos_top + 10)

    }

    if (jogo.pressionou[teclas.D] || jogo.pressionou[teclas.RG]) {
        // var pos_right = $("#player").css("right")
        // pos_right = parseInt(pos_right)
        // console.log(pos_right)
        // if (pos_right > 0) $("#player").css("right", pos_right - 10)

        var posicao = parseInt($('#area_jogo').css("background-position"))
        $('#area_jogo').css("background-position", posicao - 10)
    }

    if (jogo.pressionou[teclas.SH]) {

        if($('#tiro').length==0) {

            var pos_y = parseFloat($('#player').css("top"));
            var pos_x = parseFloat($('#player').css("left"));

            $('#area_jogo').append("<div id='tiro' class='tiro'></div>");
            $('.tiro').css("left", pos_x + 100);
            $('.tiro').css("top", pos_y + 30);
        }
        

    }

}

function colisao() {
    var p_tiro_nave = $('#tiro').collision('#tanque')
    var p_antinge_inimigo = $('#player').collision('#inimigo')

    if (p_tiro_nave.length > 0) {
        $('#tiro').remove()
        
        var i_x = parseInt($('#inimgo').css('left'))
        var i_y = parseInt($('#inimgo').css('top'))
        $('#inimigo').remove()
        $('#area_jogo').append('<div id="inimigo_explode"></div>')
        $('#inimigo_explode').css('left', i_x)
        $('#inimigo_explode').css('left', i_y)

        setTimeout(function() {
            $('#inimigo_explode').remove()
        }, 2000)
        
    }

    if (p_antinge_inimigo.length > 0 ){
        diminuiVidaPlayer()
    }
}

function diminuiVidaPlayer(){
    vida--
    var posicao = "0px 52px"
    switch(vida){

        case 4:{
            posicao = "0px 52px"
            break
        }

        case 3:{
            posicao = "-118px 52px"
            break
        }

        case 2:{
            posicao = "-234px 52px"
            break
        }
        case 1:{
            posicao = "-350px 52px"
            break
        }
        default:{
            null
            $('#player').remove()
            $('#tanque').remove()
        }
    }

    $('#vida').css('background-position', posicao)
}

    var somjogo = document.getElementById("somjogo");		
    var lasernave = document.getElementById("lasernave");		
    var tiroplayer = document.getElementById("tiroplayer");		
    var salva = document.getElementById("salva");		
    var explode = document.getElementById("explode");		
    var explodeplayer = document.getElementById("explodeplayer");		
    var grito = document.getElementById("grito");	

    

function loop() {

    //movimenta_cenario()
    somjogo.addEventListener("ended", function(){ somjogo.currentTime = 0; somjogo.play(); }, false)
    somjogo.play()
    movimenta_player()
    movimenta_tiro()
    tiro()
    colisao()

}

setInterval(
    loop,
    30
)

function start() {
    $('#alerta').css('display', 'none')
    $('#area_jogo').append('<div id="player"></div>')
    $('#area_jogo').append('<div id="vida"></div>')
    $('#area_jogo').append('<div id="playerTiro"></div>')
    $('#area_jogo').append('<div id="tanque"></div>')
    $('#area_jogo').append('<div id="nave"></div>')
    $('#area_jogo').append('<div id="homemBazuca"></div>')
}
