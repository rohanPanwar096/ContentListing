This is Content Listing Page application which will render the content as we scroll down the page. The search feature is provided, you can type your requested content name and the main page will show you the requested content without refreshing. Whenever we type search term the searchTerm redux state gets updated.
Lazy Loading of images is provided.
During the first page mounting, the data for the first page is stored in redux state named as mainData and as we scroll down the data for the second page will get appended to the previous data and so on to page 3.
The styling of application is done by using TailwindCSS. 
react-visibility-sensor library is used which enables the client to request the new page data/content as we scroll down at the end of initial page.
