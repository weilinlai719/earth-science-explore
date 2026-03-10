// 標題：2023 年聖嬰事件對台灣鄰近海域海溫異常分佈之研究
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const year = 2023;

async function processData() {
    console.log(`正在從 NOAA 抓取 ${year} 年數據...（這可能需要一點時間）`);
    const url = `https://coastwatch.pfeg.noaa.gov/erddap/griddap/ncdcOisst21Agg_LonPM180.json?anom[(${year}-01-01T12:00:00Z):1:(${year}-12-31T12:00:00Z)][(0.0):1:(0.0)][(18.0):1:(28.0)][(115.0):1:(125.0)]`;

    try {
        const response = await axios.get(url, {
        timeout: 180000 
    });
        
        if (response.data && response.data.table && response.data.table.rows) {
            const rawRows = response.data.table.rows;
            console.log(`成功獲取 ${rawRows.length} 筆數據點，開始處理...`);

            // 整理為三維格式 (時間, 緯度, 經度, 距平值)
            const formattedData = rawRows.map(row => ({
                t: row[0].split('T')[0],
                lat: row[2],
                lon: row[3],
                v: row[4]
            }));

            // 存儲完整數據檔（供繪製三維時空圖使用）
            const summaryPath = path.join(__dirname, `report_summary_${year}.json`);
            fs.writeFileSync(summaryPath, JSON.stringify(formattedData));
            console.log(`✅ 完整數據已存至 sst_taiwan_${year}_full.json`);
            
            // 每月平均距平值
            const monthlySum = {};
            formattedData.forEach(item => {
                const month = item.t.substring(0, 7); // 取得 "2023-01" 格式
                if (!monthlySum[month]) {
                    monthlySum[month] = { total: 0, count: 0 };
                }
                if (item.v !== null) {
                    monthlySum[month].total += item.v;
                    monthlySum[month].count++;
                }
            });

            const monthlyReport = Object.keys(monthlySum).map(m => ({
                month: m,
                avg_anomaly: (monthlySum[m].total / monthlySum[m].count).toFixed(4)
            })).sort((a, b) => a.month.localeCompare(b.month));

            // 存儲分析摘要
            const fullDataPath = path.join(__dirname, `sst_taiwan_${year}_lite.json`);
            fs.writeFileSync(fullDataPath, JSON.stringify(monthlyReport, null, 2));
            
            console.log(`\n--- ${year} 年台灣周邊海溫距平月平均摘要 ---`);
            console.table(monthlyReport); 
            console.log(`\n分析建議：若 avg_anomaly 為正，代表該月比 1991-2020 平均值更熱。`);

        } else {
            console.error("NOAA 回傳內容格式不符，請確認回傳內容：", response.data);
        }
    } catch (error) {
        console.error("請求失敗:", error.message);
    }
}

processData();