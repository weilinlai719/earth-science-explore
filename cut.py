import json
import os

# 設定原始檔案名稱 (請確認檔名是否正確)
input_files = [r'c:\js\earth-science-explore\report_summary_2016.json']

def split_json():
    for file_name in input_files:
        if not os.path.exists(file_name):
            print(f"找不到檔案: {file_name}，跳過。")  
            print("目前目錄下的檔案有：", os.listdir('.'))
            continue
        print(f"正在處理 {file_name}...")
        with open(file_name, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        # 按月份分組
        monthly_data = {}
        for entry in data:
            # 取得日期 yyyy-mm
            month_key = entry['t'][:7] 
            if month_key not in monthly_data:
                monthly_data[month_key] = []
            monthly_data[month_key].append(entry)
            
        # 建立輸出資料夾
        output_dir = 'data'
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        # 儲存拆分後的檔案
        for month, entries in monthly_data.items():
            output_path = os.path.join(output_dir, f"{month}.json")
            with open(output_path, 'w', encoding='utf-8') as out_f:
                # 使用 separators 去除空格，極大化壓縮體積
                json.dump(entries, out_f, separators=(',', ':'))
            print(f"已生成: {output_path} (資料筆數: {len(entries)})")

    print("\n所有檔案拆分完成！請將 'data' 資料夾上傳至 GitHub。")

if __name__ == "__main__":
    split_json()