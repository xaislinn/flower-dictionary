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

        alphabets.append(btn);
    });
}

function getAlphabets() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
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