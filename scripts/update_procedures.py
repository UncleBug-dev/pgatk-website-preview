import json
import re

with open("procedures_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Convert to TS object string
ts_objects = []
for proc in data:
    id_val = proc["id_name"].split(" ")[0].rstrip(".")
    name_val = proc["id_name"].replace(id_val + ".", "").strip()
    # In some cases the id_name doesn't have a dot or is weird
    if not proc["id_name"][0].isdigit():
        id_val = ""
        name_val = proc["id_name"]
        
    ts_obj = f"""  {{
    id: '{id_val}',
    category: '{proc["category"]}',
    name: `{name_val}`,
    responsible: `{proc["responsible"]}`,
    address: `{proc["address"]}`,
    substitute: `{proc["substitute"]}`,
    sub_address: `{proc["sub_address"]}`,
    documents: `{proc["documents"]}`,
    price: `{proc["price"]}`,
    max_time: `{proc["max_time"]}`,
    validity: `{proc["validity"]}`
  }}"""
    ts_objects.append(ts_obj)

procedures_str = "const PROCEDURES: Procedure[] = [\n" + ",\n".join(ts_objects) + "\n];"

with open("pages/AdministrativeProcedures.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the interface
old_interface = r"interface Procedure \{.*?\}"
new_interface = """interface Procedure {
  id: string;
  name: string;
  responsible: string;
  address: string;
  substitute: string;
  sub_address: string;
  documents: string;
  price: string;
  max_time: string;
  validity: string;
  category: string;
}"""
content = re.sub(old_interface, new_interface, content, flags=re.DOTALL)

# Replace the PROCEDURES array
old_procedures = r"const PROCEDURES: Procedure\[\] = \[.*?\];"
content = re.sub(old_procedures, procedures_str, content, flags=re.DOTALL)

# Replace the rendering logic
# We need to replace the Left Column part where proc.location, proc.phone, proc.schedule, proc.backup are used.
old_left_col = r"""\{/\* Left Column \*/\}.*?(?=\{/\* Right Column \*/\})"""
new_left_col = """{/* Left Column */}
                              <div className="space-y-4">
                                <div>
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Ответственный</span>
                                  <div className="font-medium text-slate-900">{proc.responsible}</div>
                                  <div className="text-slate-500 text-xs mt-1 whitespace-pre-wrap leading-relaxed">{proc.address}</div>
                                  {proc.substitute && proc.substitute !== "-" && proc.substitute !== "" && (
                                    <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                                      <span className="font-bold text-slate-600 block mb-1">В случае отсутствия основного работника:</span>
                                      <div className="font-medium text-slate-800">{proc.substitute}</div>
                                      <div className="mt-1 whitespace-pre-wrap leading-relaxed">{proc.sub_address}</div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              """
content = re.sub(old_left_col, new_left_col, content, flags=re.DOTALL)

# Also update the variables in the Right Column (cost -> price, term -> max_time)
content = content.replace("proc.cost", "proc.price")
content = content.replace("proc.term", "proc.max_time")

with open("pages/AdministrativeProcedures.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("AdministrativeProcedures.tsx updated successfully!")
