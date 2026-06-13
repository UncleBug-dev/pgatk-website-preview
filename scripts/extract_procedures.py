import pdfplumber
import json
import re

def clean_text(text):
    if text is None:
        return ""
    # Replace newlines with spaces and clean up multiple spaces
    text = text.replace('\n', ' ').replace('\r', ' ')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_pdf_data(pdf_path):
    procedures = []
    current_category = ""
    
    with pdfplumber.open(pdf_path) as pdf:
        for page_idx, page in enumerate(pdf.pages):
            tables = page.extract_tables()
            for table in tables:
                for row_idx, row in enumerate(table):
                    # Sometimes headers or category rows have fewer columns
                    # A category row usually spans the entire width (len=1 or elements are None except one)
                    non_empty = [c for c in row if c is not None and c.strip() != '']
                    
                    if len(non_empty) == 1 and len(row) > 1 and row[0] is not None:
                        # Category row? e.g. "ТРУД И СОЦИАЛЬНАЯ ЗАЩИТА"
                        # Let's check if it's the category
                        text = clean_text(row[0])
                        if text.isupper():
                            current_category = text
                        continue
                    
                    if len(row) >= 9:
                        # Probably a data row
                        # Check if it's the header row
                        if "Перечень" in clean_text(row[0]) and "процедур" in clean_text(row[0]):
                            continue
                            
                        # If first cell starts with a number (e.g. "2.1.") it's a new procedure
                        proc_text = clean_text(row[0])
                        if re.match(r'^\d+\.', proc_text):
                            procedures.append({
                                "category": current_category,
                                "id_name": proc_text,
                                "responsible": clean_text(row[1]),
                                "address": clean_text(row[2]),
                                "substitute": clean_text(row[3]),
                                "sub_address": clean_text(row[4]),
                                "documents": clean_text(row[5]),
                                "price": clean_text(row[6]),
                                "max_time": clean_text(row[7]),
                                "validity": clean_text(row[8])
                            })
                        elif len(procedures) > 0 and proc_text == "":
                            # Might be continuation of the previous procedure if cell 0 is empty but others are not
                            pass
                            
    return procedures

if __name__ == "__main__":
    data = extract_pdf_data("AdminProceduri.pdf")
    with open("procedures_data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Extracted {len(data)} procedures.")
