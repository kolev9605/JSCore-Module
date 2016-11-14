function tableBuilder(selector) {
    return {
        createTable: function (columnNames) {
            let html = $('<table>')
            let row = $('<tr>')
            for (let arg of columnNames) {
                row.append($('<th>').text(arg))
            }
            row.append($('<th>').text('Action'))
            html.append(row)
            $(selector).empty()
            $(selector).append(html)
        },

        fillData: function (dataRows) {
            let table = $(selector).find('table')
            for (let row of dataRows) {
                let r = $('<tr>')
                for (let c of row) {
                    r.append($('<td>').text(c))
                }

                let button = $('<button>').text('Delete')
                button.click(function () {
                    button.parent().parent().remove()
                })

                r.append($('<td>').append(button))
                table.append(r)
            }
        }
    }
}
