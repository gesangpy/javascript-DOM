// manipulasi node
const pBaru =  document.createElement('p');
const pText = document.createTextNode('Paragraf Baru');

// simpan di element p
pBaru.appendChild(pText);

// simpan di akhir section a
const sectionA =  document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const liText = document.createTextNode('Item Baru')
liBaru.appendChild(liText);

const ul =  document.querySelector('#b ul');
const li2 = document.querySelector('#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// remove child

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


// replace
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru =  document.createElement('h2');
const textH2 =  document.createTextNode('Judul Baru')
h2Baru.appendChild(textH2);

// final replace
sectionB.replaceChild(h2Baru, p4);

