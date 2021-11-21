
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

                                .html('<p> Una familia muy particular,ellos querían cumplir el sueño de su hija de conocer el mar. Ahí entramos nosotros para asesorarlos y juntos cumplimos el sueño de magali. "Servicio muy seguro y rápido. Las mejores vacaciones de nuestras vidas.Gracias!!!"</p')

                                    .css("color" ,  "black")

                                        .show(2000)

                                        .delay(20000)

                                            .hide(5000)

                                            

                        })


//--------------        ANIMACION PARA LA CUARTA IMAGEN      -----------------------////////


                        $("#aniversario45").hide()

                        $("#mr4")
                                .click(function(){

                                    $("#aniversario45")

                                    .css("color" ,  "green")

                                    .slideToggle(3000)



                                })


