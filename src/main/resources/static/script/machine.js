$(document).ready(function () {
	   table = $('#tmachine').DataTable({
	        ajax: {
	            url: "machines/all",
	            dataSrc: ''
	        },
	        columns: [{ data: "id" },
	            { data: "reference"},
	            { data: "marque"},
	            { data: "dateAchat" },
	            { data: "prix" },
	            {
	                "render" : function (){ return '<button type="button" class="btn btn-outline-danger supprimer">Supprimer</button>';}
	            },
	            {
	                "render" : function (){ return '<button type="button" class="btn btn-outline-secondary modifier">Modifier</button>';}
	            }
	        ]
	        
	   });
	   
	   
    
    $('#btn').click(function () {
        var reference = $("#reference");
        var reference = $("#marque");
        var prix = $("#prix");
        var dateAchat = $("#date");
        if ($('#btn').text() == 'Ajouter') {
            var m = {
                libelle:code.val()                
            }
         $.ajax({
                url: 'marques/+m.libelle',
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(m),
                type: 'POST',
                async: false,
                success: function (data, textStatus, jqXHR) {
                	  var p = {
            		    reference:reference.val(), dateAchat:dateAchat.val(), prix: prix.val(),marque: data
            		    };
           
                     $.ajax({
                         url: 'machines/save',
                         contentType: "application/json",
                         dataType: "json",
                         data: JSON.stringify(p),
                         type: 'POST',
                         async: false,
                         success: function (data, textStatus, jqXHR) {
                	     table.ajax.reload();
                     },
                     error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                     }
                     });
                      $("#main-content").load("./page/machine.html");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
           
       

    });

    $(document).on('click', '.supprimer', function (e) {
    	e.preventDefault();
        var id = $(this).closest('tr').find('td').eq(0).text();
        var oldLing= $(this).closest('tr').clone();
        var newLigne ='<tr style="position: relative;" class="bg-light" ><th scope="row">'+id+'</th><td colspan="4" style="height: 100%;">';
        newLigne +='<h4 class="d-inline-flex">Voulez vous vraiment supprimer cette machine ? </h4>';
        newLigne +='<button type="button" class="btn btn-outline-primary btn-sm confirmer" style="margin-left: 25px;">Oui</button>';
        newLigne +='<button type="button" class="btn btn-outline-danger btn-sm annuler" style="margin-left: 25px;">Non</button></td></tr>';

        $(this).closest('tr').replaceWith(newLigne);
        $('.annuler').click(function(){
            $(this).closest('tr').replaceWith(oldLing);
        });
        $('.confirmer').click(function(){
            $.ajax({
                url: 'machines/delete/'+id,
                data: {},
                type: 'DELETE',
                async: false,
                success: function (data, textStatus, jqXHR) {
                    if(data.includes("error")==true){
                        $("#error").modal();
                    }else{
                    	table.ajax.reload();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $("#error").modal();
                }
            });

        });

    });

    $('#table-content').on('click', '.modifier', function () {
        var btn = $('#btn');
        var id = $(this).closest('tr').find('td').eq(0).text();;
        var reference = $(this).closest('tr').find('td').eq(1).text();
        var prix = $(this).closest('tr').find('td').eq(3).text();
        var dateAchat = $(this).closest('tr').find('td').eq(2).text().replace(" ","T");
        btn.text('Modifier');
        $("#reference").val(reference);
        $("#marque").val(marque);
        $("#id").val(id);
        $("#prix").val(prix);
        $("#date").val(dateAchat);
        btn.click(function () {
            var p = {id:$("#id").val(), reference:$("#reference").val(), marque:$("#marque").val(), dateAchat:$("#date").val(), prix:  $("#prix").val()};
            if ($('#btn').text() == 'Modifier') {
                $.ajax({
                    url: 'machines/save',
                    contentType: "application/json",
                    dataType: "json",
                    data: JSON.stringify(p),
                    type: 'POST',
                    async: false,
                    success: function (data, textStatus, jqXHR) {
                    	table.ajax.reload();
                        $("#reference").val('');
                        $("#marque").val(''),
                        btn.text('Ajouter');
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
                $("#main-content").load("./page/machine.html");
            }
        });
    });
    
    
// function remplir(data) {
// var contenu = $('#table-content');
// var ligne = "";
// for (i = 0; i < data.length; i++) {
// ligne += '<tr><th scope="row">' + data[i].id + '</th>';
// ligne += '<td>' + data[i].code + '</td>';
// ligne += '<td>' + data[i].nom + '</td>';
// ligne += '<td>' + data[i].prix + '</td>';
// ligne += '<td>' + data[i].dateAchat + '</td>';
// ligne += '<td><button type="button" class="btn btn-outline-danger
// supprimer">Supprimer</button></td>';
// ligne += '<td><button type="button" class="btn btn-outline-secondary
// modifier">Modifier</button></td></tr>';
// }
// contenu.html(ligne);
// }

// $.ajax({
// url: 'produits/all',
// data: {op: ''},
// type: 'GET',
// async: false,
// success: function (data, textStatus, jqXHR) {
// console.log(data);
// remplir(data);
// },
// error: function (jqXHR, textStatus, errorThrown) {
// console.log(textStatus);
// }
// });
});



