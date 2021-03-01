import pandas as pd

headers = []
data = []

with open('./python/data.txt', 'r') as f:
    for line in f:
        tokens = line.split('\t')
        tokens = [t.strip() for t in tokens]
        
        if len(headers) == 0:
            headers = tokens
        else:
            data.append(tokens)

pd.DataFrame(data, columns=headers).to_csv('./python/data.csv', index=False)