$(document).ready(function(){

    $("#BtSomar").click(function()
    {
        var valor1 = parseInt($("#valor1").val());
        var valor2 = parseInt($("#valor2").val());

        var resultado = valor1 + valor2;

        $("#resultado1").val(resultado);
    });

    $("#BtSubtrair").click(function()
    {
        var valor3 = parseInt($("#valor3").val());
        var valor4 = parseInt($("#valor4").val());

        var subtrair = valor3 - valor4;
        $("#resultado2").val(subtrair);
    });

    $("#BtMultiplicar").click(function()
    {
        var valor5 = parseInt($("#valor5").val());
        var valor6 = parseInt($("#valor6").val());

        var multiplicar = valor5 * valor6;
        $("#resultado3").val(multiplicar);
    });

    $("#BtDividir").click(function()
    {
        var valor7 = parseInt($("#valor7").val());
        var valor8 = parseInt($("#valor8").val());

        var dividir = valor7 / valor8;
        $("#resultado4").val(dividir);
    });

    $("#Limpar1").click(function(){

        var a ="";
        $("#valor1").val(a);
        $("#valor2").val(a);
        $("#resultado1").val(a);
    });

    $("#Limpar2").click(function()
    {
        var b ="";
        $("#valor3").val(b);
        $("#valor4").val(b);
        $("#resultado2").val(b);
    });

    $("#Limpar3").click(function()
    {
        var c ="";
        $("#valor5").val(c);
        $("#valor6").val(c);
        $("#resultado3").val(c);
    });

    $("#Limpar4").click(function()
    {
        var d ="";
        $("#valor5").val(d);
        $("#valor6").val(d);
        $("#resultado3").val(d);
    });




});