function init() {
    createAlphabeticalLinks();
}

function createAlphabeticalLinks() {
    const alphabets = document.getElementById('alphabets');

    getAlphabets().forEach(alpha => {
        const btn = document.createElement('button');
        btn.innerText = alpha;
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'btn btn-info btn-space');
        btn.setAttribute('href', '#');
        btn.setAttribute('onclick', `letterClicked('${alpha}')`);

        alphabets.append(btn);
    });
}

function getAlphabets() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
}

function letterClicked(letter) {
    const div = document.getElementById('flowers');
    div.innerHTML = '';

    const flowers = getFlowersByLetter(letter);

    if (flowers.length === 0) {
        const flowerDiv = document.createElement('div');
        flowerDiv.setAttribute('class', 'alert alert-primary');
        flowerDiv.setAttribute('role', 'alert');
        flowerDiv.innerHTML = `No flowers starting with the letter <b>${letter}</b>.`;
        
        div.append(flowerDiv);
        return;
    }

    flowers.forEach(flower => {
        const img = document.createElement('img');
        img.setAttribute('src', flower.image);
        img.setAttribute('width', '50');
        img.setAttribute('height', '50');

        const pName = document.createElement('p');
        pName.innerHTML = `<b>${flower.name}</b>`;

        const pMeaning = document.createElement('p');
        pMeaning.innerText = `Meaning: ${flower.meaning}`;


        const pInfo = document.createElement('p');
        pInfo.innerHTML = `Geography: <span class="badge bg-primary">${flower.geographic_origin}</span>&nbsp;`;
        pInfo.innerHTML += `Etymology: <span class="badge bg-success">${flower.etymology}</span>`;

        const flowerDiv = document.createElement('div');
        flowerDiv.append(img);
        flowerDiv.append(pName);
        flowerDiv.append(pMeaning);
        flowerDiv.append(pInfo);

        div.append(flowerDiv);
    });
}

function getFlowersByLetter(letter) {
    const data = getData();
    return Object.keys(data)
        .filter(name => name.toLowerCase().startsWith(letter.toLowerCase()))
        .map(name => {
            const flower = data[name];
            return flower;
        });
}

function getData() {
    return {
        "Acacia": {
            "name": "Acacia",
            "geographic_origin": "Australia",
            "meaning": "Thorny Tree",
            "etymology": "Greece",
            "image": "images/AcaciaFlower.jpg"
        },
        "Acanthus": {
            "name": "Acanthus",
            "geographic_origin": "Mediterranean",
            "meaning": "Enduring Life",
            "etymology": "Mediterranean",
            "image": "images/AcanthusFlower.jpg"
        },
        "Aloe": {
            "name": "Aloe",
            "geographic_origin": "Arabian Peninsula",
            "meaning": "Forest",
            "etymology": "Greece",
            "image": "images/AloeFlower.jpg"
        },
        "Amaranth": {
            "name": "Amaranth",
            "geographic_origin": "Mediterranean",
            "meaning": "Unfading",
            "etymology": "Greece",
            "image": "images/AmaranthFlower.jpg"
        },
        "American Ash": {
            "name": "American Ash",
            "geographic_origin": "Mexico",
            "meaning": "Spear",
            "etymology": "Latin",
            "image": "images/AmericanAshFlower.jpg"
        },
        "Angelica": {
            "name": "Angelica",
            "geographic_origin": "Iceland",
            "meaning": "Angel",
            "etymology": "Greece",
            "image": "images/AngelicaFlower.jpg"
        },
        "Anthericum": {
            "name": "Anthericum",
            "geographic_origin": "Africa",
            "meaning": "Straw",
            "etymology": "Greece",
            "image": "images/AnthericumFlower.jpg"
        },
        "Arum": {
            "name": "Arum",
            "geographic_origin": "Europe",
            "meaning": "Arrow",
            "etymology": "Greece",
            "image": "images/ArumFlower.jpg"
        },
        "Aspen": {
            "name": "Aspen",
            "geographic_origin": "Northern Hemisphere",
            "meaning": "Quaking Tree",
            "etymology": "America",
            "image": "images/AspenFlower.jpg"
        },
        "Aster": {
            "name": "Aster",
            "geographic_origin": "Greece",
            "meaning": "Star",
            "etymology": "Greece",
            "image": "images/AsterFlower.jpg"
        }
    }
}