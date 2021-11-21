var TotalItems = [];


$("<ul id='cartlist' class='list-group'></ul>").appendTo('.cart');
$(".cart")
    .append($('<div>', {'class': 'container'}))
    .append($('<div>', {'class': 'row'}))
    .append($('<div>', {'class': 'col',
                        id: 'totalcarts',
                        html: 'Total = ' + TotalItems.length}));

$(".col-xs-12")
    .append("<button type='button' class='btn btn-outline-dark'>Dark</button>")
    .on('click', 



function () {
    $(this)./*parent().children().*/each(function(index, element) {
    console.log($(this).get());
    //console.log($(this).text());
    console.log($(this).html());
    });

    let name = $(this).parent().children().find('p').eq(0).html();
    let cost = $(this).parent().children().find('p').eq(1).html();
    $listitem = 
    $('<li>', {'class': 'list-group-item d-flex justify-content-between align-items-center',
               html: name })
        .append($('<span>', {'class': 'badge bg-primary rounded-pill',
                              html: cost}
               ));

    $listitem.appendTo($("#cartlist"));
    TotalItems.push(
        {
            ItemName: name,
            ItemCost: cost
        }
    );
    //console.log(TotalItems);
    
    let costs = TotalItems
                    .map((item)=> Number(item.ItemCost.replace('$','')));
    console.log(costs);
    let sum = costs
                    .reduce((lastcost, curcost) => lastcost+curcost);
    $('#totalcarts').html('<p>Total = $' + sum + ' of ' + TotalItems.length + 'item(s)</p>');

/*    $(
            "<li class='list-group-item d-flex justify-content-between align-items-center'>"+
            $(this).$('h2').text()+
            "<span class='badge bg-primary rounded-pill'>"+
            $(this).$('p').eq(0).text()+
            "</span>"+
            "</li>"
    ).appendTo($("#cartlist"));
    })
*/
}

);
