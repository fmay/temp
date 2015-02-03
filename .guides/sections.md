---
title: Variables
files: []
layout: 2-panels-tree

---
We are going to start our introduction to programming, also known as *coding* by looking at something common to all programming languages - **variables**.

Rather than explain what a variable is, let's dive straight into some code and see them in action.

Right now, you should see two tabs open up on the left hand side.

1. The tab that is hidden from view contains some code.
1. The tab that is visible contains is the *Preview* window, which shows our program running.

You can click each of the tabs to view them.

You should see a picture of a bird and a branch (see below).

![](.guides/img/var-bird-branch.png)

Move to the next page by clicking the **Next** button at the bottom right of this page.

---
title: Sit the bird on the branch
files: []

---
Click the code tab `main.js` on the left. If you can't see it, click on `main.js` in the *file tree* on the far left side.

You will see that there are two lines of code that control each of the birds.

##Challenge
Can you see how to sit both birds on the branch by adjusting the coordinates?

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

`positionSmallBird` and `positionBigBird` are called *functions*. A function is simply another piece of code that we can *call* from within our code.

A function can take parameters. In our example, we are passing in the X and Y coordinates of the birds.

In the first example, `positionSmallBird(300,0)` we are passing the coordinates directly. You can change these values and see what the effect is by pressing the refresh button in the Preview tab.

In the second example, `positionBigBird(xBird, yBird)` we are passing variables, whose values we set in further up the code.

###DEFN:
A variable is a placeholder that is given a name you choose that helps you identify its purpose. The variable name should only contain letters, characters and the '-' or '_' characters.

Variables should be defined (`var xBird`) before they are assigned values (`xBird=100`).

We'll move on to more interesting uses of variables in the next sections.


---
title: Example section 4
files: []

---
Some **awesome** content 4
