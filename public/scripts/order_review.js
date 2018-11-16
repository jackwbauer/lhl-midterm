$(() => {
    const order_id = window.location.href.split('/')[4];


    function handleCommentChange(event) {
        $comment = $(event.target);

    }

    $('input.comment').change(handleCommentChange);

    $('#confirm').click(event => {
        $.ajax({
            url: `/orders/${order_id}/review?_method=PUT`,
            type: 'PUT',
            success: function(data) {
                console.log(data);
                // window.location = '/';
            }
        })
    })
});