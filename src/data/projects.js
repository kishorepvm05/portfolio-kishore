/**
 * Projects Data
 * Clearly labelled demonstration and learning projects.
 * Real, practical concepts without fake claims.
 */

export const projectsData = [
  {
    id: "mysql-ecommerce-analysis",
    title: "E-Commerce Database Analysis",
    subtitle: "Customer & Transaction Insights via Relational Queries",
    technology: "MySQL",
    techBadgeColor: "#00758f",
    statusBadge: "DEMO & LEARNING PROJECT",
    isDemo: true,
    shortDescription: 
      "Explore customer, product, and sales data using SQL queries to identify useful business insights like top revenue categories and repeat buyer trends.",
    
    overview: 
      "A hands-on SQL analysis project conducted on a simulated multi-table retail database (Customers, Orders, Order_Items, Products, and Categories). The goal is to answer real-world business queries using structured query syntax.",
    
    tools: ["MySQL", "SQL Queries", "Relational Joins", "Aggregations", "Data Modeling"],
    
    learningOutcomes: [
      "Mastered multi-table INNER and LEFT JOIN operations across transaction records.",
      "Applied GROUP BY and HAVING clauses to isolate top-tier customer spending segments.",
      "Calculated business metrics such as Average Order Value (AOV) and category contribution percentages.",
      "Understood how primary and foreign key constraints preserve data integrity in production schemas."
    ],

    highlights: [
      { metric: "Tables Joined", value: "4 Relational Tables" },
      { metric: "Key Metrics", value: "AOV, Repeat Rate, MoM Sales" },
      { metric: "Query Focus", value: "Joins, Aggregates & Subqueries" }
    ],

    sampleQueries: [
      {
        title: "Query 1: Top 5 Revenue-Generating Product Categories",
        sql: `-- Calculate total revenue and units sold per product category
SELECT 
    c.category_name,
    COUNT(DISTINCT o.order_id) AS total_orders,
    SUM(oi.quantity) AS total_units_sold,
    ROUND(SUM(oi.quantity * oi.unit_price), 2) AS total_revenue
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_status = 'Completed'
GROUP BY c.category_name
ORDER BY total_revenue DESC
LIMIT 5;`
      },
      {
        title: "Query 2: Identifying High-Value Customers (RFM Basics)",
        sql: `-- Filter customers with orders above average customer spend
SELECT 
    cust.customer_id,
    cust.customer_name,
    COUNT(o.order_id) AS total_orders,
    ROUND(SUM(o.total_amount), 2) AS lifetime_spend
FROM customers cust
JOIN orders o ON cust.customer_id = o.customer_id
GROUP BY cust.customer_id, cust.customer_name
HAVING lifetime_spend > 500
ORDER BY lifetime_spend DESC;`
      }
    ],

    githubUrl: "https://github.com/kishorepvm05/portfolio-kishore#mysql-ecommerce-analysis",
    githubLabel: "View SQL Scripts on GitHub",
    accentColor: "from-cyan-500/20 to-blue-600/10"
  },

  {
    id: "powerbi-sales-dashboard",
    title: "Sales & Performance Dashboard",
    subtitle: "Interactive Business Intelligence & Trend Explorer",
    technology: "Power BI",
    techBadgeColor: "#f2c811",
    statusBadge: "DEMO & LEARNING PROJECT",
    isDemo: true,
    shortDescription: 
      "Create an interactive dashboard to explore sales performance, product categories, regional profitability, and business trends.",

    overview: 
      "An executive-style Power BI dashboard designed to give sales managers a 360-degree view of business operations. Features dynamic slicers for date ranges, regions, and product categories with synchronized KPI visual cards.",

    tools: ["Power BI Desktop", "Power Query", "DAX Measures", "Interactive Slicers", "Data Modeling"],

    learningOutcomes: [
      "Built clean star-schema relationships linking dimension tables (Customer, Date, Territory) to the central Sales fact table.",
      "Authored custom DAX calculations for Year-over-Year (YoY) Growth, Total Margin, and Dynamic Targets.",
      "Cleaned and shaped unformatted source tables using Power Query ETL operations.",
      "Designed an accessible layout following data visualization principles (F-pattern, color contrast, concise KPI cards)."
    ],

    highlights: [
      { metric: "Dashboard Views", value: "Executive Summary & Category Breakdown" },
      { metric: "DAX Measures", value: "Margin %, YoY Growth, Cumulative Revenue" },
      { metric: "Interactivity", value: "Dynamic Cross-Filtering & Date Slicers" }
    ],

    demoDataPreview: [
      { category: "Electronics", sales: "$45,200", margin: "28.4%", growth: "+14.2%" },
      { category: "Office Supplies", sales: "$32,150", margin: "34.1%", growth: "+8.7%" },
      { category: "Furniture", sales: "$28,900", margin: "19.5%", growth: "+3.1%" },
      { category: "Accessories", sales: "$18,400", margin: "41.0%", growth: "+21.5%" }
    ],

    githubUrl: "https://github.com/kishorepvm05/portfolio-kishore#powerbi-sales-dashboard",
    githubLabel: "View Power BI Files on GitHub",
    accentColor: "from-amber-500/20 to-yellow-600/10"
  },

  {
    id: "excel-data-analysis",
    title: "Excel Data Analysis & Summary Model",
    subtitle: "Cleaning, Formulas, Pivot Tables & Dynamic Visuals",
    technology: "Microsoft Excel",
    techBadgeColor: "#107c41",
    statusBadge: "DEMO & LEARNING PROJECT",
    isDemo: true,
    shortDescription: 
      "Organize, clean, summarize, and analyze tabular data using formulas, Pivot Tables, dynamic lookups, and presentation-ready charts.",

    overview: 
      "A structured spreadsheet project demonstrating end-to-end data processing in Excel. Starting with raw, unorganized tabular records containing duplicates and inconsistent text casing, transforming them into a clean master sheet with automated summary KPIs.",

    tools: ["Microsoft Excel", "XLOOKUP / VLOOKUP", "Pivot Tables", "Nested IF Formulas", "Conditional Formatting"],

    learningOutcomes: [
      "Applied text manipulation functions (TRIM, PROPER, UPPER) and removed redundant rows for robust data hygiene.",
      "Constructed multi-criteria lookup workflows using modern XLOOKUP with built-in error handling.",
      "Synthesized large transaction sheets into responsive Pivot Tables grouped by fiscal quarter and product type.",
      "Implemented color-coded conditional formatting rules to highlight underperforming accounts and margin anomalies."
    ],

    highlights: [
      { metric: "Spreadsheet Architecture", value: "Raw Data → Staging → Summary Model" },
      { metric: "Formulas Practiced", value: "XLOOKUP, SUMIFS, COUNTIFS, IFERROR" },
      { metric: "Deliverable", value: "Interactive Pivot Dashboard with Slicers" }
    ],

    sampleFormulaWorkflow: [
      {
        step: "1. Data Validation & Lookup",
        formula: `=XLOOKUP(B2, ItemMaster!$A:$A, ItemMaster!$C:$C, "Unknown Item")`,
        purpose: "Pulls product unit prices safely without breaking on missing values."
      },
      {
        step: "2. Conditional Metric Calculation",
        formula: `=SUMIFS(Orders!$E:$E, Orders!$B:$B, Summary!A2, Orders!$D:$D, ">=" & DATE(2026,1,1))`,
        purpose: "Calculates total category revenue filtered for the active fiscal period."
      }
    ],

    githubUrl: "https://github.com/kishorepvm05/portfolio-kishore#excel-data-analysis",
    githubLabel: "View Excel Worksheets on GitHub",
    accentColor: "from-emerald-500/20 to-teal-600/10"
  },

  {
    id: "python-data-exploration",
    title: "Python Data Exploration & Analysis",
    subtitle: "Basic Programming, Data Parsing & Scripted Insights",
    technology: "Python",
    techBadgeColor: "#38bdf8",
    statusBadge: "DEMO & LEARNING PROJECT",
    isDemo: true,
    shortDescription: 
      "Demonstrate basic Python programming and data exploration using a clearly documented sample dataset and clean modular functions.",

    overview: 
      "A Python beginner project focusing on algorithmic fundamentals, reading structured tabular data, calculating core statistical indicators (mean, median, range), and generating automated business summaries via terminal scripts.",

    tools: ["Python 3", "Data Structures", "Functions", "CSV Module", "Basic Problem Solving"],

    learningOutcomes: [
      "Understood fundamental Python control flow (loops, conditionals, exception handling).",
      "Processed dictionary and list data structures to aggregate and filter tabular information.",
      "Built reusable functions to compute business metrics such as discount impact and regional distribution.",
      "Documented clear docstrings and comments to make code maintainable and readable."
    ],

    highlights: [
      { metric: "Programming Core", value: "Functions, Dictionaries & List Comprehensions" },
      { metric: "Task Automated", value: "CSV Parsing & Statistical Metrics Summary" },
      { metric: "Code Quality", value: "Clean, Commented & Beginner-Friendly" }
    ],

    sampleScript: `"""
Project: Python Data Exploration
Author: Kishore T
Purpose: Load sample sales records and compute key performance indicators
"""

def parse_and_summarize(records):
    total_revenue = 0.0
    category_totals = {}
    
    for row in records:
        amount = float(row.get('amount', 0))
        cat = row.get('category', 'Uncategorized')
        
        total_revenue += amount
        category_totals[cat] = category_totals.get(cat, 0.0) + amount

    avg_order = total_revenue / len(records) if records else 0.0

    return {
        "record_count": len(records),
        "total_revenue": round(total_revenue, 2),
        "average_order": round(avg_order, 2),
        "top_category": max(category_totals, key=category_totals.get)
    }

# Sample Demonstration Execution
sample_data = [
    {"order_id": "ORD01", "category": "Laptops", "amount": 1200},
    {"order_id": "ORD02", "category": "Mice", "amount": 25},
    {"order_id": "ORD03", "category": "Laptops", "amount": 950},
    {"order_id": "ORD04", "category": "Monitors", "amount": 340},
]

summary = parse_and_summarize(sample_data)
print("=== Business Analytics Summary ===")
for k, v in summary.items():
    print(f"{k.replace('_', ' ').title()}: {v}")`,

    githubUrl: "https://github.com/kishorepvm05/portfolio-kishore#python-data-exploration",
    githubLabel: "View Python Scripts on GitHub",
    accentColor: "from-sky-500/20 to-indigo-600/10"
  }
];
