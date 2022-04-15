- This is an application which will look like amazon (only for one seller)
- parts
  - user front
    - product management
      - search the products
      - list the products
      - filter products
      - review a product
      - share a product
    - cart managment
      - add a product in cart
      - change quantity in the cart
      - delete an product from cart
    - order managment
      - place an order
      - update an order
      - list orders
        - track an order
      - list order history
    - profile management
      - get the profile
      - update profile
      - address management
        - add address
        - update address
        - remove address
      - change password
      - forgot password
      - logout
      - delete an account
    - signup: 
    - signin
    - contact us
    - about us
  
  - admin front / admin panel
    - category managment
      - add category: done
      - update category: done
      - delete category: done
      - get categories: done
    - product management
      - add product: done
      - upload/add/update image for a product: 
      - update product
        - update attributes: 
        - suspend product: 
      - get all products:
      - delete product: 
      - review management:
    - user management
      - get alll users
      - update user
        - suspend/block user
        - unblock user
      - delete user
    - order management
      - list all orders
      - update order
        - update delivery status
        - update products
      - delete order
    - signup: 
    - signin:
    - analytics

-----------------------------------------------------

bakend/config
config.env constants

PORT=4000


DB_URL=

JWT_SECRET=
JWT_EXPIRE=

COOKIE_EXPIRE=

SMPT_SERVICE=

SMPT_MAIL=

SMPT_PASSWORD=

SMTP_HOST=

SMPT_PORT=

CLOUDINARY_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

STRIPE_API_KEY = 
STRIPE_SECRET_KEY = 

FRONTEND_URL=
-----------------------------------------------------------------------------------------------------------------------------------------------------

To run this project first set The all ENV constants Then 
cd backend yarn start
cd frontend npm start
-----------------------------------------------------------------------------------------------------------------------------------------------------

