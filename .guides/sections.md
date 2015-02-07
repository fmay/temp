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
title: Functions and Variables
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

##Functions
`positionSmallBird` and `positionBigBird` are called *functions*. A function is simply another piece of code that we *call* from within our code. To see what happens when our code calls a function, watch the video below.

![VIDEO:stepping into the function]

A function can take parameters. In our example, we are passing in the X and Y coordinates of the birds.

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
  - action: open
    path: "#preview: 3-var-3birds/index.html"
    panel: 0
layout: ""
step: 3-var-3birds

---
Now take a look at the new `main.js` code on the left. You'll see that we have much shorter code. 

What we did here was to analyze what is going on and break it down as follows.

1. To get all 3 birds to sit on the branch, we note that they all have the same Y coordinate.
1. So, let's figure out the position of the first bird and get it in the right place.
1. To get the desired effect, we can simply space them out evenly across the branch.
1. To achieve this, we'll create a variable `gap` and use that to calculate the position of the second and third birds.

Having figured this out, we can write the code easily. However, we have not got good values for the `x`, `y` and `gap` variables.

##Challenge
Set the variables so you have the 3 birds are roosting evenly on the branch in the same way you did before. After you have changed the code, be sure to press the refresh button in the Preview window.

![](.guides/img/var-bird-branch-3.png)

Look at the code and make sure you understand how it works. This is an example of a very simple *algorithm*. 

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
    path: "4-preloops/main.,js"
    panel: 0
    index: 0
    type: file
    arg: "4-preloops/main.,js"
  - action: open
    path: "#preview: 4-preloops/index.html"
    panel: 0
    index: 1
    type: preview
    arg: 4-preloops/index.html
layout: ""
step: 4-preloops

---
Now, we are going to look at an entirely different way to create and position our birds.

Take a look at the code and you can see that we've provided a new function `createBird`. This function 

1. Creates a brand new bird.
1. Positions it at the desired coordinate.

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

Our code uses this same approach but instead it uses a *while* loop.

What we are doing is ...

1. Initialize our variables
1. We now put the bird creation function call inside our *while* loop
1. Create the new bird and place it at the specified coordinate. Study the formula for the X coordinate `initialX + gap*counter` and imagine what it is doing. The first time it is in the loop, `counter` is 0. The second time through, it will be 1 and so on.
1. Next, we add 1 to our `counter` variable
1. At the end of the loop, we go back to the start of the loop. If `counter` is less than 7, it will run through the loop again. Once it finally reaches 7, it will exit the loop and execute any commands that come afterwards (there aren't any here).

##VIDEO
Let's have a look at a video that helps you visualise what's going on with our loop.


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
title: For birds do also loop
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 6-for/main.js
    panel: 0
  - action: open
    path: "#preview: 6-for/index.html"
    panel: 0
layout: ""
step: 6-for

---
We'll now introduce another kind of loop - the *for* loop. The for loop does exactly the same thing as the *while* loop, but it does it in a slightly different way.

The *while* loop statement just deals with the condition, so `while(counter<7)` in our previous example.

The *for* loop statement allows you to handle the following things

1. The initialization of your variables.
1. The condition.
1. What happens at the very end of the loop.

If you take a look at the `main.js` code, you can see how this statement

```js
for(initialX=50, gap=60, counter=0; counter<7; counter++)
```

1. Initialises our variables in the first part of the statement, before the first `;`, so `initialX=50, gap=60, counter=0`.
1. Tests for the same condition for the loop to continue executing.
1. Increments the `counter` variable by 1. `counter++` is Javascript shorthand for `counter=counter+1`.

##While or For?
It's really a matter of personal preference. For loops can result in shorter (terser) code as they do more in a single line. You can always substitute a for loop for a while loop and vice-versa.

##Video
Let's have a look at a video that helps you visualise what's going on with our loop.

