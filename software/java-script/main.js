$(document).ready(function(){

    $('#terminar').click(()=>{
        
        $('.barra-conteudo').remove();
        
    });

    $('#button').click(function(e){
        e.preventDefault();

        let tarefa  = $('#tarefa').val();

        if(tarefa == ''){
            alert('Digite uma Tarefa');
        };

        const newLine = $(`<div class="barra-conteudo">
                                <div>
                                    <span>${tarefa}</span>
                                </div>
                                <button id="terminar">Terminar</button> 
                            </div>`);
        $(newLine).appendTo('.conteudo');
        $('#tarefa').val('');
    });
});