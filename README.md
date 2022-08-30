# Ecommerce-API

# How to INSTALL and RUN?

• Clone the project.
• Navigate to the folder cd Ecommerce-API where the project has been Stored.
• Open Terminal and type npm install to install required files.
• Run following command: Nodemon .\index.js

# How to use 

URL : http://localhost:8000/Products .

• Post request (/Products/create).
• get request (/Products).
• patch request (/Products/id/update_quantity).
• delete request (/Products/id).

# Folder Structure

• Entry point : index.js.
• config : Contains configuration files of Mongoose.
• controllers : The controllers for various urls like create,get,update,delete.
• models : Mongoose Schemas for the products.
• routes : Different routes for different request urls.
