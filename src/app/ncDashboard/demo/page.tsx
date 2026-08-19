"use client";
import React, { useState } from 'react';
import { Menu, X, CheckCircle2 } from 'lucide-react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const tableData = [
  { id: 182, email: 'mrunali.parikh@zyduslife.com', first: 'Mrunali', last: 'Parikh', type: 'Verified Client', typeColor: 'bg-green-100 text-green-800', job: 'Null', company: '-' },
  { id: 174, email: 'vasu@coronaremedies.com', first: 'Vasu', last: 'PNSS', type: 'Verified Client', typeColor: 'bg-green-100 text-green-800', job: 'Null', company: '-' },
  { id: 179, email: 'vincent.wang@tianyopharm.com', first: 'Vincent', last: 'Wang', type: 'Verified Client', typeColor: 'bg-green-100 text-green-800', job: 'Null', company: '-' },
  { id: 169, email: 'vipul.patel@peritepharmasys.com', first: 'Vipul', last: 'Patel', type: 'Verified Client', typeColor: 'bg-green-100 text-green-800', job: 'Null', company: '-' },
  { id: 168, email: 'anna.sanocka@prosperofm.pl', first: 'anna', last: 'sanocka-radzikowska', type: 'Non-Verified Client', typeColor: 'bg-yellow-100 text-yellow-800', job: 'Null', company: '-' },
  { id: 170, email: 'dhirendrakugibm@gmail.com', first: 'Dhirendra', last: 'kumar', type: 'Non-Verified Client', typeColor: 'bg-yellow-100 text-yellow-800', job: 'Null', company: '-' },
  { id: 185, email: 'huntertorrent4@gmali.com', first: 'Hunter', last: 'Torrent', type: 'Non-Verified Client', typeColor: 'bg-yellow-100 text-yellow-800', job: 'Null', company: '-' },
];


// --- SECTION: CONNECT_TOKEN ---


// --- SECTION: JOBS ---
const JobsSection = () => (
  <div dangerouslySetInnerHTML={{ __html: `<body class="bg-gray-50 min-h-screen">
<!-- Include Navigation -->
    {% include 'nc_app/nav.html' %}

    <!-- Main Content -->
<div class="flex min-h-screen main-container">
<!-- Content Area -->
<div class="flex-1 w-full content-wrapper">
<div class="w-full px-2 sm:px-4 lg:px-6 py-8">
<!-- Header -->
<div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-t-2xl shadow-xl">
<div class="px-6 py-8 text-center text-white">
<h1 class="text-4xl font-bold mb-2">NC Jobs Database</h1>
<p class="text-primary-100 text-lg">Live job postings from PostgreSQL RDS</p>
            {% if connection_status == 'connected' %}
                    <div class="mt-4 inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-300/30">
<svg class="w-5 h-5 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
                        Connected to Database
                </div>
            {% elif connection_status == 'error' %}
                    <div class="mt-4 inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-300/30">
<svg class="w-5 h-5 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
</svg>
                        Database Connection Error: {{ error_message }}
                </div>
            {% endif %}
            </div>
</div>
        
        {% if jobs %}
        <!-- Search and Filters -->
<div class="bg-white px-6 py-6 border-b border-gray-200">
<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
<div class="flex-1 max-w-md">
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<input class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" id="searchBox" placeholder="Search job titles..." type="text"/>
</div>
</div>
<div class="flex flex-wrap gap-2">
<button class="filter-btn active px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-primary-600 text-white shadow-md" data-filter="all">All Job Titles</button>
</div>
</div>
</div>
<!-- Statistics Cards -->
<div class="bg-white px-6 py-6 border-b border-gray-200">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl border border-primary-200">
<div class="text-2xl font-bold text-primary-700">{{ total_count }}</div>
<div class="text-sm text-primary-600 font-medium">Total Job Titles</div>
</div>
<div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
<div class="text-2xl font-bold text-blue-700">{{ jobs|length }}</div>
<div class="text-sm text-blue-600 font-medium">Displayed</div>
</div>
</div>
</div>
<!-- Data Table -->
<div class="bg-white rounded-b-2xl shadow-xl overflow-hidden">
<div class="table-container">
<table class="w-full divide-y divide-gray-200">
<thead class="bg-gray-50">
<tr>
<th class="px-3 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
<button class="flex items-center space-x-1 hover:text-primary-600 transition-colors" onclick="sortTable('id')">
<span>ID</span>
<svg class="w-4 h-4" fill="none" id="sort-icon-id" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</th>
<th class="px-3 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
<button class="flex items-center space-x-1 hover:text-primary-600 transition-colors" onclick="sortTable('title')">
<span>Job Title</span>
<svg class="w-4 h-4" fill="none" id="sort-icon-title" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</th>
</tr>
</thead>
<tbody class="bg-white divide-y divide-gray-200">
                    {% for job in jobs %}
                        <tr class="hover:bg-gray-50 transition-colors duration-150">
<td class="px-3 py-4">
<div class="text-sm font-bold text-gray-900">{{ job.id }}</div>
</td>
<td class="px-3 py-4">
<div class="text-sm font-semibold text-gray-900">{{ job.title|default:"-" }}</div>
</td>
</tr>
                    {% endfor %}
                </tbody>
</table>
</div>
</div>
        {% else %}
        <div class="bg-white rounded-b-2xl shadow-xl p-12 text-center">
<div class="max-w-md mx-auto">
<svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
<h3 class="mt-4 text-lg font-medium text-gray-900">No jobs found</h3>
<p class="mt-2 text-sm text-gray-500">Unable to connect to the database or no job data available.</p>
</div>
</div>
        {% endif %}
    </div>

</div></div></body>` }} />
);


// --- SECTION: DISTRIBUTION_MARKET ---


// --- SECTION: INTEREST ---


// --- SECTION: USERS ---



const UsersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All Users');

  const donutData = {
    labels: ['Iniyan Ganesan', 'Iryna Radchenko', 'Prokhor Antropov', 'Other'],
    datasets: [{
      data: [35, 11, 11, 14],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#6b7280'],
      borderWidth: 0,
    }],
  };
  const donutOptions = { cutout: '70%', plugins: { legend: { position: 'bottom' as const, labels: { usePointStyle: true, boxWidth: 8 } } } };

  const barData = {
    labels: ['BD Manager', '(empty)', 'CEO / General Director', 'Marketing Manager', 'Sales Manager', 'Commercial Manager', 'Strategic Portfolio Manager', 'Product Manager', 'RA Manager'],
    datasets: [{
      label: 'Users',
      data: [40, 28, 26, 7, 7, 7, 6, 2, 1],
      backgroundColor: '#ec4899',
    }],
  };
  const barOptions = { indexAxis: 'y' as const, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, max: 40 } } };

  // Dynamically generate exactly 125 users matching KPIs: 90 Verified, 27 Non-Verified, 8 Pending
  const allUsers = [
    { id: 182, email: 'mrunali.parikh@zyduslife.com', first: 'Mrunali', last: 'Parikh', type: 'Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    { id: 174, email: 'vasu@coronaremedies.com', first: 'Vasu', last: 'PNSS', type: 'Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    { id: 179, email: 'vincent.wang@tianyopharm.com', first: 'Vincent', last: 'Wang', type: 'Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    { id: 169, email: 'vipul.patel@peritepharmasys.com', first: 'Vipul', last: 'Patel', type: 'Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    { id: 168, email: 'anna.sanocka@prosperofm.pl', first: 'anna', last: 'sanocka-radzikowska', type: 'Non-Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    { id: 170, email: 'dhirendrakugibm@gmail.com', first: 'Dhirendra', last: 'kumar', type: 'Non-Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    { id: 185, email: 'huntertorrent4@gmali.com', first: 'Hunter', last: 'Torrent', type: 'Non-Verified Client', title: 'Null', company: '-', mobile: 'Null', mcode: 'Null', phone: 'Null', pcode: 'Null' },
    ...Array.from({ length: 118 }).map((_, i) => {
      let type = 'Pending';
      if (i < 86) type = 'Verified Client'; // 4 + 86 = 90
      else if (i < 86 + 24) type = 'Non-Verified Client'; // 3 + 24 = 27
      return { id: 186 + i, email: `user${i}@example.com`, first: `User${i}`, last: `Test`, type, title: 'Manager', company: 'Tech Inc', mobile: '123456', mcode: '+1', phone: '123456', pcode: '+1' };
    })
  ];

  const filteredUsers = allUsers.filter(u => {
    const matchesSearch = Object.values(u).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()));
    if (filter === 'All Users') return matchesSearch;
    return matchesSearch && u.type === filter;
  });

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto font-sans bg-white">
      <div className="bg-[#2546b5] text-white rounded-xl p-8 text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">NC Users Database</h1>
        <p className="text-blue-100 mb-4">Live data from PostgreSQL RDS</p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2 text-left">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-700 mb-1">125</div>
          <div className="text-sm font-medium text-blue-600">Total Registered Users</div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-700 mb-1">90</div>
          <div className="text-sm font-medium text-green-600">User Verified</div>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-yellow-700 mb-1">27</div>
          <div className="text-sm font-medium text-yellow-600">User Not Verified</div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-700 mb-1">125</div>
          <div className="text-sm font-medium text-blue-600">User Registered Today</div>
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-8">Showing {filteredUsers.length} users</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6 text-slate-800">User V/S Number of Products</h2>
          <div className="w-[300px] h-[300px] relative">
            <Doughnut data={donutData} options={donutOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
              <span className="text-3xl font-bold text-slate-800">71</span>
              <span className="text-xs text-slate-500">TOTAL</span>
            </div>
          </div>
        </div>
        <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6 text-slate-800 text-center">User Job Positions</h2>
          <div className="h-[300px] w-[90%]">
            <Bar data={barData} options={{...barOptions, maintainAspectRatio: false}} />
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 justify-between items-center mb-6">
        <div className="relative w-full xl:w-96">
          <input type="text" placeholder="Search users by name, email, job title, or ID..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-white w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All Users', 'Verified Client', 'Non-Verified Client', 'Pending'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto shadow-sm">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-gray-200 text-slate-600">
            <tr>
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">First Name</th>
              <th className="p-4 font-semibold">Last Name</th>
              <th className="p-4 font-semibold">User Type</th>
              <th className="p-4 font-semibold">Job Title</th>
              <th className="p-4 font-semibold">Company</th>
              <th className="p-4 font-semibold">Mobile Phone</th>
              <th className="p-4 font-semibold">Mobile Code</th>
              <th className="p-4 font-semibold">Phone Number</th>
              <th className="p-4 font-semibold">Phone Code</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredUsers.map((u, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-4 text-gray-900">{u.id}</td>
                <td className="p-4 text-gray-600">{u.email}</td>
                <td className="p-4 text-gray-900">{u.first}</td>
                <td className="p-4 text-gray-900">{u.last}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs ${u.type === 'Verified Client' ? 'bg-green-100 text-green-700' : (u.type === 'Non-Verified Client' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700')}`}>{u.type}</span></td>
                <td className="p-4 text-gray-500">{u.title}</td>
                <td className="p-4 text-gray-900">{u.company}</td>
                <td className="p-4 text-gray-500">{u.mobile}</td>
                <td className="p-4 text-gray-500">{u.mcode}</td>
                <td className="p-4 text-gray-500">{u.phone}</td>
                <td className="p-4 text-gray-500">{u.pcode}</td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr><td colSpan={11} className="p-8 text-center text-gray-500">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};





// --- SECTION: ANALYTICS ---
const AnalyticsSection = () => (
  <div dangerouslySetInnerHTML={{ __html: `<main class="max-w-7xl mx-auto px-6 pt-24 pb-16">
<!-- Page header -->
<div class="flex items-start justify-between mb-8">
<div>
<h1 class="text-2xl md:text-3xl font-bold text-gray-900">Analytics</h1>
<p class="text-gray-500 mt-1">Analytics overview, last 7 days</p>
</div>
<div class="flex items-center gap-3">
<button class="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" id="refreshBtn">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 4v5h.582A10 10 0 1021 12h-1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    Refresh
                </button>
<select class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none" id="rangeSelect">
<option value="7">Last 7 days</option>
<option value="14">Last 14 days</option>
<option value="28">Last 28 days</option>
</select>
</div>
</div>
<!-- Chart + right summary -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Line chart card -->
<div class="lg:col-span-2 rounded-2xl bg-white border border-gray-100 shadow-soft p-4 md:p-6">
<div class="flex items-center justify-between mb-4">
<h2 class="text-lg font-semibold text-gray-900">Users and events</h2>
<div class="flex items-center gap-2 text-gray-400">
<span class="inline-flex items-center gap-2 text-xs"><span class="w-3 h-1.5 rounded bg-primary-500"></span>Last 7 days</span>
<span class="inline-flex items-center gap-2 text-xs"><span class="w-3 h-1.5 rounded border border-dashed border-gray-400"></span>Previous period</span>
</div>
</div>
<div class="h-72">
<canvas id="usersChart"></canvas>
</div>
</div>
<!-- Right card: Active users in last 30 minutes -->
<div class="rounded-2xl bg-white border border-gray-100 shadow-soft p-4 md:p-6">
<div class="flex items-center justify-between mb-3">
<h2 class="text-lg font-semibold text-gray-900">Active users in last 30 minutes</h2>
<span class="text-emerald-600" title="Data is being received">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</span>
</div>
<div class="text-5xl font-semibold text-gray-900">0</div>
<div class="mt-6">
<label class="text-sm text-gray-500">Country</label>
<div class="mt-2 h-36 border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">No data available</div>
</div>
<div class="mt-6">
<a class="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium text-sm" href="/analytics/realtime">View realtime <svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></a>
</div>
</div>
</section>
</main>` }} />
);


// --- SECTION: COMPANY ---







const CompanySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All Companies');

  const companyProductsData = {
    labels: ['KMS Pharma', 'Nubinno Connect sp. z o.o.', 'Bioton SA', 'test', 'Pharma Wow', 'Nubinno Sp. z.o.o.', 'XYZ', 'YEHOR', 'SHEN ZHEN ORIENTAL', 'Lukasiewicz Research', 'EVER Neuro Pharma LLC', 'AV Medical CZ s.r.o.', 'Arkona', 'Beijing Kawin Technology', 'Other (189)'],
    datasets: [{ label: 'Number of Products', data: [52, 34, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3], backgroundColor: '#8B5CF6' }],
  };
  const companyBrandsData = {
    labels: ['Glenmark Pharmaceuticals', 'JV JURABEK', 'Bio MED', 'shanghai Send Pharm', 'Bosnalijek Pharmaceutical Co.', 'Corona Remedies Pvt Ltd', 'ACONITUM UAB', 'Nubinno Sp. z.o.o.', 'XYZ', 'Arkona', 'LUPIN EMEA', 'Bioton SA', 'GEROPHARM LLC', 'Test Company', 'LISAPHARMA SPA', 'Other (188)'],
    datasets: [{ label: 'Number of Brands', data: [495, 297, 153, 135, 81, 81, 36, 27, 18, 18, 18, 18, 9, 9, 9, 81], backgroundColor: '#4ADE80' }],
  };
  const options = { indexAxis: 'y' as const, responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true } } };

  // 203 companies exactly
  const allCompanies = [
    { id: 1, name: 'Glenmark Pharmaceuticals Ltd', type: 'Manufacturer', role: 'Seller', crole: 'Primary', loc: 'India', entity: 'Public', exp: '20', therapeutic: '3, 4, 7', pharma: '1, 2', rx: 'RX', status: 'Active' },
    { id: 2, name: 'KMS Pharma', type: 'Distributor', role: 'Buyer', crole: 'Secondary', loc: 'USA', entity: 'Private', exp: '15', therapeutic: '1', pharma: '5', rx: 'OTC', status: 'Active' },
    { id: 3, name: 'Nubinno Connect sp. z o.o.', type: 'Marketing', role: 'Both', crole: 'Primary', loc: 'Poland', entity: 'LLC', exp: '5', therapeutic: '2, 5', pharma: '1', rx: 'Both', status: 'Active' },
    { id: 4, name: 'Bioton SA', type: 'Manufacturer', role: 'Seller', crole: 'Primary', loc: 'Poland', entity: 'Public', exp: '10', therapeutic: '8', pharma: '2', rx: 'RX', status: 'Inactive' },
    { id: 5, name: 'JV JURABEK LABORATORIES LTD', type: 'Distributor', role: 'Buyer', crole: 'Primary', loc: 'Uzbekistan', entity: 'Private', exp: '12', therapeutic: '1, 4', pharma: '1, 3', rx: 'RX', status: 'Suspended' },
    ...Array.from({ length: 198 }).map((_, i) => ({
      id: i + 6, name: `Company ${i + 6}`, type: 'Distributor', role: i % 2 === 0 ? 'Buyer' : 'Both', crole: 'Secondary', loc: 'USA', entity: 'Private', exp: '5', therapeutic: '1', pharma: '5', rx: 'OTC', status: i % 3 === 0 ? 'Inactive' : 'Active'
    }))
  ];

  const filteredCompanies = allCompanies.filter(c => {
    const matchesSearch = Object.values(c).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()));
    if (filter === 'All Companies') return matchesSearch;
    return matchesSearch && c.status === filter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="bg-[#3b5bdb] text-white py-8 px-6 rounded-t-xl mb-6 flex flex-col items-center mx-4 mt-4">
        <h1 className="text-3xl font-bold mb-2">NC Companies Database</h1>
        <p className="text-blue-100 mb-4">Live data from PostgreSQL RDS</p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">203</h3>
          <p className="text-blue-600 text-sm">Total Registered Companies</p>
        </div>
        <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-green-700 mb-1">0</h3>
          <p className="text-green-600 text-sm">Today Registered Company</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">40</h3>
          <p className="text-blue-600 text-sm">Seller/Licensor Count</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-yellow-700 mb-1">5</h3>
          <p className="text-yellow-600 text-sm">Buyer Counts</p>
        </div>
        <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl w-full">
          <h3 className="text-3xl font-bold text-purple-700 mb-1">200</h3>
          <p className="text-purple-600 text-sm">Both Count (Buyer + Seller)</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl mx-4 mb-8 p-6 shadow-sm">
        <h3 className="text-center font-semibold text-lg mb-6">Company vs Products</h3>
        <div className="h-[300px]"><Bar data={companyProductsData} options={options} /></div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl mx-4 mb-8 p-6 shadow-sm">
        <h3 className="text-center font-semibold text-lg mb-6">Company vs Number of Brands</h3>
        <div className="h-[300px]"><Bar data={companyBrandsData} options={options} /></div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between mx-4 mb-6">
        <div className="relative w-full xl:w-96">
          <input type="text" placeholder="Search companies by name, type, role, company role, location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-white w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500" />
          <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div className="flex flex-wrap gap-2 w-full xl:w-auto">
          {['All Companies', 'Active', 'Inactive', 'Suspended', 'Deleted'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-4 mx-4">Showing {filteredCompanies.length} companies</div>

      <div className="bg-white border border-slate-200 mx-4 rounded-xl overflow-x-auto shadow-sm mb-10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Company Name</th>
              <th className="p-4 font-semibold">Type</th>
              <th className="p-4 font-semibold text-blue-600">Role</th>
              <th className="p-4 font-semibold">Company Role</th>
              <th className="p-4 font-semibold">Location</th>
              <th className="p-4 font-semibold">Legal Entity Type</th>
              <th className="p-4 font-semibold">Years of Experience</th>
              <th className="p-4 font-semibold">Therapeutic Areas ID</th>
              <th className="p-4 font-semibold">Pharmaceutical Forms ID</th>
              <th className="p-4 font-semibold">RX OTC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCompanies.map((c, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-4">{c.id}</td>
                <td className="p-4 font-medium text-gray-900">{c.name}</td>
                <td className="p-4">{c.type}</td>
                <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{c.role}</span></td>
                <td className="p-4">{c.crole}</td>
                <td className="p-4">{c.loc}</td>
                <td className="p-4">{c.entity}</td>
                <td className="p-4">{c.exp}</td>
                <td className="p-4 text-gray-500">{c.therapeutic}</td>
                <td className="p-4 text-gray-500">{c.pharma}</td>
                <td className="p-4 text-gray-500">{c.rx}</td>
              </tr>
            ))}
            {filteredCompanies.length === 0 && <tr><td colSpan={11} className="p-8 text-center text-slate-400">No companies found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};









const DistributionMarketSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All Records');

  const warehouseData = {
    labels: ['Other (4)', 'LUPIN EMEA', 'Test2 Pharma', 'Test Company', 'Fosun Pharma Sp. z o.o.', 'GryNumber Health UAB', 'PACE INTERNATIONAL', 'Hennig Arzneimittel GmbH & CO. KG', 'Axcount Generika GmbH'],
    datasets: [{ label: 'Total Warehouse', data: [112, 2, 1, 1, 1, 1, 1, 1, 1], backgroundColor: '#F59E0B' }],
  };
  const salesData = {
    labels: ['Other (2)', 'PharmaS d.o.o.', 'Hennig Arzneimittel GmbH & CO. KG', 'Crystal Chemicals FZ LLC', 'PACE INTERNATIONAL', 'Chengdu Brilliant pharma group', 'LUPIN EMEA', 'Test Company', 'GryNumber Health UAB'],
    datasets: [{ label: 'Total Market Sales', data: [2200000000, 50600000, 35000000, 1000000, 150000, 90000, 80000, 45000, 10000], backgroundColor: '#99F6E4' }],
  };
  const options = { indexAxis: 'y' as const, responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true } } };

  const brandsData = { labels: Array(80).fill(''), datasets: [{ label: 'Brand Name vs No. of Company', data: Array(80).fill(1), backgroundColor: '#10B981' }] };
  const brandsOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { max: 2, ticks: { stepSize: 1 } }, x: { display: false } } };

  const allRecords = [
    { id: 1, company: 'LUPIN EMEA', country: 'Germany', warehouse: 2, sales: 80000, hasWarehouse: 'Yes' },
    { id: 2, company: 'PharmaS d.o.o.', country: 'Croatia', warehouse: 0, sales: 50600000, hasWarehouse: 'No' },
    { id: 3, company: 'Hennig Arzneimittel GmbH & CO. KG', country: 'Germany', warehouse: 1, sales: 35000000, hasWarehouse: 'Yes' },
    { id: 4, company: 'Crystal Chemicals FZ LLC', country: 'UAE', warehouse: 0, sales: 1000000, hasWarehouse: 'No' },
    { id: 5, company: 'PACE INTERNATIONAL', country: 'USA', warehouse: 1, sales: 150000, hasWarehouse: 'Yes' },
    { id: 6, company: 'Chengdu Brilliant pharma group', country: 'China', warehouse: 0, sales: 90000, hasWarehouse: 'No' },
    { id: 7, company: 'Test Company', country: 'Test', warehouse: 1, sales: 45000, hasWarehouse: 'Yes' },
    { id: 8, company: 'GryNumber Health UAB', country: 'Lithuania', warehouse: 1, sales: 10000, hasWarehouse: 'Yes' },
    { id: 9, company: 'Test2 Pharma', country: 'Test', warehouse: 1, sales: 0, hasWarehouse: 'Yes' },
    { id: 10, company: 'Fosun Pharma Sp. z o.o.', country: 'Poland', warehouse: 1, sales: 0, hasWarehouse: 'Yes' },
    { id: 11, company: 'Axcount Generika GmbH', country: 'Germany', warehouse: 1, sales: 0, hasWarehouse: 'Yes' },
    { id: 12, company: 'Other (1)', country: 'Other', warehouse: 4, sales: 2000000000, hasWarehouse: 'Yes' }, 
  ];

  const filteredRecords = allRecords.filter(r => {
    const matchesSearch = Object.values(r).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()));
    if (filter === 'All Records') return matchesSearch;
    if (filter === 'With Warehouse') return matchesSearch && r.hasWarehouse === 'Yes';
    if (filter === 'No Warehouse') return matchesSearch && r.hasWarehouse === 'No';
    return matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="bg-[#2453c9] text-white py-8 px-6 rounded-t-xl mb-6 flex flex-col items-center mx-4 mt-4">
        <h1 className="text-3xl font-bold mb-2">NC Distribution Market</h1>
        <p className="text-blue-100 mb-4">Live data from PostgreSQL RDS</p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">14</h3>
          <p className="text-blue-600 text-sm">Unique Countries Registered</p>
        </div>
        <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-green-700 mb-1">0</h3>
          <p className="bg-green-200 text-green-800 text-sm inline-block px-1">Companies Without Country</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">12</h3>
          <p className="text-blue-600 text-sm">Total Companies</p>
        </div>
        <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-purple-700 mb-1">0</h3>
          <p className="text-purple-600 text-sm">CRM Users</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-center font-semibold text-lg mb-6">Company VS Total Warehouse</h3>
          <div className="h-[250px]"><Bar data={warehouseData} options={options} /></div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-center font-semibold text-lg mb-6">Company VS Total Market Sales</h3>
          <div className="h-[250px]"><Bar data={salesData} options={options} /></div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl mx-4 mb-8 p-6 shadow-sm">
        <h3 className="text-center font-semibold text-lg mb-6">Brand name VS no. of Company</h3>
        <div className="h-[200px]"><Bar data={brandsData} options={brandsOptions} /></div>
      </div>
      
      {/* Search and Table */}
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between mx-4 mb-6">
        <div className="relative w-full xl:w-96">
          <input type="text" placeholder="Search distribution data..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-white w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500" />
          <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div className="flex flex-wrap gap-2 w-full xl:w-auto">
          {['All Records', 'With Warehouse', 'No Warehouse'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 mx-4 rounded-xl overflow-x-auto shadow-sm mb-10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Company Name</th>
              <th className="p-4 font-semibold">Country</th>
              <th className="p-4 font-semibold">Total Warehouse</th>
              <th className="p-4 font-semibold">Market Sales</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredRecords.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-4">{r.id}</td>
                <td className="p-4 font-medium text-gray-900">{r.company}</td>
                <td className="p-4">{r.country}</td>
                <td className="p-4">{r.warehouse}</td>
                <td className="p-4">${r.sales.toLocaleString()}</td>
              </tr>
            ))}
            {filteredRecords.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-slate-400">No records found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};









const InterestSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All Records');
  
  const interestData = {
    labels: ['Other (113)', 'Nikola Sakalou', 'Alena Zlobina', 'Igor Bolotov', 'Stefan Ries', 'Hadi Tarek', 'Omkar Joshi', 'Iryna Radchenko', 'Philip Tyczynski', 'yehor hhh', 'Prokhor Antropov', 'Cynthia chen', 'Christian Stock'],
    datasets: [{ label: 'Number of Interests', data: [17, 8, 4, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1], backgroundColor: '#10B981' }],
  };
  const options = { indexAxis: 'y' as const, responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true } } };

  // 126 records (13 specific + 113 other)
  const allRecords = [
    { id: 1, user: 'Nikola Sakalou', interests: 8, global: 'Yes', atc: 'A01, B02' },
    { id: 2, user: 'Alena Zlobina', interests: 4, global: 'No', atc: 'C03' },
    { id: 3, user: 'Igor Bolotov', interests: 2, global: 'No', atc: 'D04' },
    { id: 4, user: 'Stefan Ries', interests: 2, global: 'Yes', atc: 'J05' },
    { id: 5, user: 'Hadi Tarek', interests: 2, global: 'No', atc: 'A02' },
    { id: 6, user: 'Omkar Joshi', interests: 2, global: 'Yes', atc: 'B01' },
    { id: 7, user: 'Iryna Radchenko', interests: 2, global: 'No', atc: 'C01' },
    { id: 8, user: 'Philip Tyczynski', interests: 2, global: 'No', atc: 'D01' },
    { id: 9, user: 'yehor hhh', interests: 2, global: 'No', atc: 'G01' },
    { id: 10, user: 'Prokhor Antropov', interests: 1, global: 'No', atc: 'H01' },
    { id: 11, user: 'Cynthia chen', interests: 1, global: 'Yes', atc: 'J01' },
    { id: 12, user: 'Christian Stock', interests: 1, global: 'No', atc: 'L01' },
    ...Array.from({ length: 114 }).map((_, i) => ({
      id: i + 13, user: `Other User ${i+1}`, interests: 1, global: 'No', atc: 'M01'
    }))
  ];

  const filteredRecords = allRecords.filter(r => {
    const matchesSearch = Object.values(r).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()));
    if (filter === 'All Records') return matchesSearch;
    if (filter === 'Global') return matchesSearch && r.global === 'Yes';
    if (filter === 'Local') return matchesSearch && r.global === 'No';
    return matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="bg-[#2453c9] text-white py-8 px-6 rounded-t-xl mb-6 flex flex-col items-center mx-4 mt-4">
        <h1 className="text-3xl font-bold mb-2">NC Interest</h1>
        <p className="text-blue-100 mb-4">Live data from PostgreSQL RDS</p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">226</h3>
          <p className="text-blue-600 text-sm">Total Interests</p>
        </div>
        <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-green-700 mb-1">29</h3>
          <p className="text-green-600 text-sm">Unique Users</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">2</h3>
          <p className="text-blue-600 text-sm">Global Interests</p>
        </div>
        <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-purple-700 mb-1">5</h3>
          <p className="text-purple-600 text-sm">Unique ATC Codes</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl mx-4 mb-8 p-6 shadow-sm">
        <h3 className="text-center font-semibold text-lg mb-6">User name V/S No. of Interest</h3>
        <div className="h-[300px]"><Bar data={interestData} options={options} /></div>
      </div>
      
      {/* Search and Table */}
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between mx-4 mb-6">
        <div className="relative w-full xl:w-96">
          <input type="text" placeholder="Search interests data..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-white w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500" />
          <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div className="flex flex-wrap gap-2 w-full xl:w-auto">
          {['All Records', 'Global', 'Local'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 mx-4 rounded-xl overflow-x-auto shadow-sm mb-10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">User Name</th>
              <th className="p-4 font-semibold">No. of Interests</th>
              <th className="p-4 font-semibold">Global Interest</th>
              <th className="p-4 font-semibold">ATC Codes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredRecords.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-4">{r.id}</td>
                <td className="p-4 font-medium text-gray-900">{r.user}</td>
                <td className="p-4">{r.interests}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded text-xs ${r.global === 'Yes' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>{r.global}</span></td>
                <td className="p-4 text-gray-500">{r.atc}</td>
              </tr>
            ))}
            {filteredRecords.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-slate-400">No records found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};









const ConnectTokenSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All Tokens');

  const tokenData = {
    labels: ['Magdalena Schmitzberger', 'Other', 'Jörg Klumbis', 'yehor hhh', 'Igor Bolotov', 'Piotr Zaleski', 'Stefan Ries', 'Iryna Radchenko'],
    datasets: [{
      data: [100, 42, 13, 11, 7, 6, 6, 5],
      backgroundColor: ['#EF4444', '#9CA3AF', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#F97316', '#14B8A6'],
      borderWidth: 2, borderColor: '#ffffff',
    }],
  };
  const options = { responsive: true, maintainAspectRatio: false, cutout: '60%', plugins: { legend: { display: false } } };

  // 264 total records generated to match KPI
  const allRecords = [
    { id: 1, user: 'Magdalena Schmitzberger', tokens: 100, status: 'Active', lastUsed: '2023-10-15' },
    { id: 2, user: 'Jörg Klumbis', tokens: 13, status: 'Active', lastUsed: '2023-10-14' },
    { id: 3, user: 'yehor hhh', tokens: 11, status: 'Inactive', lastUsed: '2023-09-01' },
    { id: 4, user: 'Igor Bolotov', tokens: 7, status: 'Active', lastUsed: '2023-10-10' },
    { id: 5, user: 'Piotr Zaleski', tokens: 6, status: 'Active', lastUsed: '2023-10-09' },
    { id: 6, user: 'Stefan Ries', tokens: 6, status: 'Active', lastUsed: '2023-10-08' },
    { id: 7, user: 'Iryna Radchenko', tokens: 5, status: 'Active', lastUsed: '2023-10-07' },
    ...Array.from({ length: 257 }).map((_, i) => ({
      id: i + 8, user: `Other User ${i+1}`, tokens: 1, status: i % 4 === 0 ? 'Inactive' : 'Active', lastUsed: '2023-01-01'
    }))
  ];

  const filteredRecords = allRecords.filter(r => {
    const matchesSearch = Object.values(r).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()));
    if (filter === 'All Tokens') return matchesSearch;
    return matchesSearch && r.status === filter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="bg-[#2453c9] text-white py-8 px-6 rounded-t-xl mb-6 flex flex-col items-center mx-4 mt-4">
        <h1 className="text-3xl font-bold mb-2">NC Connect Token</h1>
        <p className="text-blue-100 mb-4">Live data from PostgreSQL RDS</p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">264</h3>
          <p className="text-blue-600 text-sm">Total Records</p>
        </div>
        <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-green-700 mb-1">125</h3>
          <p className="text-green-600 text-sm">Unique Users</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-700 mb-1">29</h3>
          <p className="text-blue-600 text-sm">Active Tokens</p>
        </div>
        <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-purple-700 mb-1">0</h3>
          <p className="text-purple-600 text-sm">Billing Active</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl mx-4 mb-8 p-8 shadow-sm">
        <h3 className="text-center font-semibold text-lg mb-10">User VS Total Token</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-6 flex-1 max-w-sm">
            {[
              { label: 'Magdalena Schmitzberger', value: 100, pct: '52.63%', color: 'bg-red-500' },
              { label: 'Jörg Klumbis', value: 13, pct: '6.84%', color: 'bg-green-500' },
              { label: 'yehor hhh', value: 11, pct: '5.79%', color: 'bg-blue-500' },
              { label: 'Igor Bolotov', value: 7, pct: '3.68%', color: 'bg-yellow-500' },
              { label: 'Piotr Zaleski', value: 6, pct: '3.16%', color: 'bg-purple-500' },
              { label: 'Stefan Ries', value: 6, pct: '3.16%', color: 'bg-orange-500' },
              { label: 'Iryna Radchenko', value: 5, pct: '2.63%', color: 'bg-teal-500' },
              { label: 'Other', value: 42, pct: '22.11%', color: 'bg-gray-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div className="flex flex-col"><span className="font-semibold text-sm text-slate-800">{item.label}</span><span className="text-xs text-slate-500">{item.pct}</span></div>
                </div>
                <span className="font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="relative w-[250px] h-[250px]">
            <Doughnut data={tokenData} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">190</span>
              <span className="text-xs font-semibold text-slate-500 tracking-wider">TOTAL TOKENS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between mx-4 mb-6">
        <div className="relative w-full xl:w-96">
          <input type="text" placeholder="Search token data..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-white w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500" />
          <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div className="flex flex-wrap gap-2 w-full xl:w-auto">
          {['All Tokens', 'Active', 'Inactive'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{f}</button>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mb-4 mx-4">Showing {filteredRecords.length} records</div>

      <div className="bg-white border border-slate-200 mx-4 rounded-xl overflow-x-auto shadow-sm mb-10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">User Name</th>
              <th className="p-4 font-semibold">Total Tokens</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Last Used</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredRecords.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-4">{r.id}</td>
                <td className="p-4 font-medium text-gray-900">{r.user}</td>
                <td className="p-4 font-bold">{r.tokens}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded text-xs ${r.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{r.status}</span></td>
                <td className="p-4 text-gray-500">{r.lastUsed}</td>
              </tr>
            ))}
            {filteredRecords.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-slate-400">No records found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};






export default function NCDemoPage() {
  const [activeTab, setActiveTab] = useState('users');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getBtnClass = (tabName: string) => {
    const base = "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ";
    const active = activeTab === tabName ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900";
    return base + active + (isSidebarOpen ? " justify-start" : " justify-center");
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">

      <nav className={`bg-white border-r border-slate-200 h-full flex flex-col shadow-sm z-10 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className={`h-16 flex items-center border-b border-slate-200 ${isSidebarOpen ? 'px-6 justify-between' : 'justify-center'}`}>
            {isSidebarOpen && <span className="font-semibold text-lg text-slate-800 tracking-tight whitespace-nowrap overflow-hidden">NC Dashboard</span>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 rounded-md text-slate-500 hover:bg-slate-100 transition-colors">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
          {/* Requested Order: Users, Jobs, Company, Interest, Distribution Market, Connect Token. And Analytics. */}
          
          <button onClick={() => setActiveTab('users')} className={getBtnClass('users')} title="Users">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            {isSidebarOpen && <span>Users</span>}
          </button>

          

          <button onClick={() => setActiveTab('company')} className={getBtnClass('company')} title="Company">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            {isSidebarOpen && <span>Company</span>}
          </button>

          <button onClick={() => setActiveTab('interest')} className={getBtnClass('interest')} title="Interest">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            {isSidebarOpen && <span>Interest</span>}
          </button>

          <button onClick={() => setActiveTab('distribution_market')} className={getBtnClass('distribution_market')} title="Distribution Market">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {isSidebarOpen && <span className="truncate">Distribution Market</span>}
          </button>

          <button onClick={() => setActiveTab('connect_token')} className={getBtnClass('connect_token')} title="Connect Token">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
            {isSidebarOpen && <span>Connect Token</span>}
          </button>

          

        </div>
      </nav>
      <div className="flex-1 overflow-auto bg-slate-50 relative">
        <div className="min-w-[800px]">
          {activeTab === 'users' && <UsersSection />}
          
          {activeTab === 'company' && <CompanySection />}
          {activeTab === 'interest' && <InterestSection />}
          {activeTab === 'distribution_market' && <DistributionMarketSection />}
          {activeTab === 'connect_token' && <ConnectTokenSection />}
          
        </div>
      </div>
    </div>
  );
}
