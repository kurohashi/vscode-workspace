let data = {
  "name": "purchase_click",
  "desc": "checking the text and purchase is clcicked or not",
  "startTime": 1664794964998,
  "editTime": 1676265653083,
  "dimensions": [
    {
      "name": "ids",
      "desc": "<p>Sample</p>",
      "isNull": "Null Allowed",
      "required": "Optional",
      "datatype": "any",
      "parentChildKey": "1:0",
      "parentChildPrefix": "",
      "min": "",
      "max": "",
      "rangeList": [],
      "rangeCase": false,
      "expanded": true,
      "keyName": "ids",
      "editor": "59e4e2e57e",
      "editTime": 1676522595005
    },
    {
      "name": "page_url",
      "desc": "<pre class=\"ql-syntax\" spellcheck=\"false\">there is a s a long description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pub </pre>",
      "isNull": "Null Not Allowed",
      "required": "Optional",
      "datatype": "String",
      "parentChildKey": "1:0",
      "parentChildPrefix": "",
      "min": "",
      "max": "",
      "rangeList": [
        "hhttdd"
      ],
      "rangeCase": true,
      "expanded": true,
      "keyName": "page_url",
      "editor": "59e4e2e57e",
      "editTime": 1676522595005
    },
    {
      "name": "page name",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onlcenturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrase",
      "isNull": "Null Allowed",
      "required": "Required",
      "datatype": "String",
      "parentChildKey": "3:0",
      "parentChildPrefix": "",
      "expanded": true,
      "keyName": "page name",
      "editor": "cbee1a121d",
      "editTime": 1670397232502
    }
  ],
  "eventGUI": "9e340b6cda",
  "creator": "Dummy",
  "editor": "59e4e2e57e",
  "expandToggleStatus": false,
  "tags": [
    "price event",
    "purchasing",
    "login"
  ],
  "parentChildKey": ""
}

let convertedHtml = `<p><strong>Event name:</strong>${data.name}</p>
    <p><strong>Description:</strong></p>
    ${data.desc}
  
    <h3>Dimensions:</h3>
    <table>
      <tr>
        <th><p>Event property</p></th>
        <th><p>Description</p></th>
        <th><p>Null Allowed</p></th>
        <th><p>Required</p></th>
        <th><p>Datatype</p></th>
        <th><p>Data Range</p></th>
      </tr>
      ${data.dimensions.map(dimension => `
        <tr>
          <td><p>${dimension.name}</p></td>
          <td>${dimension.desc}</td>
          <td><p>${dimension.isNull}</p></td>
          <td><p>${dimension.required}</p></td>
          <td><p>${dimension.datatype}</p></td>
          <td><p>${((dimension.rangeList && dimension.rangeList.length && dimension.rangeList.join(', ')) || (dimension.min && dimension.max && `${dimension.min} - ${dimension.max}`))}</p></td>
        </tr>
      `).join('')}
    </table>`

let format = require("./jira-content-formatter");

let result = format(convertedHtml.replace(/[\n\r ]/g, ''));

console.log(JSON.stringify(convertedHtml));