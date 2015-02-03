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
Click the code tab `main.js` on the left. If you can't see it, click on `main.js` in the *file tree* on the far left side.

You will see that there are two lines of code that control the big and small birds.

##Challenge
Can you see how to sit both birds on the branch by adjusting the coordinates?

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

##Functions
`positionSmallBird` and `positionBigBird` are called *functions*. A function is simply another piece of code that we can *call* from within our code.

A function can take parameters. In our example, we are passing in the X and Y coordinates of the birds.

In the first example, `positionSmallBird(300,0)` we are passing the coordinate parameters directly. You can change these values and see what the effect is by pressing the refresh button in the Preview tab.

In the second example, `positionBigBird(xBird, yBird)` we are passing variables as parameters. We set the variable values further up the code.

###DEFN:
1. A variable is a place where you can store a value. 
1. You give your variable a name you choose that helps you identify its purpose. 
1. The variable name should only contain letters, characters and the '-' or '_' characters. It should not have spaces.
1. Variables should be defined (`var xBird`) before they are assigned values (`xBird=100`).

We'll move on to more interesting uses of variables in the next sections.


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
title: New Section 6
files: []

---

---
title: New Section 7

---

---
title: New Section 8
files: []

---
