# Monte
A proof and visualization of the Monte Hall paradox.

What is a paradox? A paradox is any statement that goes against intuition.
In 1975, Statistician, Steve Selvin, posed a question known as the Monte Hall Problem. Being named after the host of the show that inspired the problem, *Let's Make A Deal.*
A game show in which contestants must choose one of three doors to the win either a car or a goat. For a time after the problem was first introduced, contraversey arose over the advantages of sticking with you intital choice, or switching, after an option is removed from play. For a while, most poople concluded that the it didnt matter, as with only two options remaining, your odds were 50/50.

but in 1990, the question was again posed to Journalist, Marilyn Vos Savant; writer of *Parade Magazine's* "Ask Marilyn" column.

*Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?*

Vos Savant's response was that the contestant must always switch doors, stating that doing so would nearly double their chances. But how? well if we go back to the beginning of the problem; you start the game with three options, and thus, a 1/3 chance of picking the car on your first try. Removing a door from the game does nothing to change these oddds, as it has no impact on your intial choice. This is because of an assumption that this problem follows: that the removed choice will neither be the the winning door, nor the player's selection. Even with an option rremoved, it is still not very likely that the contestant's initial choice was correct. And thus, they woud have better odds if they changed their answer.

You can test this yourself with [This Simulation](https://MatthewZenn.github.io/Monte), which let's you play as many games as you want, while you get to watch the average win rate(from switching) change in real time, as each game is run.