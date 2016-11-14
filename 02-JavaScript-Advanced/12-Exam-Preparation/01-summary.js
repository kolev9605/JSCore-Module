function solve(selector) {
    $(selector).click(
        function () {
            let content = '#content'
            let elements = $(content).find('strong').toArray().map(x => $(x).text()).map(x=>x.trim())

            $(content).parent().append($('<div id="summary">')
                .append($('<h2>').text('Summary'))
                .append($('<p>').text(elements.join('\n'))))
        }
    )
}

solve("#generate")