from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
for category in ['short-term','working-holiday']:
    directory=root/'data'/category
    names=sorted(p.stem for p in directory.glob('*.json') if p.name!='index.json')
    (directory/'index.json').write_text(json.dumps(names,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(category, names)
