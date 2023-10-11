var quotes = {0: "Don't take rest after your first victory because if you fail in the second, more lips are waiting to say that your first victory was just luck.",
                1: "Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.",
                2: 'Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success.',
                3: 'Failure will never overtake me if my determination to succeed is strong enough.',
                4: 'Be Active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others.',
                5:"The only person you are destined to become is the person you decide to be.",
                6: "The best brains of the nation may be found on the last benches of the classroom.",
                7: "Life is a difficult game. You can win it only by retaining your birthright to be a person",
                8: "Dream is not that which you see while sleeping it is something that does not let you sleep.",
                9: "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone"}               



function addquote(){
    var show = document.querySelector('#quotes')
    var num = Math.floor(Math.random()* 9)

    show.querySelector('p').innerText = quotes[num]
}