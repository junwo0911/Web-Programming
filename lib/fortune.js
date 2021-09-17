const fortuneCookies = [
    "자세히 보아야 예쁘다",
    "오래 보아야 사랑스럽다",
    "너도 그렇다"
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}