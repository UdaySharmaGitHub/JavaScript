/*  the first element child of the body is container div,
and its own first child is the table  */
let tableA = document.body.firstElementChild.firstElementChild;
/*  Certain DOM elements may provide additional properties
specific to their type for convenience.
The table element supports the following properties:  */
console.log(tableA);  // table
console.log(tableA.rows); //HTML Collections
console.log(tableA.caption);  //caption
console.log(tableA.tHead); // table head
console.log(tableA.tHead.firstElementChild); // table head elements
console.log(tableA.tBodies); // table body collection

// the tr element supports the following properties:
console.log("// the tr element supports the following properties:");
console.log(tableA.rows[0]); // giving the first row
console.log(tableA.rows[1]); // giving the Second row
console.log(tableA.rows[2]); // giving the Third row
console.log(tableA.rows[3]); // giving the Fourth row
//tr.cells: Returns a live HTMLCollection of all 
//the cells in the row.
console.log(tableA.rows[2].cells); // 4 html Collections
// tr.sectionRowIndex: Returns the index of the
// row in the current section (thead, tbody, or tfoot).
console.log(tableA.rows[2].sectionRowIndex);//Row number in table = 1
// tr.rowIndex: Returns the index of the row in the table.
console.log(tableA.rows[3].rowIndex); // 3th row 

//Accessing each rows using loop
console.log("// Accessing each rows using loop");
for(let i=0;i<tableA.rows.length;i++){
  let row = tableA.rows[i];
  console.log(row);
}

//  Accessing cells
console.log("// Accessing cells using loop");
row = tableA.rows[0];
for(let i=0;i<row.cells.length;i++){
  let cell = row.cells[i];
  console.log(cell);
}