
function animalTemplate(data) {
  return `
    <li>${data.Name} is a ${data.Type}. This animal likes to eat ${data.Diet}.</li>
    <br><br>
  `;
}

export default animalTemplate; 
