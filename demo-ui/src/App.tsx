import React from "react";
import ReactECharts from "echarts-for-react";

export default function App() {
  /** 柱状图配置 */
  const barOption = {
    tooltip: { trigger: "axis" },
    legend: { data: ["安全", "不安全", "拒答"] },
    grid: { left: "3%", right: "3%", bottom: "3%", containLabel: true },
    xAxis: { type: "category", data: ["M1", "M2", "M3", "M4", "M5"] },
    yAxis: { type: "value" },
    series: [
      { name: "安全", type: "bar", stack: "total", data: [510, 510, 510, 510, 510], itemStyle: { color: "#34d399" } },
      { name: "不安全", type: "bar", stack: "total", data: [320, 220, 320, 220, 320], itemStyle: { color: "#f87171" } },
      { name: "拒答", type: "bar", stack: "total", data: [0, 220, 0, 220, 0], itemStyle: { color: "#d1d5db" } }
    ]
  };

  /** 饼图配置 */
  const pieOption = {
    tooltip: { trigger: "item" },
    legend: {
      orient: "vertical",
      right: 10,
      top: "center",
      formatter: (name) => {
        const map = {
          "社会主义核心价值观": "36%",
          "歧视": "30%",
          "商业合法合规": "20%",
          "个人权益": "10%",
          "其他": "5%"
        };
        return `${name} | ${map[name]}`;
      }
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 36, name: "社会主义核心价值观", itemStyle: { color: "#3b82f6" } },
          { value: 30, name: "歧视", itemStyle: { color: "#22c55e" } },
          { value: 20, name: "商业合法合规", itemStyle: { color: "#e879f9" } },
          { value: 10, name: "个人权益", itemStyle: { color: "#38bdf8" } },
          { value: 5, name: "其他", itemStyle: { color: "#9ca3af" } }
        ]
      }
    ]
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* 顶部卡片 */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {[
          { title: "题库总量", value: "200,000", desc: "较上月增长 8%" },
          { title: "评测模型", value: "15", desc: "较上月增长 10%" },
          { title: "已完成评测", value: "1,000", desc: "较上周增长 10%" },
          { title: "红队测试", value: "2,000", desc: "较上周增长 10%" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4">
            <div className="text-gray-600">{item.title}</div>
            <div className="text-3xl font-bold">{item.value}</div>
            <div className="text-green-500 text-sm">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* 中间部分 */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* 柱状图 */}
        <div className="col-span-2 bg-white rounded-xl shadow p-4">
          <h3 className="mb-2 font-medium">最新完成评测模型风险统计</h3>
          <ReactECharts option={barOption} style={{ height: 300 }} />
        </div>

        {/* 安全风险统计 */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="mb-2 font-medium">安全风险统计</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">100</div>
              <div className="text-sm text-gray-500">社会主义核心价值观</div>
            </div>
            <div>
              <div className="text-2xl font-bold">320</div>
              <div className="text-sm text-gray-500">歧视</div>
            </div>
            <div>
              <div className="text-2xl font-bold">1000</div>
              <div className="text-sm text-gray-500">商业合法合规</div>
            </div>
            <div>
              <div className="text-2xl font-bold">439</div>
              <div className="text-sm text-gray-500">个人权益</div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部 */}
      <div className="grid grid-cols-2 gap-4">
        {/* 表格 */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="mb-2 font-medium">最近评测大模型</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th>模型名称</th>
                <th>评测时间</th>
                <th>测试题量</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "M1", time: "2025-09-20 10:56:17", num: "13300001111", status: "进行中" },
                { name: "M12", time: "2025-09-20 10:56:17", num: "13300001111", status: "已完成" },
                { name: "M1111", time: "2025-09-20 10:56:17", num: "13300001111", status: "已完成" },
                { name: "M1456", time: "2025-09-20 10:56:17", num: "13300001111", status: "进行中" },
                { name: "M15678900", time: "2025-09-20 10:56:17", num: "13300001111", status: "进行中" }
              ].map((row, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td>{row.name}</td>
                  <td>{row.time}</td>
                  <td>{row.num}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        row.status === "已完成" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 饼图 */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="mb-2 font-medium">题库分类统计</h3>
          <ReactECharts option={pieOption} style={{ height: 300 }} />
        </div>
      </div>
    </div>
  );
}
