# Simulador de Ligas

## English Version:

### How it started out?

I'm a person that likes soccer. So, this project started as a challenge for myself to do something good out JavaScript, and I think I finally did.
It started out as a "Soccer Player Carreer Simulator", but I noticed that it was really hard to do that, so I changed to a "Multiple Leagues Simulator".

### How it works?

The leagues, the teams and their strength are real-life based (even though I made a system for creating players that aren't real), and you'll see that. I created that trying to simulate how the leagues change. Maybe, later, I should try adding random actions (as a businessperson buys a team or some team being punished by not following financial fair play rules), but not now.
<br>
<br>
I tried to make a good player value equation, that considered his level now, his potential, his age, his current club and his emotional period. It ended up like that:

```
Math.floor((((*Player level* +  (*Player potential* * 2)) / 3) / (*Player age* * 3.41)) * (*player current club power* / 70) * 100000000 * *player emotional period*)
```

