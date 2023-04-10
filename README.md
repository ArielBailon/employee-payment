# Employee Payment
So for this exercise, first, I defenitely had to start with the rates object so i went and created one with each day with it's start, end and rate payment, so I can identify and get from this the in between hours that the employees have worked on in order to get the according rate and therefore their salaries. For this I created a separate file called `rates.js` and export it to its use and for the main logic I created the `app.js` file.

To read the txt file I made use of the default file system module that node has and made the call to the method readFile, if nothings wrong with the file, it calls to the calculatePayment method which is the main sequence.

Before this explanation I have to say that in order to be able to separate each employee I added a slash (/) between them in the txt file
Next, since I created the rates object I was able to indetify that I must at least do 2 or 3 for in loops:
- The first one that covers and splits the txt file into an array per each employee to get their salaries separately
- The second one would be the set of data of work hours
- The third one to loop through the rates depending on the day with the rates

Throughout the code I had to use some of string manipulation methods such as split, substring in order to separate and identify the variables that I had to use for specific reasons. So, since I have some experience with comparing dates and times (not the best thing i like to do) I decided to create a separate function that compares a time with its start and end in order to know if it is in between that range and therefore sum up to its total employee payment.

After that all I had to do is to calculate how many hours they have worked and multiply it and sum up to its final payment, for that I created another function to calculate the total minutes and after that we just convert it to hours by diving by 60.

## Installation
In order to run this code you'll need to have installed `Node.js` https://nodejs.org/en/download

Now you can clone the project by using on any terminal:
```sh
git clone https://github.com/ArielBailon/employee-payment.git
```

Once that is done, you can run it by using:
 ```
 node app.js
 ```

If you followed the steps you should be able to use this code without any problem.
