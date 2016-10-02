
export interface Animal {
    readonly name: string;
    readonly species: string;
    readonly attackedTrainer: Date[];
    readonly isVenomous: boolean;
}

export function getAnimals(): Animal[] {
    return [{
        name: 'Jonathan',
        species: 'Aldabra Tortoise',
        attackedTrainer: [],
        isVenomous: false
    }, {
        name: 'Ziggy',
        species: 'Alpaca',
        attackedTrainer: [],
        isVenomous: false
    }, {
        name: 'Andy',
        species: 'Andean Bear',
        attackedTrainer: [new Date('2016-06-01'), new Date('2015-03-23')],
        isVenomous: false
    }, {
        name: 'Ambika',
        species: 'African Elephant',
        attackedTrainer: [new Date('2014-10-20')],
        isVenomous: false
    }, {
        name: 'Jetty',
        species: 'California Sea Lion',
        attackedTrainer: [],
        isVenomous: false
    }, {
        name: 'Arya',
        species: 'Eyelash Palm Pitviper',
        attackedTrainer: [],
        isVenomous: true
    }, {
        name: 'Dante',
        species: 'Giant Anteater',
        attackedTrainer: [],
        isVenomous: false
    }, {
        name: 'Macbeth',
        species: 'King Cobra',
        attackedTrainer: [new Date('2015-12-24')],
        isVenomous: true
    }, {
        name: 'Arthur',
        species: 'Three-Banded Amadillo',
        attackedTrainer: [],
        isVenomous: false
    }, {
        name: 'Ted',
        species: 'Short-Eared Elephant Shrew',
        attackedTrainer: [],
        isVenomous: false
    }, {
       name: 'Mikey',
       species: 'Two-Toed Sloth',
       attackedTrainer: [new Date('2009-05-21')],
       isVenomous: false 
    }, {
        name: 'Clive',
        species: 'Kiwi',
        attackedTrainer: [new Date('2016-09-28'), new Date('2016-08-09'), new Date('2016-07-13')],
        isVenomous: false
    }];
}