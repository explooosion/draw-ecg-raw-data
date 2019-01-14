# draw-ecg-raw-data
This is a demo for ecg raw data.

1. index.html：ECG繪製之網頁檔案
2. ecg_c4.csv：原始資料， 包含了時間以及電位差
3. csv_one.csv：將 ecg_c4.csv 之時間移除後的資料
4. convert.js：將 csv 轉換成 json 格式之檔案(使用 Node.js 執行)
5. csv.json：csv_one.csv 轉換成 json 之檔案
6. csv.js：將 csv.json 整理後之檔案