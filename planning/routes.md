## MVP

### Home Page

* GET /

### Restaurants

* GET /restaurants/:id -- Gets the restaurant associated with id
* GET /restaurants/:id/menu_items -- Gets the menu items of the restaurant associated with id

### Orders

* GET /orders/:id -- Gets the order associated with id
* POST /orders -- Places the order
* PUT /orders/:id -- Edits the order: for updating expected time 

## Stretch

### Restaurant

* GET /restaurants -- Gets the list of restaurants
* POST /restaurants -- Creates a restaurant
* PUT /restaurants/:id -- Update any information about the restaurant, i.e. address, phone number
* DELETE /restaurants/:id -- Delete restaurant associated with the id

### Menu Items

* POST /restaurants/:id/menu_items -- Creates a menu item for the restaurant associated with id
* PUT /restaurants/:id/menu_items/:id -- Update any information about the specified menu item, i.e. dietary restrictions, price, availability
* DELETE /restaurants/:id/menu_items/:id -- Delete menu item associated with the id

### Locations

* GET /restaurants/:id/locations -- Get list of locations of restaurant associated with id
* GET /restaurants/:id/locations/:id -- Get location associated dwith id
* POST /restaurants/:id/locations -- Create a new location for restaurant associated with id
* PUT /restaurants/:id/locations/:id -- Update information of location associated with id
* DELETE /restaurants/:id/locations/:id -- Delete location associated with id

### Orders

* GET /user/:id/orders -- See order history of user associated with id
* DELETE /orders/:id -- Cancel order associated with id

### Users

* POST /users -- Create user
