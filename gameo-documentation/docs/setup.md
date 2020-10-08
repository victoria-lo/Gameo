---
id: setup
title: Preparing Dataset for PyTorch
slug: /preparing-dataset-for-pytorch
---

## Cleaning Up Datasets

We are using 2 datasets to build the PyTorch model.

### 1. Metacritic Game Info Dataset

This dataset contains all video games published from 1998-2018. Here's a snippet of what it looks like:

| Unnamed | 0   | Title                                | Year | Publisher              | Genre                                     | Platform       | Metascore | Avg_Userscore | No_Players |
| ------- | --- | ------------------------------------ | ---- | ---------------------- | ----------------------------------------- | -------------- | --------- | ------------- | ---------- |
| 0       | 0   | The Legend of Zelda: Ocarina of Time | 1998 | Nintendo               | Action Adventure;Fantasy                  | Nintendo64     | 99        | 9.1           | 1 Player   |
| 1       | 1   | Tony Hawk's Pro Skater 2             | 2000 | NeversoftEntertainment | Sports;Alternative;Skateboarding          | PlayStation 98 | 7.4       | 1-2           |
| 2       | 2   | Grand Theft Auto IV                  | 2008 | RockstarNorth          | Action Adventure;Modern;Modern;Open-World | PlayStation3   | 98        | 7.5           | 1 Player   |

To keep our recommendation engine up-to-date, we are only interested in game titles after the year 2010. So let's clean up this dataset.

#### Import pandas

First we import pandas, a Python package used for data manipulation and analysis.

```
import pandas as pd
```

#### Read and Filter Data

Then, we use pandas to read our dataset file that we have imported.

```
games_df = pd.read_csv("game_info.csv")
```

This dataset contains some Year values that are null. Select only those that are not null and after the year 2010.

```
games_df = games_df[games_df['Year'].notnull()]
games_df=games_df.loc[games_df.Year>=2010.0].reset_index(drop=True)
```

Finally, let's remove the 'Unnamed' column since it is redundant and rename our cleaned up dataframe to `df`.

```
df = games_df.drop(columns=['Unnamed'], axis=1)
```

Below is a snippet of what `df` looks like:

| Index | Title                | Year | Publisher        | Genre                                     | Platform     | Metascore | Avg_Userscore | No_Players            |
| ----- | -------------------- | ---- | ---------------- | ----------------------------------------- | ------------ | --------- | ------------- | --------------------- |
| 0     | Super Mario Galaxy 2 | 2010 | NintendoEADTokyo | Action;Platformer;Platformer;3D           | Wii          | 97        | 9.1           | No Online Multiplayer |
| 1     | Grand Theft Auto V   | 2014 | RockstarNorth    | Action Adventure;Modern;Open-World        | XboxOne      | 97        | 7.8           | Up to 30              |
| 2     | Grand Theft Auto V   | 2013 | RockstarNorth    | Modern;Action Adventure;Modern;Open-World | PlayStation3 | 97        | 8.3           | Up to 16              |

### 2. Metacritic Game User Ratings

This dataset contains user ratings and comments for specific games. We are interested in only looking at the game titles in our `df`, `username` and the `userscore` columns. Before clean up, the dataset looks like this snippet:

| Unnamed | 0   | Title                                | Platform   | Userscore | Comment                                           | Username   |
| ------- | --- | ------------------------------------ | ---------- | --------- | ------------------------------------------------- | ---------- |
| 0       | 0   | The Legend of Zelda: Ocarina of Time | Nintendo64 | 10        | Everything in OoT is so near at perfection, it... | SirCaestus |
| 1       | 1   | The Legend of Zelda: Ocarina of Time | Nintendo64 | 10        | I won't bore you with what everyone is already... | Kaistlin   |
| 2       | 2   | The Legend of Zelda: Ocarina of Time | Nintendo64 | 10        | Anyone who gives the masterpiece below a 7 or ... | Jacody     |

#### Read and Filter Data

Same the previous dataset, we use pandas to read the data file.

```
user_df=pd.read_csv("metacritic_game_user_comments.csv")
```

Then we remove the columns we don't need.

```
user_df = user_df.drop(columns=['Unnamed', 'Platform','Comment'], axis=1)
```

And we select only the data with Title that exists in `df` Title column, because we only want user ratings for games after 2010. The final cleaned dataframe is called `users`.

```
users = user_df.loc[user_df['Title'].isin(df['Title'])].reset_index(drop=True)
```

A snippet of the cleaned up dataset looks like:

| Index | Title                | Userscore | Username        |
| ----- | -------------------- | --------- | --------------- |
| 0     | Super Mario Galaxy 2 | 10        | S.Kumar         |
| 1     | Super Mario Galaxy 2 | 8         | ThePlasmaQuasar |
| 2     | Super Mario Galaxy 2 | 10        | juanandesign    |

## Export Dataset for Model

In order to work with the dataset easily, it is better to use continuous ids to identify game titles and users.

### Encode Columns

We can create a function to encode a pandas columns with ids.

```
def encode_column(column):
    """ Encodes a pandas column with continous IDs"""
    keys = column.unique()
    key_to_id = {key:idx for idx,key in enumerate(keys)}
    return key_to_id, np.array([key_to_id[x] for x in column]), len(keys)
```

### Encode Dataframe

Then, encode the `users` dataframe for the `Title` and `Username` columns with the following function.

```
def encode_df(users):
   """Encodes rating data with continuous user and game title ids"""
   game_ids, users['TitleId'], num_games = encode_column(users['Title'])
   user_ids,users['UserId'], num_users = encode_column(users['Username'])
   return users, num_users, num_games, user_ids, game_ids
```

### Export to csv

Execute the function and export the new dataset to csv.

```
users, num_users, num_games, user_ids, game_ids = encode_df(users)
users.to_csv('game_ratings.csv')
```

This csv file will be used for training and re-training the model with PyTorch. Below is a snippet of it:

| Index | Title                | Userscore | Username        | UserId | TitleId |
| ----- | -------------------- | --------- | --------------- | ------ | ------- |
| 0     | Super Mario Galaxy 2 | 10        | S.Kumar         | 0      | 0       |
| 1     | Super Mario Galaxy 2 | 8         | ThePlasmaQuasar | 1      | 0       |
| 2     | Super Mario Galaxy 2 | 10        | juanandesign    | 2      | 0       |
