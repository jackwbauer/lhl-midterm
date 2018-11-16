$(() => {

    

    function handleCommentChange(event) {
        $comment = $(event.target);

    }

    $('input.comment').change(handleCommentChange);


});