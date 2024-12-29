const createDropdown = (prefix) => [
  { id: `${prefix}-all`, text: "All", link: `${prefix}/all` },
  { id: `${prefix}-new`, text: "New", link: `${prefix}/new` },
  { id: `${prefix}-popular`, text: "Popular", link: `${prefix}/popular` },
];

const nav = [
  { id: 1, text: "Home" },
  { id: 2, text: "Brands" },
  { id: 3, text: "Women", dropdown: createDropdown("women") },
  { id: 4, text: "Men", dropdown: createDropdown("men") },
  { id: 5, text: "Kids", dropdown: createDropdown("kids") },
  { id: 6, text: "Students", dropdown: createDropdown("students") },
  { id: 7, text: "Backpack", dropdown: createDropdown("backpack") },
  { id: 8, text: "New Arrivals", dropdown: createDropdown("new-arrivals") },
];

export default nav;
