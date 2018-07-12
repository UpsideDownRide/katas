const INPUT = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris' ]
const RESULT = [
    [ 'Tokyo', 'Kyoto' ],
    [ 'London', 'Donlon' ],
    [ 'Rome' ],
    [ 'Paris' ]
]

const listTransformer = (arr) => {
    return arr
            .reduce(listReducer, {words: {}, result: []})
            .result
}

// This could be made more declarative
const listReducer = (acc, el, i) => {
    const sortedLetters = sortLetters(el)

    if (Object.keys(acc.words).includes(sortedLetters)) {
        acc.result[acc.words[sortedLetters]].push(el)
    } else {
        acc.words[sortedLetters] = i
        acc.result.push([el])
    }
    return acc
}

// Still don't like this but it gets the job done - alternative would be hashing?
const sortLetters = (str) => str.toLowerCase().split('').sort().join('')

// Quick and dirty assert using stringify
JSON.stringify(RESULT) === JSON.stringify(listTransformer(INPUT))