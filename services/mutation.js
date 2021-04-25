const validateDNA = (dna) => {
    for (let e of dna) {
        if (e.length !== dna.length) {
            return false;
        }
    }
    return true;
};

export const getMutations = (dna) => {

    if (!validateDNA(dna)) {
        return ['Invalid DNA'];
    }

    const arrayLength = dna[0].length;
    let mutationsFound = [];

    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
            try {
                if (dna[i][j] === dna[i + 1][j + 1] && dna[i + 1][j + 1] === dna[i + 2][j + 2] && dna[i + 2][j + 2] === dna[i + 3][j + 3]) {
                    const finishPositionX = i + 3;
                    const finishPositionY = j + 3;
                    mutationsFound.push({
                        'form': 'diagonal',
                        'start': i + "-" + j,
                        'finish': finishPositionX + "-" + finishPositionY
                    });
                    // console.log("diagonal");
                    // console.log(dna[i][j])
                }
            } catch (e) {

            }
            try {
                if (dna[i][j] === dna[i][j + 1] && dna[i][j + 1] === dna[i][j + 2] && dna[i][j + 2] === dna[i][j + 3]) {
                    const finishPositionY = j + 3;
                    mutationsFound.push({
                        'form': 'horizontal',
                        'start': i + "-" + j,
                        'finish': i + "-" + finishPositionY
                    });
                    // console.log("horizontal");
                    // console.log(dna[i][j])
                }
            } catch (e) {

            }
            try {
                if (dna[i][j] === dna[i + 1][j] && dna[i + 1][j] === dna[i + 2][j] && dna[i + 2][j] === dna[i + 3][j]) {
                    mutationsFound.push({'form': 'vertical', 'start': i + "-" + j, 'finish': i + 3 + "-" + j});
                    // console.log("vertical");
                    // console.log(dna[i][j])
                }
            } catch (e) {

            }
            try {
                if (dna[i][j] === dna[i - 1][j - 1] && dna[i - 1][j - 1] === dna[i - 2][j - 2] && dna[i - 2][j - 2] === dna[i - 3][j - 3]) {
                    const startPositionX = i - 3;
                    const startPositionY = j - 3;
                    if (!mutationsFound.some(e => e.form === 'diagonal' && e.start === startPositionX + "-" + startPositionY)) {
                        mutationsFound.push({
                            'form': 'diagonal',
                            'start': startPositionX + "-" + startPositionY,
                            'finish': i + "-" + j
                        });
                    }
                    // console.log("diagonal");
                    // console.log(dna[i][j])
                }
            } catch (e) {

            }

        }
    }
    return mutationsFound;
};
