$(() => {

    function handleChooseRestaurantClick(event) {
        $button = $(event.target);
        const restaurant_id = $button.data('restaurant-id');
        window.location.href = `/restaurants/${restaurant_id}/locations`;
    }

    $('.choose-restaurant').click(handleChooseRestaurantClick);

});