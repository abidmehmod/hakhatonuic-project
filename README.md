• User-Friendly Interface: A clean, intuitive platform for seamless navigation and 
ordering. 
• Real-Time Updates: Live tracking of order preparation and delivery. 
 
3. Data Schema Diagram: 
1. Products Data(Food Items): 
o ProductID: Unique identifier for each food item. 
o Name: Name of the food (e.g., Chicken Pizza, Chicken Burgur). 
o slug: Name of the food item to identify in dynamic routing (e.g., chicken-pizza, 
chicken-burgur). 
o Price: Price of the food item (e.g., $700). 
o Category: Type of food (e.g., Pizza, Burger, Drinks). 
o Stock: Whether the food is available or sold out. 
2. Order Data: 
o OrderID: Unique identifier for each order. 
o CustomerID: Reference to the customer who placed the order. 
o OrderDate: Date and time when the order was placed. 
o TotalAmount: Total price of the order. 
o OrderStatus: Current status (e.g., Pending, Delivered). 
3. Customer Data: 
o CustomerID: Unique identifier for each customer. 
o Name: Customer’s name. 
o Email: Customer’s email address. 
o PhoneNumber: Contact number. 
o Address: Delivery address. 
4. Delivery Zone: 
o ZoneID: Unique identifier for the delivery zone.. 
o zoneName: Name of the delivery zone. 
o coverageArea: area covered 
Extra Thing: 
o Each Customer can place multiple Orders. 
o Each Order can include multiple Products.. 
 
 
5.  Data Schema Exampl
Day 2: Technical Planning  
1. System Architecture: 
o Use Next.js to provide fast performance and SEO optimization 
o Use Sanity CMS for manage profile for admin, to Add Product, Delete 
Product and Edit Product. Sanity is use for Content Management. 
o Integrate a payment gateway API like Stripe, for secure transactions. 
o Also implement an Authentication when user is Login only can order the 
product.  
 
2. Frontend Requirements: 
• User Interface: 
o Create a user-friendly design for browsing products effortlessly. 
o Implement features for smooth navigation and intuitive user interactions. 
• Responsive Design: 
o Ensure the marketplace works seamlessly on both mobile and desktop devices. 
• Essential Pages to Develop: 
o Home Page: Display featured products or categories. 
o About Page: Display the about of our restruanent. 
o Shop Listing Page: All the available products with filtering options. 
o Product Details Page: Showcase product images, descriptions, prices, and a "Add to 
Cart" button. 
o SignUp Page: Create a sign and login page that can user login and can order product 
if user was not Login it can’t order the product and not add the product into cart. 
o Cart Page: If user was login it can Display the selected products with options to 
update quantities or remove items.  
o Checkout Page: Handle payment, and information of customer and shiping. 
o Order Confirmation Page: Confirm that the order has been placed and show order 
details. 
3.  Sanity CMS as Backend: 
• Use Sanity CMS to manage: 
o Product data (name, description, price, category, images). 
o Customer details (profile, orders). 
o Order records (order status, payment confirmation, and delivery details). 
• Schema Design: 
o Create schemas within Sanity to organize data based on the marketplace's business 
goals (e.g., products data, order data, customer data and Delivery Zone). 
• Examples Of Sanity Data: 
o ProductData{ 
ProductId:131123,  
ProductName:” Pizza”,  
 Slug:”chicken-pizza,  
DAY 03 – API INTEGRATION REPORT OF FOOD TUNK 
 
Process Of API Integration  
1. Overview: The AP integration is connects an external API providing foods and 
chefs data to a Sanity CMS Project 
2. Steps Taken: 
• Environment Setups: 
i.  Used .env to load environment variables from .env.local. 
ii. Key Variables Includes:  
o NEXT_PUBLIC_PROJECT_ID 
o NEXT_PUBLIC_DATASET 
o SANITY_API_TOKEN 
2. Data Fetching: 
o Make concurrent API calls using axios to fetch food and chef data. 
o  Endpoints Accessed : 
i. https://sanity-nextjs-rouge.vercel.app/api/foods 
ii. https://sanity-nextjs-rouge.vercel.app/api/chefs 
 
Understand the Provided API: 
1st API: Foods 
URL:  https://sanity-nextjs-rouge.vercel.app/api/foods 
This API provides data related to food items. Below are the key details 
to note: 
1. Key Endpoint: /foods 
o This endpoint likely returns a list of available food items. 
o Each food item may include details such as: 
▪ name: The name of the food item. 
▪ description: A brief description of the food. 
▪ price: The cost of the item. 
▪ tags: Type of food (e.g., healthy, sweet, crispy). 
▪ availability: Item is available or not  
2. Data Use: 
o Display food items on the frontend,  
o Create a dynamic routes for all products 
2nd API: Chefs 
URL: https://sanity-nextjs-rouge.vercel.app/api/chefs 
This API provides data related to chefs. Below are the key details to 
note: 

 

 
 
 
