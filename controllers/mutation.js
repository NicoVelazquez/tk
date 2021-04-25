import {getMutations} from '../services/mutation';

const Mutation = require('../models/mutation');

const mutations = async (req, res) => {
    const mutations = getMutations(req.body.dna);
    if (mutations.length >= 2) {
        const mutation = new Mutation({
            found: true
        });
        await mutation.save();
        return res.status(200).json({'message': 'Found Mutations'});
    } else {
        if(mutations.length === 1 && mutations[0] === 'Invalid DNA'){
            return res.status(403).json({'message': 'Invalid DNA'});
        }
        const mutation = new Mutation({
            found: false
        });
        await mutation.save();
        return res.status(403).json({'message': 'Mutations not found'});
    }
};

export default mutations;
