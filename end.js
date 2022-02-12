const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const MostRecentScore = document.querySelector('#mostRecentScore')

const highscores = JSON.parse(localStorage.getItem('highScores'))  || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = MostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: MostRecentScore,
        name: username.value
    }
    highscores.push(score)

    highscores.sort((a,b) => {
        return b.score - a.score
    })

    highscores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}