//on submit button click, compile
function watchClick(){
    $('#submit').click(function(event){
        event.preventDefault()
        var converter = new showdown.Converter()
        let input=editor.getValue()
        console.log(input)
        let html = converter.makeHtml(input)
    
        $('.previewArea').html("").append(html)
    })
}

function renderApp(){
    watchClick()
}

$(renderApp)

