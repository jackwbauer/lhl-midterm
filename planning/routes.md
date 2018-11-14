## MVP

### BROWSE

* GET /
* GET /restaurants
* GET /restaurants/:id/menu_items
* GET /orders/:id/menu_items

### CREATE

* POST /restaurants
* POST /restaurants/:id/menu_item
* POST /orders
* POST /orders/:id/menu_items

### READ

* GET /restaurants/:id
* GET /restaurants/:id/menu_items
* GET /orders/:id
* GET /orders/:id/menu_items/:id

### UPDATE

* PUT /restaurants/:id
* PUT /restaurants/:id/menu_items/:id
* PUT /orders/:id
* PUT /orders/:id/menu_items/:id

### REMOVE

* DELETE /restaurants/:id
* DELETE /restaurants/:id/menu_items/:id
* DELETE /orders/:id
* DELETE /orders/:id/menu_items/:id

## Stretch

### BROWSE

* GET /restaurants/:id/locations
* GET /orders

### CREATE

* POST /restaurants/:id/locations
* POST /users

### READ

* GET /restaurants/:id/locations/:id

### UPDATE

* PUT /restaurants/:id/locations/:id

### REMOVE

* DELETE /restaurants/:id/locations/:id