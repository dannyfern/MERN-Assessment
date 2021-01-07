# README - Developer platform

## Purpose of the website

The purpose of this application is to provide a welcoming environment for developers to put themselves out there and connect with other developers, as well as potential employers. It also simplifies the process of employers finding a suitable person to fit any specific role, by being able to filter through the profiles of users based on the skills and experience needed. Additionally, it is also a platform where developers can share their ideas through public blog posts to further develop their profiles and their presence on the site, for other users to view and connect with and for potential employers to gain an even better understanding of the developer.

## Functionality / features

- The functionality and features of our application include, a web based application that users can;
  - Register to the website for access to the site and its functionality. 
    - Registering will also be necessary for authentication and validation purposes on the backend. 
  - Create a profile, that details who they are, including past and current work, programming languages that they are versed in as well as future prospects for employment. The profile will be an important aspect of creation as it will allow other developers and prospects to view who you are and what you love doing, as well as being able to get into touch with you. 
  - Once created, users can browse and post to the forums with CRUD. 
    - Users can create posts, detailing problems, idea's and thoughts to other developers.
    - Users can also comment on other posts, creating discussion within the forum. 
    - Users can  upvote comments on posts, signifying the importance of socials on this website.
  - Users will be able to browse their respective comments and posts on their profile with access to CRUD for individuals purposes. 
  - Users will also be able to browse other users profiles so they can possibly get into touch with them outside of this network, or follow more of there posts and comments. 

## Target audience

The target audience for this project is for developers and business owners or companies. In regards to developers, it is targeted towards those who are looking for work, looking for a platform to market themselves and their skills, looking to connect with other developers socially or to collaborate on a specific project, wanting to share their ideas with like-minded individuals and read about their ideas as well. Furthermore, in regards to business owners or companies, it is catered to those looking to find a developer to fit any given role, or to keep track of developers which may be needed for future projects.

## Tech stack

*<u>MongoDB</u>*

MongoDB is a widely known and popular document-oriented database that uses NoSQL (non-relational) mechanisms for data storage and retrieval in relational databases, consistently used by big data and real time web applications. Perfect for our MERN stack application and works synchronously with our other technologies. 

*<u>Mongoose</u>*

The library of choice when using MongoDB and Node, Mongoose will give us the ability to create relations in our database, create schema's for our blogs and forum and models for the schema's for record in our database. 

<u>*JavaScript*</u>

The essential technology of our application, JavaScript will be necessary for features such as control flow, logins and logic for validations and authentication against the database. 

*<u>Express JS</u>*

Express JS is another essential component of your technology stack. A lightweight framework that integrates with Node.JS and will be used to manage servers and routes. Simplifying our formal code, express will scale efficiently into our framework, allowing us to take advantage of middleware's and other useful features. 

*<u>Node.JS</u>*

Node JS like most of the other components in this stack prides itself on being a efficient, fast and scalable piece of software that developers can use for quick real time developing. Essential for our stack, Node will help incorporate our front and back end through the packet manager, and allow us to make changes in real-time. 

<u>*React*</u> 

The final piece of the MERN stack, React allows us to create fast, scalable user interfaces with a component based approach. React as a library works with our MVC application, and will also run on our server. 

*<u>Heroku</u>* 

Heroku will be used as our deployment application due to its feature rich service, easy deployment and it can be used with a build pack. Being able to manage our application and migration was extremely seamless with Heroku making it the most viable choice for my application. 

*<u>Trello</u>*

Just like Github, Trello organizes individuals and teams. With daily, weekly and monthly requirements we can plan and organize ourselves as individuals and as teams to tackle a project without losing focus or the requirements of the task. This will be utilized throughout the entire course of the project and is invaluable to our team. 

*<u>Github</u>* 

GitHub will be essential for code collaboration and version control. Later in the project Meika and I are going to be trying to push our application in terms of functionality once MVP is done. Having Github for version control will manage all of these changes before they get pushed to our master, and allow us to collaborate and commit changes to our projects the whole way through. 

*<u>Typora</u>* 

A powerful markdown editor, that will not only be utilized for the project requirements and theory but also for idea's and consolidation of our information. Typora is a simple software that our team can utilize efficiently and will work seamlessly with our project requirements. 

*<u>Figma</u>* 

Figma is a fantastic wireframing tool, with the ability to use icons, schemes and templates. Wireframes at this level can come out to look exactly as you planned rather than a wireframe sketch of what the end product should look like. 

*<u>Robo 3T</u>* 

Robo 3T is a useful piece of technology when working with MongoDB, as it allows you to refresh server instantly and see all of your models, schema's and validations/encryptions. Being able to do this in real time when working with a database makes it very efficient. 

*<u>Jest</u>*  

Jest will be used as our testing framework both for the front and back end of the project. We choose this over other frameworks due to the consistency of using one framework and learning it intricately, rather then using different frameworks for the front and backend. Jest is compatible with Node and React, and is considered a fast and safe choice when testing in your environment.

*<u>Netlify</u>* 

Netlify will handle all of our client side code. After deploying to Heroku our front end react will make request to our express API handled on Heroku. Assuming that our application is connected to mongoDB, Heroku and Netlify are great choices that work synchronously to host your application to users.


## Dataflow Diagram

![diagram](docs/diagrams/diagram.jpg)

## Application Architecture Diagram

![ard](docs/diagrams/ard.JPG)

## User Stories

#### Developers in general:

- Have the ability to create an account and set up a profile with their details.
- They also have the ability to update their profile, log in and out of their account as well as delete their account entirely.
- They can create blog posts, containing any information they wish, which will contain a title, a category and the content. They can also read, update or delete these posts. 
- They can read blog posts on the site, created by other users and choose to comment on those posts or connect with the original poster.
- They can view the profiles and the posts of other users through the profiles page and connect with them there.

#### Developer, looking for work:

- Can create an account and set up their profile, filling it with their personal information for employers to see. They should also ensure they are marked as looking for work on their profile and provide information about the type of work they are after.
- Can create blog posts with CRUD functionality, sharing their ideas with others on the site and further marketing themselves.
- Can read other's blog posts and comment on them, forming new connections which may help them in finding work suitable for them.
- Their profile will be shown on the profiles page, and may be seen by employers, based on what the employer is searching for.

#### Developer, looking to connect or collaborate with other developers:

- Can create an account and set up their profile, filling it with their personal information, ensuring they include information about the projects they're working on and their contact information.
- Can create blog posts with CRUD functionality, where they share their ideas and talk about their projects. They may also create posts about their interests in order to engage others with the same interests, as well as any issues or thoughts relating to these interests.
- Can read others' blog posts, and may choose to comment on them if it is about something they are also interested in, have any thoughts on or wish to connect or collaborate with the original poster.

#### Business, looking for a developer to work on a project:

- Can create an account and set up their profile, specifying that they are from a business, looking to hire a new developer. 
- Can view blog posts from other users, and can use them to find developers through these posts or through the comments on these posts.
- Can view profiles of all the users on the site, and can filter through them based on the specific needs of the business, such as level of experience, skill level and different passions or interests, and can then choose to contact any specific developer about the project they need to hire someone for.

#### Agency/company looking to hire a new developer:

- Can create an account and set up their profile, specifying that they are from an agency or a company, looking to hire someone, specifying the type of developer/s needed and the work they will be doing.
- Can view blog posts from other users, and can use them to find developers through these posts or through the comments on these posts.
- Can view profiles of all the users on the site, and can filter through them based on the specific needs of the agency or company, such as level of experience, skill level and different passions or interests, and can then choose to contact any specific developer about who their company is, and the type of work they do.


#### General control flow

1. User will see this site and want to connect with other developers and add conversation to its arena.
2. Once on the site the user will register a free account and be able to use its features
3. Once logged in the user will be able to create their profile of who they are and prospective job types they are interested in. These details will be in depth so developers can get as much visibility as possible.
4. Users will also be able to maintain activity on the site using blog posts for thoughts and issues in an inclusive environment.
5. Users will be able to interact with these posts giving feedback and discussion for an interactive experience with other developers.
6. Users will also be able to view other developers profiles and posts on their specific developer page.
7. Users will be able to CRUD material they have, and also log out or de register an account.
8. Features of authentication and authorization to the backend will all be implemented in this.

## Wireframes - mobile

![mobile-wires-1](docs/wireframes/mobile/png/mobile-wireframes-1.png)

![mobile-wires-2](docs/wireframes/mobile/png/mobile-wireframes-2.png)

![mobile-wires-3](docs/wireframes/mobile/png/mobile-wireframes-3.png)

## Wireframes - tablet

![tablet-wires-1](docs/wireframes/tablet/png/wireframes1.png)

![tablet-wires-2](docs/wireframes/tablet/png/wireframes2.png)

![tablet-wires-3](docs/wireframes/tablet/png/wireframes3.png)

## Wireframes - desktop

![desktop-wire](docs/wireframes/desktop/wire1.png)

![desktop-wire](docs/wireframes/desktop/wire2.png)

![desktop-wire](docs/wireframes/desktop/wire3.png)

![desktop-wire](docs/wireframes/desktop/wire4.png)

## Trello Board

#### Start of day 1: 

![trello day 1](docs/trello-screenshots/trello-day1.png)

#### End of day 1:

![end of day 1](docs/trello-screenshots/trello-day1end.png)

####  End of week 1:

![end of week 1](docs/trello-screenshots/trello-end-week1.png)

#### Week 2:

![week2-trello](docs/trello-screenshots/trello-week2.png)

#### Week 3:

![week3-trello](docs/trello-screenshots/trello-week3.png)
