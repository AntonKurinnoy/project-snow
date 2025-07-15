document.addEventListener( "DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.infrastructure-card');
    const container = document.querySelector('.infrastructure-ul');

    let clickEventListener = function() {
        // If this card is already expanded, collapse it
        if (this.classList.contains('expanded')) {
            this.classList.remove('expanded');
            container.classList.remove('has-expanded');
        } else {
            // Remove expanded class from all cards
            cards.forEach(c => c.classList.remove('expanded'));

            // Add expanded class to clicked card
            this.classList.add('expanded');
            container.classList.add('has-expanded');
        }
    }

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', clickEventListener);
    });

    let clientHeight = document.documentElement.clientHeight
    // it's a div, that holds your news
    // it holds ul with news in li elements
    let div = document.getElementById( "infrastructure-container" );
    div.style.height = clientHeight + "px";
    div.addEventListener( "scroll", function() {
        let max_scroll = this.scrollHeight - this.clientHeight;
        let current_scroll = this.scrollTop;
        // console.log("scrollHeight: " + this.scrollHeight + " clientHeight: " + this.clientHeight + " max_scroll: " + max_scroll + " current_scroll: " + current_scroll);
        let bottom = 10;
        if ( current_scroll + bottom >= max_scroll ) {
            let ul = div.getElementsByTagName("ul")[0];
            let current = parseInt(ul.dataset.current, 10);
            let li = ul.querySelectorAll('.infrastructure-li')[current];
            let new_li = li.cloneNode( true );
            new_li.childNodes.item(1).addEventListener( "click", clickEventListener) //this part must be refactored
            ul.appendChild( new_li );
            ul.dataset.current = current + 1;
        }
    } );
} );