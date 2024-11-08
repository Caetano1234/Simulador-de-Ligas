# Simulador de Ligas

**English Version:**

## How it started out?

I'm a person that likes soccer. So, this project started as a challenge for myself to do something good out JavaScript, and I think I finally did.
It started out as a "Soccer Player Carreer Simulator", but I noticed that it was really hard to do that, so I changed to a "Multiple Leagues Simulator".

## How it works?

The leagues, the teams and their strength are real-life based (even though I made a system for creating players that aren't real), and you'll see that. I created that trying to simulate how the leagues change. Maybe later, I should try adding random actions (such as a businessperson buying a team or some team being punished for not following financial fair play rules), but not now.
<br>
I tried to make a good player value equation, that considered his level now, his potential, his age, his current club and his emotional period. It ended up like that:

```
Math.floor((((Player level +  (Player potential * 2)) / 3) / (Player age * 3.41)) * (player current club power / 70) * 100000000 * player emotional period)
```

But what is all that?

### About player:

<br>

**Player Level and Player Potential**

Player Level is a number that can vary from 1 to 99 and shows how good is the player (1 = worse player in the world, 99 = best player in the world). Potential just shows how many points of Player Level the player will have when he reaches his peak (if the player is too old, his potential will be equals to his level).

<br>

**Player Age**

How old is the player. If he gets too old, he will retire. The maximum age in the simulation is 42. After retiring, the simulation creates a new player in the team that he retired, with a potencial similar to his Player Level(maybe more, maybe less). Before retiring, he will start loosing Player Level points.

<br>

**Player Emotional Period**

It is how good the player is playing. If he scores 3 goals, for example, his "emotional period" will be higher than a player that scored no goals. It is important to add this value to the "Player Value Equation" because then, the better the player play, the higher he'll cost (similar to what happens in real life). Normally, this number is bigger or equal to 1, but in some cases (when the player isn't playing very well), it can be less.

<br>

**Creating a new player**

Sometimes, in simulation, we need to create a new player. There are 2 specific cases: The simulation starts and the clubs are empty or some player retired.

<br>

__Creating when the simulation starts:__ Creates a name based on its nationality. Age should be raging from 15 to 35. Player Level has to be similar to the his club strength. If he is young, he'll get a potential higher than his initial level.
<br>
__Creating when someone retires:__ It is simpler. Just recreate the player who just retired with another name and another age. The nationality changes for the country of the team the player who retired was playing.

### About the clubs:

They're inspired in real clubs. The names are changed for fun, but you can still understand.

<br>

**Transfers**

All teams, all seasons, have 70% of chance to want to buy some players. They have to spend the club's money divided by two divided by the numbers of players they want to buy. If they don't have enough money to buy anyone, they won't. If the club needs players (because its almost empty), the club is forced to want to buy someone.

<br>

**Unemployed**

One option to clubs that doesn't have enough money to buy new players is getting unemployed players for free. Unemployed players appears when a club don't want the player anymore and then don't make a new contract with he. 

<br>

**Money**

Clubs appear with a pre-setted amount of money. With the simulation, it can change because of transfers and winning (or not winning) the league.

<br>

> Note: Sorry for non-portuguese speakers. I wrote all the code in portuguese and this can make it more difficult to understand.

<br>
<br>

**Versão em português:**

## Como isso começou?

Eu sou uma pessoa que gosta muito de futebol, então, decidi me desafiar a fazer algo divertido com meu conhecimento de JavaScript, e acho que finalmente consegui. No início, pretendia fazer um "simulador de carreira de jogador de futebol", mas percebi que seria bem difícil então mudei apenas para um "simulador de ligas".

## Como funciona?

As ligas, os times e suas forças são baseadas na vida real (apesar dos jogadores não), e você provavelmente vai perceber. Eu criei isso com o propósito de mostrar como as ligas mudam com o tempo. Talvez, daqui a algum tempo, eu tente adicionar coisas que deixem ainda mais realista (como empresários comprando clubes ou clubes sendo punidos por fair play financeiro), mas mais para frente. Eu tentei fazer uma equação de "valor de jogador" que se adequace com seu nível, potencial, sua idade, a força do seu time atual e a moral dele. Acabou assim:

```
Math.floor((((Nível do Jogador +  (Potencial do Jogador * 2)) / 3) / (Idade do Jogador * 3.41)) * (Força do Clube Atual / 70) * 100000000 * Moral do Jogador)
```

Mas afinal, o que essas variáveis significam?

### Sobre os jogadores:

**Nível e Potencial**

Nível é representado por um número que varia de 1 a 99 que nos mostra o quão bom é o jogador (1 sendo horrívelmente ruim e 99 sendo o melhor jogador do mundo). Potencial apenas mostra o nível quando o jogador alcançar o seu auge (mas se o jogador for muito velho, seu potencial será igual ao seu nível)



