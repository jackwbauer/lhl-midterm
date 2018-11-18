$(() => {

    const orderObj = {};
    const $orderItemList = $('#order-item-list');
    orderObj.location_id = window.location.href.split('/')[4];
    orderObj.user_id = 2;
    orderObj.menu_items = [];
    const $placeOrderButton = $('#place-order');
    let runningTotal = 0;
    const $runningTotal = $('p.running-total');

    function handleCommentUpdate(event) {
        const $commentInput = $(event.target);
        const index = $commentInput.data('index');
        orderObj.menu_items[index].comment = $commentInput.val();
    }

    function buildListItem(item) {
        const $listItem = $('<div>', {
            class: 'list-group-item col-md-12'
        });
        const $listItemName = $('<h5>', {
            class: 'col-md-9'
        }).text(item.menu_item_name);
        const $listItemPrice = $('<h5>', {
            class: 'col-md-3 text-right'
        }).text(`$${item.menu_item_price}`);
        const $commentInput = $('<input>', {
            class: 'form-control comment',
            placeholder: 'Comment',
            'data-index': item.index
        }).on('change', handleCommentUpdate);
        $listItem.append($listItemName, $listItemPrice, $commentInput);
        return $listItem;
    }

    function handleButtonVisibility() {
        if (orderObj.menu_items.length > 0) {
            $placeOrderButton.removeClass('hidden');
        } else {
            $placeOrderButton.addClass('hidden');
        }
    }

    function handleAddItemClick(event) {
        const $eventTarget = $(event.target);
        const menu_item_id = $eventTarget.data('menu-item-id');
        const menu_item_name = $eventTarget.data('menu-item-name');
        const menu_item_price = $eventTarget.data('menu-item-price');
        runningTotal += Number(menu_item_price);
        const new_menu_item = {
            menu_item_id,
            menu_item_name,
            menu_item_price
        };
        orderObj.menu_items.push(new_menu_item);
        new_menu_item.index = orderObj.menu_items.indexOf(new_menu_item);
        $runningTotal.text(`Order Total: $${runningTotal.toFixed(2)}`);
        $orderItemList.append(buildListItem(new_menu_item));
        handleButtonVisibility();
    }

    function handlePlaceOrderClick(event) {
        event.preventDefault();
        if (orderObj.menu_items.length > 0) {
            // send post request to server
            orderObj.menu_items.forEach((item) => {
                delete item.menu_item_name;
                delete item.menu_item_price;
                delete item.index;
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
    $placeOrderButton.click(handlePlaceOrderClick);
    handleButtonVisibility();

});