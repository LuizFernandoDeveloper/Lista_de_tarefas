$(document).ready(function(){
    let idBtn = 0
    $(document).on('click', '#terminar', function(){
        let valor = $('#terminar').val()
        let line = '#line' + valor;
        $(line).remove();        
    })
    $('#button').click(function(e){
        e.preventDefault();

        let tarefa  = $('#tarefa').val();

        if(tarefa == ''){
            alert('Digite uma Tarefa');
            return;
        };

        const newLine = $(`<div id="line${idBtn}"class="barra-conteudo">
                                <div>
                                    <span>${tarefa}</span>
                                </div>
                                <button id="terminar" onclick="remover(this)" value="${idBtn}">Terminar</button> 
                            </div>`);
        $(newLine).appendTo('.conteudo');
        $('#tarefa').val('');
        idBtn ++;
    });

});