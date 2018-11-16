$(() => {
    function createTime(time) {
        let date = new Date();
        const timeArray = time.split(':');
        date.setHours(parseInt(timeArray[0]), timeArray[1]);
        return date;
    }

    function handleAcceptButton(event) {
        const $button = $(event.target);
        const $time = $button.siblings('input');
        let pickup_time = $time.val();
        const order_id = $time.data('order-id');
        console.log(pickup_time);

        if (!pickup_time) {
            alert('Need to specify a pickup time!');
            return;
        }

        pickup_time = createTime(pickup_time);

        if(pickup_time < new Date()) {
            console.log(pickup_time);
            alert('Your blimp cannot time travel... yet');
            return;
        }

        $.ajax({
            url: `/orders/${order_id}?_method=PUT`,
            type: 'PUT',
            data: JSON.stringify({ pickup_time }),
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            success: function (res) {
                window.location.reload();
            }
        });
    }
    $('button.accept').click(handleAcceptButton)
});