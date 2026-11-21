import argparse, json
from pathlib import Path
from PIL import Image, ImageOps
parser=argparse.ArgumentParser(description='Prepare portfolio photographs without cropping.')
parser.add_argument('source',type=Path)
args=parser.parse_args()
project=Path(__file__).resolve().parent
photos=json.loads((project/'photo-sources.json').read_text(encoding='utf-8'))
missing=[p['file'] for p in photos if not (args.source/p['file']).is_file()]
if missing:
    raise SystemExit('Missing photographs: '+', '.join(missing))
for photo in photos:
    source=args.source/photo['file']
    with Image.open(source) as original:
        image=ImageOps.exif_transpose(original).convert('RGB')
        image.thumbnail((2200,2200),Image.Resampling.LANCZOS)
        destination=project/'photos'/(photo['id']+'.webp')
        destination.parent.mkdir(parents=True,exist_ok=True)
        image.save(destination,'WEBP',quality=91,method=6)
        print(photo['id'],image.size)
print('Prepared all 20 photographs.')

