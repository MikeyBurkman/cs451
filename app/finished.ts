
import {Animal, getAnimals} from './data';
import * as util from './util';

// Procedural way

function filterDangerousAnimals(animals: Animal[]) {
    const results: Animal[] = [];
    for (let i = 0; i < animals.length; i += 1) {
        const animal = animals[i];

        let found = false;
        for (let j = 0; j < animal.attackedTrainer.length; j += 1) {
            const date = animal.attackedTrainer[j];
            if (util.inPastSixMonths(date)) {
                results.push(animal);
                found = true;
                break;
            }
        }

        if (!found && animal.isVenomous) {
            results.push(animal);
            continue;
        }
    }
    return results;
}

function formatAnimalNames(animals: Animal[]) {
    const results: string[] = [];
    for (let i = 0; i < animals.length; i += 1) {
        const animal = animals[i];
        results.push(animal.name + ' the ' + animal.species);
    }
    return results;
}

// Functional way!

function attackedInPastSixMonths(animal: Animal) {
    return animal.attackedTrainer.filter(util.inPastSixMonths).length > 0;
}

function isDangerous(animal: Animal) {
    return attackedInPastSixMonths(animal) || animal.isVenomous;
}

function attackedMoreThan(times: number) {
    return (animal: Animal) => animal.attackedTrainer.length > times;
}

function formatAnimalName(animal: Animal) {
    return animal.name + ' the ' + animal.species;
}

///////////

const allAnimals = getAnimals();

// Procedural way
console.log(formatAnimalNames(filterDangerousAnimals(allAnimals)));

// Functional way
console.log(allAnimals
    .filter(isDangerous)
    .map(formatAnimalName));