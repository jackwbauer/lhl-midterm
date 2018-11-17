$(() => {

    function handleStartOrderClick(event) {
        const $button = $(event.target);
        const location_id = $button.data('location-id');
        window.location.href =`/locations/${location_id}/menu_items`;
    }

    $('button.start-order').click(handleStartOrderClick);

});