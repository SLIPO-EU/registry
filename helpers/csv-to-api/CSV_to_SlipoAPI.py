# Author: Giorgos Kostoulas

from pandas import DataFrame, read_csv
import pandas as pd
import requests
from geojson import Point
import sys

api= sys.argv[1]
file_in =sys.argv[2] # 'osm_wigeoapi_sample_registry_v2.csv'
file_out = sys.argv[3]
pack_size = 1000
df = pd.read_csv(file_in,sep="|", names=['tmpId', 'source', 'sourceId', 'names','category', 'lon', 'lat'], header=None, skiprows=1)


def f(x):
    return Point((x[0], x[1]))

df['geometry']= df[['lon','lat']].apply(f, axis=1)


for i in range(int(df.shape[0]/pack_size)):
    data=df[i*pack_size:(i+1)*pack_size][['tmpId','source','sourceId','names','category','geometry']].to_json(orient='records')
    response = requests.post(api+'registerBach',headers={"Content-Type": "application/json"}, data=data)
    a=response.json()
    if not a['errors']:
        print(i,': Error list is empty!')
    else:
        train = pd.DataFrame.from_dict(a['errors'])
        train.to_csv(file_out)
