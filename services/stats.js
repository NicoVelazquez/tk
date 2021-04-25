export const getStats = (mutations) => {
    let response = {'count_mutations': 0, 'count_no_mutation': 0, 'ratio': 0};
    for (let e of mutations) {
        if (e.found) {
            response.count_mutations++
        } else {
            response.count_no_mutation++
        }
    }
    response.ratio = response.count_mutations/response.count_no_mutation;

    return response;
};
