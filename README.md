# alx_html_css
css_basic – CSS Styling and Layout
This project extends the previous HTML Basic project by applying CSS styling, implementing flexbox-based layouts, and enhancing responsive design. It includes structured positioning, improved accessibility, and responsive behavior to deliver a clean, user-friendly web experience.


1. Basic Setup
Created a new directory, css_basic, in the alx_html_css repository.

Copied index.html and tweets.html from the previous HTML_basic project.

Created two CSS files:

base.css (contains preset and utility styles)

styles.css (for custom styles and layout)

Both HTML files link to these stylesheets in the <head> tag:

html
Copy
Edit
<link href="base.css" rel="stylesheet">
<link href="styles.css" rel="stylesheet">
2. Positioning with Flexbox
Implemented CSS Flexbox layout rules in styles.css to structure the page into:

A vertical stack in <body>:
header → main → footer

A horizontal layout in <main>:
article (2/3 width) | aside (1/3 width)

Key CSS rules:

css
Copy
Edit
body {
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: row;
  flex: auto;
}

article {
  flex: 2;
  overflow-y: auto;
}

aside {
  flex: 1;
  overflow-y: auto;
}
3. Responsive Web Design
Added the class works_on_smartphone to the <body> in index.html.

Introduced a <meta> viewport tag in the <head> to support responsiveness on smartphones:

html
Copy
Edit
<meta name="viewport" content="width=device-width, initial-scale=1.0">
This ensures the layout gracefully adapts to smaller screens and provides a better user experience.

4. Additional Styling and Customization
Added extra CSS in styles.css to customize:

Colors

Backgrounds

Borders

Font styles

Inserted a logo character (e.g., Unicode symbol) in the <header> before other list items using:

html
Copy
Edit
<li class="logo">&#9881;</li>
Files
File	Description
index.html	Main webpage layout
tweets.html	Supplementary content page
base.css	Provided base styles and reset defaults
styles.css	Custom layout and aesthetic styling

##  Author
**Oluwadamilola Ayeni**  
Aspiring Front-End Developer | QA Professional | Problem Solver  
[Twitter](https://x.com/OraJacob7?t=YPfW_WCnmFa4LXjMeyyHag&s=08)  
[Instagram](https://www.instagram.com/yourfavoritearewa_yorubababe?igsh=MTd1NWM3bWxmZzhkYw==)  
[Facebook](https://www.facebook.com/share/14pdpQh8ND/)  
[LinkedIn](https://www.linkedin.com/in/damilola-rachael-ayeni-631b2618b)  
[GitHub](https://github.com/DAyeni-Dev)  
 oluwadamilolaayeni321@gmail.com  
 0805 237 4966  
 0907 913 9920

This project was completed as part of the ALX Front-End Curriculum.

