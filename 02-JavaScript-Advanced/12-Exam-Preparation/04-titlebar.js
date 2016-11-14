class TitleBar {
    constructor(title) {
        this.title = title;
        this.items = []
    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr("href", href)
            .text(name)

        this.items.push(link)
    }

    appendTo(selector) {
        let html = $(this.generate())
        for (let item of this.items) {
            html.find('.menu').append(item)
        }


        $(html).find('.button').click(function () {
            if ($(html).find('.drawer').css('display') == 'block') {
                $(html).find('.drawer').css('display', 'none')
            } else {
                $(html).find('.drawer').css('display', 'block')
            }
        })

        $(selector).append(html)
    }

    generate() {
        return `<header class="header">
  <div class="header-row">
    <a class="button">&#9776;</a>
    <span class="title">${this.title}</span>
  </div>
  <div class="drawer">
    <nav class="menu">
    </nav>
  </div>
</header>`
    }
}


let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#divche');
