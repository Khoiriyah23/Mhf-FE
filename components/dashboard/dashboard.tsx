"use client"; 

import React from "react";
import { Card, CardContent } from "@/components/ui/card"; 
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const Dashboard = () => {
  // content analysis pie chart
  const contentData = [
    { name: "Approved", value: 30, color: "#6DA34D" },
    { name: "Declined", value: 15, color: "#D9534F" },
    { name: "Pending", value: 10, color: "#E4C44D" },
  ];

  // Sample data for donations received over time
  const donationData = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 25 },
    { month: "Mar", value: 35 },
    { month: "Apr", value: 38 },
    { month: "May", value: 38 },
    { month: "Jun", value: 40 },
    { month: "Jul", value: 42 },
    { month: "Aug", value: 44 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 46 },
    { month: "Nov", value: 30 },
    { month: "Dec", value: 25 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
      <p className="text-gray-600 mb-6">Review the updated foundation dashboard</p>

      {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Ongoing Campaigns", value: 20, icon: "📢" },
          { title: "Total Articles", value: 15, icon: "📄" },
          { title: "Total Blogs", value: 10, icon: "📝" },
          { title: "Successful Donations", value: 20, icon: "💰" },
        ].map((item, index) => (
          <Card key={index} className="p-4 shadow-md">
            <h2 className="text-lg font-medium">{item.title}</h2>
            <CardContent className="flex items-center justify-between">
              {/* <h2 className="text-lg font-medium">{item.title}</h2> */}
              <p className="text-2x1 font-bold mt-2">{item.value}</p>
              <span className="text-3xl">{item.icon}</span>
            </CardContent>
            {/* <p className="text-2x1 font-bold mt-2">{item.value}</p> */}
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Pie Chart */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Content Analysis</h3>
          <PieChart width={300} height={200}>
            <Pie data={contentData} dataKey="value" outerRadius={80} label>
              {contentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="flex justify-between mt-2">
            {contentData.map((entry, index) => (
              <span key={index} className="text-sm" style={{ color: entry.color }}>
                ● {entry.name}
              </span>
            ))}
          </div>
        </Card>

        {/* Line Chart */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Donations received overtime</h3>
          <LineChart width={400} height={200} data={donationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#6DA34D" strokeWidth={2} />
          </LineChart>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
