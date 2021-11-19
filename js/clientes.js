
//--------------        ANIMACION PARA LA PRIMER IMAGEN      -----------------------////////
$("#relatoClientes").hide()

$("#mostrarRelato")
        .click(function(){

            $("#relatoClientes")

            .css("color" ,  "blue")

            .slideToggle(2000)


        })


//--------------        ANIMACION PARA LA SEGUNDA IMAGEN      -----------------------////////

        $("#relatoCliente2").hide()

        $("#mr2")
                .click(function(){

                    $("#relatoCliente2")

                    .css("color" ,  "#e84118")

                    .slideToggle(2000)



                })


//--------------        ANIMACION PARA LA TERCER IMAGEN      -----------------------////////

                $("#Contenedor").hide()

                $("#mr3")
                        .click(function(){

                            $("#Contenedor")

                                .html("<p> Una familia muy particualr querian cumplir el sueño de su hija de conocer el mar  y lo querian a los grande, ahi entramos nosotros con nuestra asesoria y pudimos  juntos cumplir es sueño de la pequeña magaliServicio muy seguro y rápido. Las mejores vacaciones de nuestras vidas gracias chicos!!!</p>")

                                    .css("color" ,  "#9b59b6")

                                        .show(2000)

                                        .delay(4000)

                                            .hide(10000)

                                            

                        })


//--------------        ANIMACION PARA LA CUARTA IMAGEN      -----------------------////////


                        $("#aniversario45").hide()

                        $("#mr4")
                                .click(function(){

                                    $("#aniversario45")

                                    .css("color" ,  "green")

                                    .slideToggle(3000)



                                })


