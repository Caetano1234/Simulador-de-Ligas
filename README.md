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

**Player Level and Player Potential**

<br>

Player Level is a number that can vary from 1 to 99 and shows how good is the player (1 = worse player in the world, 99 = best player in the world). Potential just shows how many points of Player Level the player will have when he reaches his peak (if the player is too old, his potential will be equals to his level).

<br>

**Player Age**

<br>

How old is the player. If he gets too old, he will retire. The maximum age in the simulation is 42. After retiring, the simulation creates a new player in the team that he retired, with a potencial similar to his Player Level(maybe more, maybe less). Before retiring, he will start loosing Player Level points.

<br>

**Player Emotional Period**

<br>

It is how good the player is playing. If he scores 3 goals, for example, his "emotional period" will be higher than a player that scored no goals. It is important to add this value to the "Player Value Equation" because then, the better the player play, the higher he'll cost (similar to what happens in real life).

<br>

**Creating a new player**

<br>

Sometimes, in simulation, we need to create a new player. There are 2 specific cases: The simulation starts and the clubs are empty or some player retired.
