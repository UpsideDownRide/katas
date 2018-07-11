const INPUT = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris' ]
const RESULT = [
    [ 'Tokyo', 'Kyoto' ],
    [ 'London', 'Donlon' ],
    [ 'Rome' ],
    [ 'Paris' ]
]

const listTransformer = (arr, result = []) => {
    if (!arr.length) return result;
    else if (arr.length === 0) return arr
    
    const word = arr[0]
    const isAnagramOfWord = isAnagram(word)
    const {anagrams, rest} = arr.reduce((acc, el) => {
                isAnagramOfWord(el) ? acc.anagrams.push(el) : acc.rest.push(el)
                return acc}, {anagrams: [], rest: []})
    
    return listTransformer(rest, [...result, anagrams])
}

// this is suspect in terms of performance but gets the job done
// but the whole algo is quadratic so doesn't matter 
const wordTransformer = el => el.toLowerCase().split('').sort().join('')
const isAnagram = e1 => e2 => wordTransformer(e1) === wordTransformer(e2)

// quick and dirty assert using stringify
JSON.stringify(RESULT) === JSON.stringify(listTransformer(INPUT))