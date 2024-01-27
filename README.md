# Restaurant React App

![image](https://github.com/WajdWael/Restaurant-reactApp/assets/81550668/451a1ce1-cd2a-426c-9202-7e62c4ebcc70)
[Demo - Preview website](https://wajdwael.github.io/Restaurant-reactApp/)

# Tools ⛏️:
- React.js
- JavaScript
- JSX
- CSS
- Git/GitHub
- JSON

# Goals 🧠:
- Transform a Figma file into a functional website.
- Determine the best way to manage React files, components, and images.
- Find a solution to deal with a large number of images and ensure faster rendering.
- Understand the benefits of a single-page app.

---

# 💎 Key points to consider when converting a Figma design into a functional website: 
![figma logo](https://github.com/WajdWael/Restaurant-reactApp/assets/81550668/1da82fd9-6f7b-4b05-b381-dc849e377580)

1. **Inspect the Design**: Open the Figma design file and carefully examine each component, Take note of any complex or interactive elements that may require additional coding.

2. **Create the HTML structure**: and use semantic HTML elements to structure your document properly.

4. **Apply CSS styles**: to match the Figma design, including fonts, colors, layout, typography, and images. **Ensure Responsiveness**, and test it on various screen sizes.

5. **Test your website on different browsers and devices**: to ensure cross-browser compatibility. Ensure your website is accessible to all users, including those with disabilities.

6. **Conduct a final review** before launching your website and ask for feedback.

7. **Deploy your website** to a web hosting platform. **Regularly update your website** to keep it secure and functional.

----
# 💎 2 key points to understand any react directory and solve your confusion about react directories and files. 

1. Directory structure: Collect all the files that belong to a common feature, and focus on component-centric file structure.
![image](https://github.com/WajdWael/Restaurant-reactApp/assets/81550668/e04ce858-2b56-404a-b08b-8b06ed180174)


--

2. Custom files: you should add all custom components, hooks, pages, and utils together.
![image](https://github.com/WajdWael/Restaurant-reactApp/assets/81550668/146610ea-7a43-49ff-8870-e77b1c9801ba)


---

# 💎 SPA, What is a single-page application? 

![image](https://github.com/WajdWael/Restaurant-reactApp/assets/81550668/625c1e8d-0f17-4504-9f2f-fec9d30abd15)

If you're developing a full-stack application, you must consider several aspects. **The frontend forms the top layer**, and **the database forms the bottom layer**, with numerous **components in between**.
![image](https://github.com/WajdWael/Restaurant-reactApp/assets/81550668/7faa9ac3-4122-4242-89f0-36dd871f3bb6)

---

## What's a single-page app?

A single-page app **(SPA)** looks like a regular app to the user, but **it offers a significant performance advantage**. Although the user may not notice any difference in style, **they will undoubtedly experience much faster response times.**

## The web app cycle: 

The traditional web app cycle involves:
- A client requesting data from a server. 
- The server renders the requested data into an HTML format and sends it back to the browser, which displays it. 

---

## The web cycle with SPAs:
In contrast, SPAs start **similarly to traditional web apps**. 
- The browser requests a page, and 
- The server generates that page, but instead of generating a bunch of HTML code, **it only generates the data that the client needs**. 
- The data comes in JSON format, 
and the page refreshes partially, **resulting in faster results**.

> **A partial page** update refers to updating only a portion of a web page instead of the entire page. 
> Which **update the content by mainpulating the DOM** - Document Object Model.

---

## How can I build SPAs?
To build SPAs, you can use frameworks such as:
- ReactJS, 
- Vue.js, or 
- Angular, 
  
> They provide robust and flexible tools for building modern web applications.

---
## Summary

A Single Page Application (SPA) is a type of web application that operates within a single web page, **without requiring the entire page to be reloaded from the server.** SPAs use JavaScript frameworks, such as React, Angular, or Vue.js, **to dynamically update the content on the page.**

- In a traditional web application, when a user interacts with the interface, the browser sends a request to the server, which sends an **entirely new HTML page**. This involves reloading the entire page, which can be **time-consuming**.

- **SPAs load the initial** HTML/CSS/JS files from the server, and the interactions are managed by the framework. When a user interacts with the application, the framework updates the content on the page **by manipulating the Document Object Model (DOM)** in the browser, **without needing to retrieve a new page from the server**. This results in a more seamless and interactive user experience.

    ## When to use SPAs?
    - SPAs are commonly used **for web applications that require a high level of interactivity**, such as social media platforms, email clients, and project management tools. They can provide a more fluid user experience by reducing page reloads and allowing for real-time updates.

