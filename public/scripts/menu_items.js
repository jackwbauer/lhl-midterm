$(() => {

    const orderObj = {};
    const $orderItemList = $('#order-item-list');
    orderObj.location_id = window.location.href.split('/')[4];
    orderObj.user_id = 2;
    orderObj.menu_items = [];

    function buildListItem(item) {
        const $listItem = $('<div>', {
            class: 'list-group-item'
        });
        const $listItemName = $('<h5>').text(item.menu_item_name);
        const $listItemPrice = $('<h5>').text(`$${item.menu_item_price}`);
        $listItem.append($listItemName, $listItemPrice);
        return $listItem;
    }

    function handleAddItemClick(event) {
        const $eventTarget = $(event.target);
        const menu_item_id = $eventTarget.data('menu-item-id');
        const menu_item_name = $eventTarget.data('menu-item-name');
        const menu_item_price = $eventTarget.data('menu-item-price');
        const new_menu_item = {
            menu_item_id,
            menu_item_name,
            menu_item_price
        };
        orderObj.menu_items.push(new_menu_item);
        $orderItemList.append(buildListItem(new_menu_item));
    }

    function handlePlaceOrderClick(event) {
        event.preventDefault();
        if (orderObj.menu_items.length > 0) {
            // send post request to server
            orderObj.menu_items.forEach((item) => {
                delete item.menu_item_name;
                delete item.menu_item_price;
            });
            $.ajax({
                url: '/orders/',
                type: "POST",
                data: JSON.stringify(orderObj),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    window.location = `/orders/${data}/review`;
                }
            })
        } else {
            // no items have been added to the order
            alert('no items on order!');
        }
    }

    $('button.add-item').click(handleAddItemClick);
    $('#place-order').click(handlePlaceOrderClick);

});