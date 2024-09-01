The 404 error on security page is likely caused by how GitHub Pages handles routing in single-page applications (SPAs) like those created with React. So the issue is that GitHub Pages serves static files and doesn't know how to handle client-side routing that React uses. When you navigate directly to a route like /security, GitHub Pages looks for a corresponding security.html file, which doesn't exist, so it returns a 404 error.
I've added a 404.html file for this error but if still that doesn't work u can simply download the zip file of project and run it in VS code by "npm start", the project works fine.
P.S I'm still learning
