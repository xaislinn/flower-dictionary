import pandas as pd
import json

df = pd.read_csv('./python/data.csv')

cols = df.columns
data = {r['name']: {c: r[c] for c in cols} for _, r in df.iterrows()}

with open('./python/data.json', 'w') as f:
    json.dump(data, f, indent=2)