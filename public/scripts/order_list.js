$(() => {

    function createTime(time) {
        let date = new Date();
        const timeArray = time.split(':');
        date.setHours(parseInt(timeArray[0]), timeArray[1]);
        return date;
    }

    function getOrderState(button) {
        let state = '';
        if(button.hasClass('update')) {
            state = 'update';
            return state;
        }
        if(button.hasClass('ready')) {
            state = 'ready';
            return state;
        }
        state = 'accept'
        return state;
    }

    // $('.timepicker').timepicker({
    //     timeFormat: 'h:mm p',
    //     interval: 15,
    //     minTime: '10:00am',
    //     maxTime: '6:00pm',
    //     defaultTime: 'now',
    //     startTime: '10:00',
    //     dynamic: true,
    //     dropdown: true,
    //     scrollbar: true
    // });

    function handleButton(event) {
        const $button = $(event.target);
        const $time = $button.siblings('input');
        const state = getOrderState($button);
        let pickup_time = $time.val();
        const order_id = $time.data('order-id');

        if (!pickup_time && state !== 'ready') {
            alert('Need to specify a pickup time!');
            return;
        }

        pickup_time = createTime(pickup_time);

        if (pickup_time < new Date() && state !== 'ready') {
            alert('Your blimp cannot time travel... yet');
            return;
        }

        $.ajax({
            url: `/orders/${order_id}?_method=PUT`,
            type: 'PUT',
            data: JSON.stringify({ pickup_time, state }),
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            success: function (res) {
                window.location.reload();
            }
        });
    }
    $('button.accept').click(handleButton);
    $('button.update').click(handleButton);
    $('button.ready').click(handleButton);
});