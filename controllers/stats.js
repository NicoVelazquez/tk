import {getStats} from "../services/stats";

const Mutation = require('../models/mutation');

const stats = async (req, res) => {
    const mutations = await Mutation.find();
    const stats = getStats(mutations);
    return res.status(200).json(stats);
};

export default stats;
