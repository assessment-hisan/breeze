const createDropdown = (prefix) => [
  { id: `${prefix}-all`, text: "All", link: `${prefix}/all` },
  { id: `${prefix}-new`, text: "New", link: `${prefix}/new` },
  { id: `${prefix}-popular`, text: "Popular", link: `${prefix}/popular` },
];

const nav = [
  { id: 1, text: "Home", link : "/"},
  { id: 2, text: "Brands",link:"brands"},
  { id: 3, text: "Women", dropdown: createDropdown("women") },
  { id: 4, text: "Men", dropdown: createDropdown("men") },
  { id: 5, text: "Kids", dropdown: createDropdown("kids") },
  { id: 6, text: "Students", dropdown: createDropdown("students") },
  
  { id: 8, text: "New Arrivals", dropdown: createDropdown("new-arrivals") },
];

export default nav;

