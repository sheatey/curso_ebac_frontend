$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()

        const tarefaDigitada = $('#tarefa').val()

        const tarefasCadastradas = $('#tarefasDigitadas')
        $(`<li class="tasks">${tarefaDigitada}</li>`).appendTo(tarefasCadastradas)

        $('#tarefa').val('')
    })

    $('#tarefasDigitadas').on('click', 'li', function() {
        if ($(this).hasClass('clicado')) {
            $(this).removeClass('clicado')
        } else {
            $(this).addClass('clicado')
        } 
    })
})
