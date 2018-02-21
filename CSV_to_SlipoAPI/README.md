# Slipo CSV to Slipo Api script 
This script reads a csv file and registers each row to slipo registry for POIs

## Run the script
Install requirements
```
pip install -r /path/to/requirements.txt
```

and then run the script

```
python3 CSV_to_SlipoAPI.py Slipo_registry_url input.csv errors.out

```


## Input file
The input file must be a csv, and have the folloing fields

```
URI|SOURCE_PROVIDER|SOURCE_POI_ID|POI_NAME|POI_CATEGORY|LONGITUDE|LATITUDE
```
