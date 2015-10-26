
function animalTemplate(data) {
  return `
    <li>${data.Name} is a ${data.Type}</li>
  `;
}

export default animalTemplate;