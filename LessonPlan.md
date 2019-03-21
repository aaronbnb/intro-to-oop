# Lesson Plan - Object Oriented Programming and BlackJack
 
### Overview

In this class, we will be introducing students to object oriented programming. Students will start to think and model programs in objects rather than as a series of tasks or 

`Summary: Complete activities 1-3`

##### Instructor Priorities

* Introduce students to the principles of object oriented programming
* Students should understand the general vocabulary of OOP and the syntax surrounding JavaScript objects
* Students should be able to diagram systems and articulate the benefits of OOP

##### Context and Background

* This is an exciting class where students get to make blackjack. It's a breezy, interactive atmosphere. The new syntax is fairly small and much of the class is about thinking like a programmer so be sure to elicit lots of answers through questions to the class.

* The course has moved at a frenetic pace. For the first third of the bootcamp, students confronted a great deal of unfamiliar syntax with HTML/CSS/JavaScript. Now that they've gained fluency with basic tools like git and developer tools. Today, students get to delve into the concepts of OOP. The goal today is for students to not just do what a programmer does but to start thinking like a programmer. 

* The course is about full stack development. Before the shift to the backend and mySQL, students should understand a class correlates to a table and an object to a row of that table.  

- - -

### Class Objectives

* To understand the basic principles of object oriented programming
* To diagram the system for Blackjack and create a working Blackjack game 

- - -

### 1. Instructor Do: Welcome Class (5 mins)

* Welcome your students and get them excited to build blackjack. It will be an interactive class. 

* Before diving into building Blackjack, ask the class to define an object. You might try to elicit analogies on Slide 2. After collecting student responses, you may scroll through Slide 3 - 5 which should restate student responses.

  * Object oriented systems allow programmers to answer questions about systems 

### 2. Instructor Do: First Object (10 mins)

Walk the students through the Student constructor functions in heresadf. Take a look at each example, noting the difference.

* Student.js features a very basic object. Students can only have one course for a property.
* Student2.js replaces this.course with this.courses, which makes sense since students can do multiple bootcamps. We also add an enroll method. Make sure students understand the difference between properties and methods.
* Student3.js shifts the enroll method to the Student prototype.

### 3. Student Do: My First Object - An Instructor (15 mins)

Students will now build an Instructor. Slack out the instructions and tell them to feel free to refer to the previous class examples. They are in the resources folder of the activity.

Students that finish fast may wish to build a Course object.

### 4. Instructor Do: Review My First Object and Design an Enrollment System (10 mins)

Walk students through the initial simple diagram of the (Student - Instructor - Bootcamp) system. Once you reach the UML diagram, explain to the class the inefficiencies in the previous system. Point out that name is being instantiated for both Student and Instructor when it is a property that both inherit - they are people after all! Most importantly, point out that rather than instantiate the same bootcamp again and again, you create an offering and point at a single topic. This is almost the same thinking as our prototype.

Advantages to this new design is a more clear system and less costly SQL queries. Traversing the rows of a database is a very slow operation. Students should understand that objects are often correlated to rows of a table in our database.

This 10 minutes should be interactive. Try to elicit answers through questions to the class. This is a difficult topic so you could ask something like "What properties do Student and Instructor share?

### Student Do: Build a Card for Our Blackjack Game (15 mins)

Recap with students the rules of blackjack. We're going to spend the rest of the night building Blackjack. The activities are challenging.

Slack out the link to the Card.js file. Be sure that TA's are asking each student about the concepts. Point out the objects with suits and numbers are almost like constants. We would probably park this information somewhere else.

### Student Do: Build a Card for Our Blackjack Game (15 mins)

Recap with students the rules of blackjack. We're going to spend the rest of the night building Blackjack. The activities are challenging.

Slack out the link to the Card.js file. Be sure that TA's are asking each student about the concepts. 

### Instructor Do: Review Card for our Blackjack Game (5 mins)

When we architect a system at the beginning, all of our code meshes better together. Methods also allow us to write more readable code.

### Student Do: Build a Deck (15 mins)

We're moving on up! This is another challenging activity. Be sure to give students hints that they will have to loop over the RANKS and over SUITS to get all possible cards.