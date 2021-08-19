import {createClient} from 'contentful'
export default createClient({
 space:"kb14g8bv6ggq",
 accessToken:"_9T5DxTySi0iAfckumWbK8qNYpxW2APOn_QuP-h6Jno"
})








const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "developer_bookshelf",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "0b7f6x59a0"
});