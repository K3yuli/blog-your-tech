# tech-blog

## User Story
``` AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

- Part One (ORM)
To succeed in this Challenge, you’ll apply the following skills:

Configure the Sequelize ORM in a Node.js application.

Create models for categories, products, and tags in a relational database and a through table that will connect the product and tag models.

Define and implement CRUD methods, using Sequelize to interact with your models in each API endpoint through proper RESTful commands (GET, POST, PUT, DELETE).

Create and implement Sequelize associations to join tables.

Use environment variables to protect sensitive data, such as your MySQL username and password.
----------------------------------------------------------
- Step Two:
To succeed in this Challenge, you’ll apply the following skills:

Structure your application following the Model-View-Controller (MVC) paradigm.

Modularize your code into separate folders for your Models, View, and Controllers to enforce separation of concerns.

Render dynamic HTML for your views using the Handlebars.js template engine.

Implement user authentication.

Configure Heroku so that you can deploy your application using a MySQL database.