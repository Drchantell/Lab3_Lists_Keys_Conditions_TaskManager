Lab 3: Lists, Keys, and Conditionals Project Overview

I created a simple beginner React and TypeScript Task Manager. My project allows the user to view tasks, filter tasks by status, filter tasks by priority, change task status, delete tasks, see different task styles, and see a message when no tasks match the filters.

React Concepts Used
I used .map() to display the tasks. I gave each task a unique id, and I used that id as the React key. I also used conditional rendering to show different messages based on the task status. I used TypeScript interfaces and types for the tasks and component props.

How to Run
I open the project in VS Code. In the terminal, I run npm install. After that, I run npm run dev. Then I open the local address shown in the terminal to view the project in the browser.

Reflection

How did you ensure unique keys for your list items?
I gave every task a unique id. I used the task id as the key when I displayed the tasks with .map().

What considerations did you make when implementing the filtering functionality?
I made sure the user could filter by status, priority, or both. If no filter is selected, all tasks show.

How did you handle state updates for task status changes?
I used useState and .map(). When the status changes, I find the matching task id and update that task.

What challenges did you face when implementing conditional rendering?
I had a little trouble understanding when to show different information. I used a simple condition to show one message for completed tasks and another message for tasks that still need work.

Author: Dr. Chantell McDowell, Per Scholas Student.