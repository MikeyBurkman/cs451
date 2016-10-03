
import {Animal} from './data';
import * as data from './data';
import * as util from './util';

const allAnimals = data.getAnimals();

function isDangerous(animal: Animal): boolean {
    return (animal.isVenomous ||
        animal.attackedTrainer.some(util.inPastSixMonths));
}

function formatName(animal: Animal): string {
    return animal.name + ' the ' + animal.species +
    '; venomous: ' + animal.isVenomous + '\n';
}

const dangerousAnimals = allAnimals.filter(isDangerous);
console.log(dangerousAnimals.map(formatName).join(''));
