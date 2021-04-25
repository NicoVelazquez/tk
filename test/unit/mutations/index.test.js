import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {mutationArray} from './data';
import {getMutations} from "../../../services/mutation";

const expect = chai.expect;

chai.use(chaiAsPromised);

describe('Mutation Service', () => {

    describe('getMutations with different DNA', () => {
        it('should return found mutation', () => {
            const result = getMutations(mutationArray[0].dna);
            expect(result.length).equal(3);
        });

        it('should not return found mutation', () => {
            const result = getMutations(mutationArray[1].dna);
            expect(result.length).equal(1);
        });

        it('should return invalid dna', () => {
            const result = getMutations(mutationArray[3].dna);
            expect(result[0]).equal('Invalid DNA');
        });
    });

});
