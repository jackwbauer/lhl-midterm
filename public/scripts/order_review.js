$(() => {

    const order_id = window.location.href.split('/')[4];

    $('#confirm').click(event => {
        $.ajax({
            url: `/orders/${order_id}/review?_method=PUT`,
            type: 'PUT',
            success: function(data) {
                window.location.replace(`/orders/${order_id}/confirmation`);
            }
        });
    });

});