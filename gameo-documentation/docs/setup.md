---
id: setup
title: Preparing Dataset for PyTorch
slug: /preparing-dataset-for-pytorch
---

## Datasets

We are using 2 datasets to build the PyTorch model.

### 1. Metacritic Game Info Dataset

This dataset contains all video games published from 1998-2018.

| Unnamed | Title | Year                                 | Publisher | Genre                  | Platform                                  | Metascore      | Avg_Userscore | No_Players |
| ------- | ----- | ------------------------------------ | --------- | ---------------------- | ----------------------------------------- | -------------- | ------------- | ---------- |
| 0       | 0     | The Legend of Zelda: Ocarina of Time | 1998      | Nintendo               | Action Adventure;Fantasy                  | Nintendo64     | 99            | 9.1        | 1 Player |
| 1       | 1     | Tony Hawk's Pro Skater 2             | 2000      | NeversoftEntertainment | Sports;Alternative;Skateboarding          | PlayStation 98 | 7.4           | 1-2        |
| 2       | 2     | Grand Theft Auto IV                  | 2008      | RockstarNorth          | Action Adventure;Modern;Modern;Open-World | PlayStation3   | 98            | 7.5        | 1 Player |
| 3       | 3     | SoulCalibur                          | 1999      | Namco                  | Action;Fighting;3D                        | Dreamcast      | 98            | 8.6        | 1-2 |
| 4       | 4     | Grand Theft Auto IV                  | 2008      | RockstarNorth          | Action Adventure;Modern;Modern;Open-World | Xbox360        | 98            | 7.9        | 1 Player |

To keep our recommendation engine up-to-date, we are only interested in game titles after the year 2010.
