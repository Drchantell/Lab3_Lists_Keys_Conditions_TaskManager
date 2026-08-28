Lab 3: Lists, Keys, and Conditionals Project Overview

This project is a beginner React and TypeScript task manager app. The main goal was to practice working with lists, keys, and conditional rendering while also learning how to manage state in React.

I created a task list that displays multiple tasks in a clean layout. I used `.map()` to loop through the array of tasks and render each one as a separate card. Each task has a unique `id`, and I used that `id` as the React `key` so React can track each item correctly when the list changes.

I also added filters for task status and priority. The app checks whether each task matches the selected filters before rendering it. This is done with simple conditional logic inside the filter function. If no task matches the chosen filters, the app displays a message telling the user there are no matching tasks.

I implemented task status updates by storing the tasks in state and using `.map()` to update the correct task when the dropdown changes. I also added a delete button so the user can remove a task from the list by filtering the array based on the matching `id`.

Conditional rendering is used throughout the app for different messages. For example, if a task is marked as completed, the app shows “Task completed!” Otherwise, it shows “This task still needs work.”

The project demonstrates the beginner React concepts of state, props, list rendering, keys, conditional rendering, and simple user interaction.

This project shows how React can be used to manage a small list of tasks in a simple but effective way.



Author: Dr. Chantell McDowell, Per Scholas Student.
