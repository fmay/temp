---
title: Variables
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 1-var-bird/main.js
    panel: 0
    index: 0
    type: file
    arg: 1-var-bird/main.js
  - action: open
    path: "#preview: 1-var-bird/index.html"
    panel: 0
    index: 1
    type: preview
    arg: 1-var-bird/index.html
layout: 2-panels-tree
step: 1-var-bird

---
We are going to start our introduction to programming, also known as *coding* by looking at something common to all programming languages - **variables**.

Rather than explain what a variable is, let's dive straight into some code and see them in action.

Right now, you should see two tabs open up on the left hand side.

1. The tab that is hidden from view contains some code.
1. The tab that is visible contains is the *Preview* window, which shows our program running. You can refresh the Preview if you change code by hitting the refresh button at the top left of that window.

You can click each of the tabs to view them. Go ahead and try it.

You should see a picture of a bird and a branch (see below).

![](.guides/img/var-bird-branch.png)

Move to the next page by clicking the **Next** button at the bottom right of this page.

---
title: Sit the bird on the branch
files: []

---
Click the code tab `main.js` on the left. If you can't see it, click on `main.js` in the *file tree* on the far left side. `main.js` is a simple piece of Javascript code. 

##How does a program "run"?
So, how does this piece of code actually run? Take a look at the video below and we'll explain what happens before you start to hack the code around yourself. 

![VIDEO]


##Challenge
Can you see how to sit both birds on the branch by adjusting the coordinates in `main.js`? Press the refresh button in the Preview tab after making changes.

![](.guides/img/var-bird-positioned.png)

We'll describe what's going on in the next section.

---
title: Variables
files: []

---
So let's look at the code and discuss it.

```javascript
  var xBird, yBird;
  
  xBird = 100;
  yBird = 50;
  
  positionSmallBird(300,0)
  positionBigBird(xBird, yBird);
```

##Variables
1. A variable is a place where you can store a value. 
1. You give your variable a name you choose that helps you identify its purpose (xBird is a variable that holds the X coordinate of a bird)
1. The variable name should only contain letters, characters and the '-' or '_' characters. It may also not have spaces.
1. Define your variables (`var xBird`) before you assign them a value (`xBird=100`).

We'll move on to more interesting uses of variables in the next sections.




---
title: Functions
files: []

---
```javascript
  var xBird, yBird;
  
  xBird = 100;
  yBird = 50;
  
  positionSmallBird(300,0)
  positionBigBird(xBird, yBird);
```

`positionSmallBird` and `positionBigBird` are called *functions*. A function is simply another piece of code that we *call* from within our code. 

##Seeing how functions work
To see what happens when our code calls a function, watch this video.

![VIDEO:stepping into the function]

A function can take parameters. In our example function calls, we are passing in the X and Y coordinates of the birds.

In the first example, `positionSmallBird(300,0)` we are passing the coordinate parameters 300 (X) and 0 (Y) directly. You can change these values and see what the effect is by pressing the refresh button in the Preview tab.

In the second example, `positionBigBird(xBird, yBird)` we are passing variables as parameters. We set the variable values a few lines earlier in the code.

---
title: 3 birds on a branch
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 2-var-3birds/main.js
    panel: 0
  - action: open
    path: "#preview: 2-var-3birds/index.html"
    panel: 0
layout: ""
step: 2-var-3birds

---
Now take a look at the new code that's opened up on the left. Click on the `main.js` tab to see it. We've got 3 birds this time but they're not roosting nicely.

##Challenge
You should get all 3 birds to sit on the branch like this.

![](.guides/img/var-bird-branch-3.png)

After you have changed the code, be sure to press the refresh button in the Preview window.

It's not that exciting but you should note how it is a bit tedious setting 6 variables.

In the next section, we'll explain how to make this a lot more efficient. Once you've got them roosting, move to the next section.

---
title: 3 better birds on a branch
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 3-var-3birds/main.js
    panel: 0
    index: 0
    type: file
    arg: 3-var-3birds/main.js
  - action: open
    path: "#preview: 3-var-3birds/index.html"
    panel: 0
    index: 1
    type: preview
    arg: 3-var-3birds/index.html
layout: ""
step: 3-var-3birds

---
Now take a look at the new `main.js` code on the left. You'll see that we have much shorter code. 

What we did here was to analyze what is going on and break it down as follows.

1. To get all 3 birds to sit on the branch, we note that they all have the same Y coordinate.
1. So, let's figure out the coordinate of the first bird and get it sitting on the left of the branch.
1. To get the desired effect, we can simply space the other birds out evenly across the branch.
1. To achieve this, we'll create a variable `gap` and use that to calculate the position of the second and third birds.

Look at the code and make sure you understand how it works. The abive approach is an example of a very simple *algorithm*. 

##Challenge
Set the variables so you have the 3 birds are roosting evenly on the branch in the same way you did before. After you have changed the code, be sure to press the refresh button in the Preview window.

![](.guides/img/var-bird-branch-3.png)

###DEFN
An algorithm is a set of steps that solves a problem. In programming, this normally involves the following steps

1. Analyze the problem
1. Look for ways of breaking down that problem into small steps. Often, you will create a flowchart as a way of visualizing these steps.
1. Look at ways of making those steps as efficient as possible and having as few steps as possible. This is a really important steps as an efficient algorithm usually results in smaller, faster code.


---
title: A new way of placing birds
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 4-preloops/main.js
    panel: 0
  - action: open
    path: "#preview: 4-preloops/index.html"
    panel: 0
layout: ""
step: 4-preloops

---
Now, we are going to look at an entirely different way to create and position our birds.

Take a look at the code and you can see that we've provided a new function `createBird`. This function 

1. Creates a brand new bird.
1. Positions it at the specified coordinate.

You can also see that to position 7 birds, we call the same function 7 times but with different coordinates for each one. 

Imagine that there were 20 birds and we know that they should all be equally spaced along the branch. Doing it 20 times would be slow and we would spend a lot of time typing out each coordinate, probably making a few errors along the way.

As you will see in the next section, there is a really elegant way of making this much easier.
---
title: While birds do loop
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 5-while/main.js
    panel: 0
  - action: open
    path: "#preview: 5-while/index.html"
    panel: 0
layout: ""
step: 5-while

---
Now we are going to take a different approach to getting our 7 birds to roost. We are going to introduce the concept of loops.

You may remember from an earlier section that we figured out we only need to know the position of the first bird before adding the `gap` to the x coordinate of each bird.

```js
positionBirds(x, y, x+gap, y, x+gap*2, y);
```

Our new code uses this same approach but instead it uses a *while* loop.

What we are do is ...

1. *Initialize* our variables, in other words we assign them their starting values.
1. We now put the bird creation function call `createBird` inside a *while* loop, which creates the new bird and places it at the specified coordinate. Study the formula for the X coordinate `initialX + gap*counter` and make sure you understand what it is doing. The first time it is in the loop, `counter` is 0. The second time through, it will be 1 and so on.
1. Next, we add 1 to our `counter` variable
1. At the end of the loop, we go back to the start of the loop. If `counter` is less than 7, it will run through the loop again. Once it finally reaches 7, it will exit the loop and execute any commands that come afterwards (there aren't any here).

##VIDEO
Looks at this video to help you visualise what's going on with our loop.

![VIDEO]

##DEFN
A *while* loop is defined as follows.

```js
  while(some condition) {
    some instuctions
  }
```

While `some condition` is true, execute `some instructions` within the opening `{` and the closing `}`. It will continue to loop forever or until `some condition` is false.

In our example, `some condition` is `counter is less than 7`. If `counter` has any value between 0 and 6, the `counter<7` is true and so your code will continue to loop around.

As soon as `counter` reaches 7, the `counter<7` is false and so the loop stops executing.







---
title: For birds also loop
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 6-for/main.js
    panel: 0
    index: 0
    type: file
    arg: 6-for/main.js
  - action: open
    path: "#preview: 6-for/index.html"
    panel: 0
    index: 1
    type: preview
    arg: 6-for/index.html
layout: ""
step: 6-for

---
We'll now introduce another kind of loop - the *for* loop. The for loop does exactly the same thing as the *while* loop, but it does it in a slightly different way. It is generally preferred to *while* loops in Javascript.

The *while* loop statement just deals with the condition (`while(counter<7)` in our previous example).

The *for* loop statement allows you to handle the following things

1. The initialization of your variables.
1. The condition.
1. What happens at the very end of the loop.

If you take a look at the `main.js` code, you can see how this statement

```js
for(initialX=50, gap=60, counter=0; counter<7; counter++)
```

1. Initialises the variables you specify in the first part of the statement, before the first `;` so in our code `initialX=50, gap=60, counter=0`.
1. After the first `;` comes the condition for the loop to continue executing, which is `counter<7`
1. After the second `;` you specify what should happen at the end of the loop. In our case, it increments the `counter` variable by 1. `counter++` is Javascript shorthand for `counter=counter+1`.

##Video
Let's have a look at a video that helps you visualise what's going on with our loop.

##While or For?
For loops can result in shorter (terser) code as they do more in a single line. Most Javascript programmers prefer the *for* loop to the *while* loop.




---
title: "If this then that, else the other"
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 7-if/main.js
    panel: 0
  - action: open
    path: "#preview: 7-if/index.html"
    panel: 0
layout: ""
step: 7-if

---
We only just figured out loops and now it's time to move on to another of those things you need to master, *conditional statements*.

##Example
Before we go into any detail, let's look at an example. Sticking with our birds, let's see how we deal with the following scenario.

1. We position our birds on the branch with a reasonable gap between each bird.
1. Birds that haven't got room to sit on the branch, should be put in a cage.

![](.guides/img/bird-if-1.png)

## Thinking about it in coding terms
Step 1 above is handled by our *for* loop. It will keep on positioning birds off the right end of the branch and then off the screen.

So, how do we deal with the end of the branch? Let's break this down into steps.

 - If `calcX`, the calculated x coordinate, is greater than the x coordinate of the right hand end of the branch, then put it in the cage (which is simply an image on our page, where we will locate those birds).
 
## Look at the code
Although we've done a video explanation, take a look at the code in `main.js` and see if you can explain to yourself what is going on.

## Look at the video
Take a look at the video which explains the whole process in detail.


 



---
title: Conditional Statements
files: []

---
So, here is the formal explanation of a Javascript *conditional statement*.

In Javascript, an `if` statement looks like this

```js
if(condition is true) {
  execute all lines within the { } block
}
else {
  otherwise execute this { } block instead
}
```

In fact, you can chain lots of conditions as shown below. Here, it runs through the `if` list until it finds a condition that is true. If none are true, then it executes the `else` block. Notice that there are no `{ }` block brackets in the example below. If there is only one statement in the block, you can omit them.

```js
if (condition1)
   statement1
else if (condition2)
   statement2
else if (condition3)
   statement3
...
else
   statementN
```





---
title: Lots of caged birds
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 7-if-2/main.js
    panel: 0
  - action: open
    path: "#preview: 7-if-2/index.html"
    panel: 0
layout: ""
step: 7-if-2

---
Take a look at the preview now. It is more interesting as all of our caged birds are neatly laid out within the cage.

Take a look at `main.js` and see if you can figure out how it works. Note that we have created our own function `checkBird()` to handle things. We could have put the `checkBird()` code within our loop but this shows a way in which we use a function instead. 

## Video
Here's a video if you want the guided tour of the code.

![VIDEO]

## Nested if statements
There is no pun intended here, but if you look at the code, you can see an example of *nesting*. 

Nesting is where a statement of one type (`if` in this case) is nested, or sits within a statement of the same type.

`
---
title: Creating our own functions
files: []

---
If you look at `main.js` now, you'll see that our loop looks much simpler. What we've done is to take all of the  `if` code and move it into a new function called `checkBird()`.

This function expects to be told the X coordinate of the bird. It does not need the Y coordinate as we know that the Y coordinate for the branch is 120 unless it does not have room on the branch, in which case we are positioning it in the cage.

## Function Declarations
We *declare* our function as follows

```js
function checkBird(x)
```

1. Start the line with `function`
1. Choose a meaningful name for our function
1. Inside the brackets, specify any parameters that the function expects to receive.

Functions can have any number of parameters, so the following are all possible examples

```js
function checkBird(x)
function checkBird()
function checkBird(x, y)
function checkBird(x, y, birdName)
```

In Javascript, function names are like variable names in that they should not contain spaces and may only contain letters, numbers or the '-' or '_' characters.

## Video
Watch this video to see how the program executes.

![VIDEO]
---
title: Variable scope
files: []

---
